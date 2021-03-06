﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewCrmCore.Application.Services.Interface;
using NewCrmCore.Dto;
using NewCrmCore.Infrastructure;
using NewLibCore;
using NewLibCore.Validate;
using NewCrmCore.Domain.ValueObject;
using NewCrmCore.WebApi.ApiHelper;

namespace NewCrmCore.WebApi.Controllers
{
    public class AppMarketController : NewCrmController
    {
        private readonly IAppServices _appServices;

        private readonly IUserServices _userServices;

        public AppMarketController(IAppServices appServices, IUserServices userServices)
        {
            _appServices = appServices;
            _userServices = userServices;
        }

        #region 页面

        /// <summary>
        /// 首页
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> InitAppMarketAsync()
        {
            var appTypes = await _appServices.GetAppTypesAsync();
            var userContext = await GetUserContextAsync();
            if (!userContext.IsAdmin)
            {
                appTypes = appTypes.Where(w => !w.IsSystem).ToList();
            }

            var todayRecommendApp = await _appServices.GetTodayRecommendAsync(userContext.Id);
            var user = await _userServices.GetUserAsync(userContext.Id);
            var (allCount, notReleaseCount) = await _appServices.GetDevelopAndNotReleaseCountAsync(userContext.Id);
            var response = new ResponseModel<dynamic>
            {
                Model = new
                {
                    appTypes,
                    todayRecommendApp,
                    UserName = user.Name,
                    allCount,
                    notReleaseCount
                },
                IsSuccess = true,
                Message = "应用市场初始化成功"
            };

            return Json(response);
        }

        /// <summary>
        /// 应用详情
        /// </summary>
        /// <param name="appId"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> InitAppDetailAsync(Int32 appId)
        {
            #region 参数验证
            Check.IfNullOrZero(appId);
            #endregion
            var userContext = await GetUserContextAsync();
            var isInstallApp = await _appServices.IsInstallAppAsync(userContext.Id, appId);
            var appResult = await _appServices.GetAppAsync(appId, userContext.Id);

            var response = new ResponseModel<dynamic>
            {
                Model = new { isInstallApp, appResult.UserName },
                IsSuccess = true,
                Message = "应用详情初始化成功"
            };


            return Json(response);
        }

        /// <summary>
        /// 用户应用管理
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> InitUserAppManageAsync()
        {
            var appTypes = await _appServices.GetAppTypesAsync();
            var userContext = await GetUserContextAsync();
            if (!userContext.IsAdmin)
            {
                appTypes = appTypes.Where(w => !w.IsSystem).ToList();
            }

            var appStyles = _appServices.GetAppStyles().ToList();
            var appStates = _appServices.GetAppStates().ToList();
            var response = new ResponseModel<dynamic>
            {
                Model = new { appTypes, appStates, appStyles },
                IsSuccess = true,
                Message = "用户应用管理初始化成功"
            };
            return Json(response);
        }

        /// <summary>
        /// 我的应用
        /// </summary>
        /// <param name="appId"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> InitUserAppManageInfoAsync(Int32 appId)
        {
            AppDto appDto = null;
            var response = new ResponseModel<dynamic>();
            var userContext = await GetUserContextAsync();
            if (appId != 0)// 如果appId为0则是新创建app
            {
                appDto = await _appServices.GetAppAsync(appId, userContext.Id);
                if (appDto == null)
                {
                    response.IsSuccess = false;
                    response.Message = "未获取到我的应用";
                    return Json(response);
                }
            }
            var appTypes = await _appServices.GetAppTypesAsync();
            if (!userContext.IsAdmin)
            {
                appTypes = appTypes.Where(w => !w.IsSystem).ToList();
            }
            var uniqueToken = CreateUniqueTokenAsync(userContext.Id);

            response.Model = new { appTypes, UserId = userContext.Id, appDto };
            response.IsSuccess = true;
            response.Message = "我的应用初始化成功";

            return Json(response);
        }


        #endregion

        #region 应用打分

        /// <summary>
        /// 应用打分
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ModifyStarAsync(ModifyStar model)
        {
            #region 参数验证
            Check.IfNullOrZero(model.AppId);
            Check.IfNullOrZero(model.StarCount);
            #endregion
            var userContext = await GetUserContextAsync();
            await _appServices.ModifyAppStarAsync(userContext.Id, model.AppId, model.StarCount);
            return Json(new ResponseSimple
            {
                IsSuccess = true,
                Message = "打分成功"
            });
        }

        #endregion

        #region 安装应用

        /// <summary>
        /// 安装应用
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> InstallAsync(Install model)
        {
            #region 参数验证
            Check.IfNullOrZero(model.AppId);
            Check.IfNullOrZero(model.DeskNum);
            #endregion
            var userContext = await GetUserContextAsync();
            await _appServices.InstallAppAsync(userContext.Id, model.AppId, model.DeskNum);
            return Json(new ResponseSimple
            {
                IsSuccess = true,
                Message = "安装成功"
            });
        }

        #endregion

        #region 更新图标 

        /// <summary>
        /// 更新图标
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ModifyIconAsync(ModifyIconForApp model)
        {
            #region 参数验证
            Check.IfNullOrZero(model.AppId);
            Check.IfNullOrZero(model.NewIcon);
            #endregion
            var userContext = await GetUserContextAsync();
            await _appServices.ModifyAppIconAsync(userContext.Id, model.AppId, model.NewIcon);

            return Json(new ResponseModel<String>
            {
                IsSuccess = true,
                Message = "更新图标成功",
                Model = $@"{Appsetting.FileUrl}{model.NewIcon}"
            });
        }

