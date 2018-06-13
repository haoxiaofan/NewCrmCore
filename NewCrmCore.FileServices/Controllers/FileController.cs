﻿using System;
using System.Collections.Generic;
using System.DrawingCore;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NewCrmCore.Infrastructure;

namespace NewCrmCore.FileServices.Controllers
{
	[Route("api/filestorage")]
	public class FileController: Controller
	{
		private static readonly String[] _denyUploadTypes = { ".exe", ".bat", ".bat" };

		[Route("upload"), HttpPost, HttpOptions]
		public IActionResult Upload()
		{
			var responses = new List<dynamic>();

			try
			{
				var request = Request.Form;
				var accountId = request["accountId"];

				if (String.IsNullOrEmpty(accountId))
				{
					responses.Add(new
					{
						IsSuccess = false,
						Message = $@"{nameof(accountId)}参数验证失败"
					});

					return Json(responses);
				}

				var files = request.Files;
				if (files.Count == 0)
				{
					responses.Add(new
					{
						IsSuccess = false,
						Message = "未能获取到上传的文件"
					});

					return Json(responses);
				}

				var uploadType = request["uploadtype"];
				if (String.IsNullOrEmpty(uploadType))
				{
					responses.Add(new
					{
						IsSuccess = false,
						Message = $@"{nameof(uploadType)}参数验证失败"
					});

					return Json(responses);
				}

				if (String.IsNullOrEmpty(Appsetting.FileStorage))
				{
					responses.Add(new
					{
						IsSuccess = false,
						Message = $@"未能找到服务器配置的存储路径"
					});
					return Json(responses);
				}


				for (var i = 0; i < files.Count; i++)
				{
					var file = files[i];
					var fileExtension = RequestFile.GetFileExtension(file);

					if (_denyUploadTypes.Any(d => d.ToLower() == fileExtension))
					{
						responses.Add(new
						{
							IsSuccess = false,
							Message = $@"后缀名为：{fileExtension}的文件禁止上传"
						});
					}
					else
					{
						var stream = file.OpenReadStream();
						var bytes = new byte[stream.Length];
						var requestFile = CreateRequestFile(accountId, uploadType, fileExtension);

						using (var fileStream = new FileStream(requestFile.FullPath, FileMode.Create, FileAccess.Write))
						{
							stream.Read(bytes, 0, bytes.Length);
							fileStream.Write(bytes, 0, bytes.Length);
						}

						if (!System.IO.File.Exists(requestFile.FullPath))
						{
							responses.Add(new
							{
								IsSuccess = false,
								Message = $@"文件上传失败"
							});
						}

						using (var originalImage = Image.FromFile(requestFile.FullPath))
						{
							requestFile.Image = originalImage;

							if (requestFile.FileType == FileType.Icon)
							{
								requestFile.GetReducedImage(49, 49);
								responses.Add(new { IsSuccess = true, requestFile.Url });
							}
							else if (requestFile.FileType == FileType.Face)
							{
								requestFile.GetReducedImage(20, 20);
								return Json(new { avatarUrls = requestFile.Url, msg = "", success = true });
							}
							else
							{
								responses.Add(new
								{
									IsSuccess = true,
									originalImage.Width,
									originalImage.Height,
									Title = "",
									requestFile.Url,
									Md5 = requestFile.Calculate(stream),
								});
							}
						}
					}
				}
			}
			catch (Exception ex)
			{
				responses.Add(new
				{
					IsSuccess = false,
					Message = ex.ToString()
				});
			}

			return Json(responses);
		}

		private static RequestFile CreateRequestFile(String accountId, String fileType, String fileExtension)
		{
			var requestFile = new RequestFile();

			var middlePath = requestFile.GetFileType(fileType);
			var fileFullPath = $@"{Appsetting.FileStorage}/{accountId}/{middlePath}/";
			var fileName = $@"{Guid.NewGuid().ToString().Replace("-", "")}.{fileExtension}";
			if (!Directory.Exists(fileFullPath))
			{
				Directory.CreateDirectory(fileFullPath);
			}

			requestFile.Path = fileFullPath;
			requestFile.Name = fileName;
			requestFile.FullPath = $@"{fileFullPath}{fileName}";
			requestFile.FileType = middlePath;
			requestFile.ResetUrl();
			return requestFile;
		}

	}
}