        #endregion

        #region 创建应用

        /// <summary>
        /// 创建应用
        /// </summary>
        /// <param name="forms"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateAsync(IFormCollection forms)
        {
            #region 参数验证
            Check.IfNullOrZero(forms);
            #endregion

            var userContext = await GetUserContextAsync();
            var appDto = WrapperAppDto(forms);
            appDto.UserId = userContext.Id;
            await _appServices.CreateNewAppAsync(appDto);

            return Json(new ResponseSimple
            {
                IsSuccess = true,
                Message = "应用创建成功"
            });
        }

        #endregion

        #region 发布应用

        /// <summary>
        /// 发布应用
        /// </summary>
        /// <param name="appId"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ReleaseAsync(Int32 appId)
        {
            #region 参数验证
            Check.IfNullOrZero(appId);
            #endregion

            await _appServices.ReleaseAppAsync(appId);
            return Json(new ResponseSimple
            {
                IsSuccess = true,
                Message = "应用发布成功"
            });
        }

        #endregion

        #region 修改应用信息

        /// <summary>
        /// 修改应用信息
        /// </summary>
        /// <param name="forms"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ModifyAppInfoAsync(IFormCollection forms)
        {
            #region 参数验证
            Check.IfNullOrZero(forms);
            #endregion
            var userContext = await GetUserContextAsync();
            await _appServices.ModifyUserAppInfoAsync(userContext.Id, WrapperAppDto(forms));
            return Json(new ResponseSimple
            {
                IsSuccess = true,
                Message = "修改app信息成功"
            });
        }

        #endregion

        #region 获取所有应用

        /// <summary>
        /// 获取所有应用
        /// </summary>
        /// <param name="appTypeId"></param>
        /// <param name="orderId"></param>
        /// <param name="searchText"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAppsAsync(Int32 appTypeId, Int32 orderId, String searchText, Int32 pageIndex, Int32 pageSize)
        {
            Check.IfNullOrZero(searchText, true);

            var userContext = await GetUserContextAsync();
            var response = new ResponsePaging<IList<AppDto>>();
            var result = await _appServices.GetAppsAsync(userContext.Id, appTypeId, orderId, searchText, pageIndex, pageSize);
            if (result != null)
            {
                response.TotalCount = result.TotalCount;
                response.IsSuccess = true;
                response.Message = "app列表获取成功";
                response.Model = result.Models;
            }
            else
            {
                response.Message = "app列表获取失败";
            }
            return Json(response);
        }

        #endregion

        #region 获取账户下应用

        /// <summary>
        /// 获取账户下应用
        /// </summary>
        /// <param name="searchText"></param>
        /// <param name="appTypeId"></param>
        /// <param name="appStyleId"></param>
        /// <param name="appState"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetUserAppsAsync(String searchText, Int32 appTypeId, Int32 appStyleId, String appState, Int32 pageIndex, Int32 pageSize)
        {
            Check.IfNullOrZero(searchText, true);

            var response = new ResponsePaging<IList<AppDto>>();
            var userContext = await GetUserContextAsync();
            var result = await _appServices.GetUserAppsAsync(userContext.Id, searchText, appTypeId, appStyleId, appState, pageIndex, pageSize);
            if (result != null)
            {
                response.TotalCount = result.TotalCount;
                response.IsSuccess = true;
                response.Message = "app列表获取成功";
                response.Model = result.Models;
            }
            else
            {
                response.Message = "app列表获取失败";
            }

            return Json(response);
        }

        #endregion

        #region 移除账户中应用

        /// <summary>
        /// 移除账户中应用
        /// </summary>
        /// <param name="appId"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> RemoveAsync(Int32 appId)
        {
            #region 参数验证
            Check.IfNullOrZero(appId);
            #endregion

            await _appServices.RemoveAppAsync(appId);

            return Json(new ResponseSimple
            {
                IsSuccess = true,
                Message = "删除用户开发的app成功"
            });
        }

        #endregion

        #region private method

        /// <summary>
        /// 封装从页面传入的forms表单到AppDto类型
        /// </summary>
        /// <param name="forms"></param>
        /// <returns></returns>
        private static AppDto WrapperAppDto(IFormCollection forms)
        {
            var appDto = new AppDto
            {
                IconUrl = forms["val_icon"],
                Name = forms["val_name"],
                AppTypeId = Int32.Parse(forms["val_app_category_id"]),
                AppUrl = forms["val_url"],
                Width = Int32.Parse(forms["val_width"]),
                Height = Int32.Parse(forms["val_height"]),
                AppStyle = EnumExtensions.ToEnum<AppStyle>(forms["val_type"]),
                Remark = forms["val_remark"],
                AppAuditState = EnumExtensions.ToEnum<AppAuditState>(Int32.Parse(forms["val_verifytype"])),
                AppReleaseState = AppReleaseState.UnRelease, //未发布
                IsIconByUpload = Int32.Parse(forms["isIconByUpload"]) == 1
            };

            if (appDto.AppStyle == AppStyle.App)
            {
                appDto.IsResize = Int32.Parse(forms["val_isresize"]) == 1;
                appDto.IsOpenMax = Int32.Parse(forms["val_isopenmax"]) == 1;
                appDto.IsFlash = Int32.Parse(forms["val_isflash"]) == 1;
                appDto.IsSetbar = Int32.Parse(forms["val_issetbar"]) == 1;
            }

            if ((forms["val_Id"] + "").Length > 0)
            {
                appDto.Id = Int32.Parse(forms["val_Id"]);
            }

            return appDto;
        }

        #endregion
    }
}