﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NewCrmCore.Application.Services.Interface;
using NewCrmCore.Domain.Entitys.System;
using NewCrmCore.Domain.Services.Interface;
using NewCrmCore.Domain.ValueObject;
using NewCrmCore.Dto;
using NewCrmCore.Infrastructure;
using NewCrmCore.Infrastructure.CommonTools;
using NewCrmCore.NotifyCenter;
using NewLibCore.Validate;
using static NewCrmCore.Infrastructure.CommonTools.CacheKey;

namespace NewCrmCore.Application.Services
{
    public class AppServices : IAppServices
    {
        private readonly CommonNotify _commonNotify;

        private readonly IAppContext _appContext;

        private readonly IDeskContext _deskContext;

        public AppServices(IAppContext appContext, IDeskContext deskContext, CommonNotify commonNotify)
        {
            _appContext = appContext;
            _deskContext = deskContext;
            _commonNotify = commonNotify;
        }

        public async Task<List<AppTypeDto>> GetAppTypesAsync()
        {
            var result = await _appContext.GetAppTypesAsync();
            return result.Select(s => new AppTypeDto { Id = s.Id, Name = s.Name, IsSystem = s.IsSystem }).ToList();
        }

        public async Task<TodayRecommendAppDto> GetTodayRecommendAsync(Int32 userId)
        {
            Check.IfNullOrZero(userId);

            var result = await _appContext.GetTodayRecommendAsync(userId);
            result.AppIcon = result.IsIconByUpload ? $@"{ Appsetting.FileUrl}{ result.AppIcon}" : result.AppIcon;
            if (result == null)
            {
                result = new TodayRecommendAppDto();
            }

            return result;
        }

        public async Task<(Int32 allCount, Int32 notReleaseCount)> GetDevelopAndNotReleaseCountAsync(Int32 userId)
        {
            Check.IfNullOrZero(userId);
            return await _appContext.GetDevelopAndNotReleaseCountAsync(userId);
        }

        public async Task<PageList<AppDto>> GetAppsAsync(Int32 userId, Int32 appTypeId, Int32 orderId, String searchText, Int32 pageIndex, Int32 pageSize)
        {
            Check.IfNullOrZero(userId, true);
            Check.IfNullOrZero(orderId);
            Check.IfNullOrZero(pageIndex, true);
            Check.IfNullOrZero(pageSize);

            return await Task.Run(() =>
            {
                var result = _appContext.GetApps(userId, appTypeId, orderId, searchText, pageIndex, pageSize, out var totalCount);
                return new PageList<AppDto>
                {
                    TotalCount = totalCount,
                    Models = result.Select(app => new AppDto
                    {
                        AppTypeId = app.AppTypeId,
                        UserId = app.UserId,
                        AddTime = app.AddTime.ToString("yyyy-MM-dd"),
                        UseCount = app.UseCount,
                        StarCount = app.StarCount,
                        Name = app.Name,
                        IconUrl = app.IsIconByUpload ? $@"{Appsetting.FileUrl}{app.IconUrl}" : app.IconUrl,
                        Remark = app.Remark,
                        AppStyle = app.AppStyle,
                        Id = app.Id,
                        IsInstall = app.IsInstall
                    }).ToList()
                };
            });
        }

        public async Task<PageList<AppDto>> GetUserAppsAsync(Int32 userId, String searchText, Int32 appTypeId, Int32 appStyleId, String appState, Int32 pageIndex, Int32 pageSize)
        {
            Check.IfNullOrZero(userId, true);
            Check.IfNullOrZero(appTypeId, true);
            Check.IfNullOrZero(appStyleId, true);
            Check.IfNullOrZero(pageIndex);
            Check.IfNullOrZero(pageSize);

            return await Task.Run(async () =>
            {
                var result = _appContext.GetUserApps(userId, searchText, appTypeId, appStyleId, appState, pageIndex, pageSize, out var totalCount);
                var appTypes = await GetAppTypesAsync();
                return new PageList<AppDto>
                {
                    TotalCount = totalCount,
                    Models = result.Select(app => new AppDto
                    {
                        Name = app.Name,
                        AppStyle = app.AppStyle,
                        AppTypeName = appTypes.FirstOrDefault(appType => appType.Id == app.AppTypeId).Name,
                        UseCount = app.UseCount,
                        Id = app.Id,
                        IconUrl = app.IconUrl,
                        AppAuditState = app.AppAuditState,
                        IsRecommand = app.IsRecommand,
                        UserId = app.UserId,
                        IsIconByUpload = app.IsIconByUpload
                    }).ToList()
                };
            });
        }

        public async Task<AppDto> GetAppAsync(Int32 appId, Int32 userId)
        {
            Check.IfNullOrZero(appId);

            var result = await _appContext.GetAppAsync(appId);
            var appTypes = await CacheHelper.GetOrSetCacheAsync(new AppTypeCacheKey(), () => GetAppTypesAsync());

            return new AppDto
            {
                Name = result.Name,
                IconUrl = result.IconUrl,
                Remark = result.Remark,
                UseCount = result.UseCount,
                StarCount = result.StarCount,
                AppTypeName = appTypes.FirstOrDefault(appType => appType.Id == result.AppTypeId).Name,
                AddTime = result.AddTime.ToString("yyyy-MM-dd"),
                UserId = result.UserId,
                Id = result.Id,
                IsResize = result.IsResize,
                IsOpenMax = result.IsOpenMax,
                IsFlash = result.IsFlash,
                AppStyle = result.AppStyle,
                AppUrl = result.AppUrl,
                Width = result.Width,
                Height = result.Height,
                AppAuditState = result.AppAuditState,
                AppReleaseState = result.AppReleaseState,
                AppTypeId = result.AppTypeId,
                UserName = result.UserName,
                IsIconByUpload = result.IsIconByUpload
            };
        }

        public async Task<Boolean> IsInstallAppAsync(Int32 userId, Int32 appId)
        {
            Check.IfNullOrZero(userId);
            Check.IfNullOrZero(appId);

            var result = await _appContext.IsInstallAppAsync(userId, appId);
            return result;
        }

        public IEnumerable<AppStyleDto> GetAppStyles()
        {
            var descriptions = GetEnumDescriptions(typeof(AppStyle));
            foreach (var description in descriptions)
            {
                yield return new AppStyleDto
                {
                    Id = description.Id,
                    Name = description.Value,
                    Type = description.Type
                };
            }
        }

        public IEnumerable<AppStateDto> GetAppStates()
        {
            var appStates = new List<dynamic>();

            appStates.AddRange(GetEnumDescriptions(typeof(AppAuditState)));
            appStates.AddRange(GetEnumDescriptions(typeof(AppReleaseState)));
            foreach (var appState in appStates)
            {
                yield return new AppStateDto
                {
                    Id = appState.Id,
                    Name = appState.Value,
                    Type = appState.Type
                };
            }
        }

        public async Task<List<AppDto>> GetSystemAppAsync(IEnumerable<Int32> appIds = default)
        {
            var result = await _appContext.GetSystemAppAsync(appIds);
            return result.Select(app => new AppDto
            {
                Id = app.Id,
                Name = app.Name,
                IconUrl = app.IconUrl
            }).ToList();
        }

        public async Task<Boolean> CheckAppTypeNameAsync(String appTypeName)
        {
            Check.IfNullOrZero(appTypeName);
            return await _appContext.CheckAppTypeNameAsync(appTypeName);
        }

        public async Task ModifyAppDirectionAsync(Int32 userId, String direction)
        {
            Check.IfNullOrZero(userId);
            Check.IfNullOrZero(direction);

            if (direction.ToLower() == "x")
            {
                await _deskContext.ModifyMemberDirectionToXAsync(userId);
            }
            else if (direction.ToLower() == "y")
            {
                await _deskContext.ModifyMemberDirectionToYAsync(userId);
            }
            else
            {
                throw new BusinessException($"未能识别的App排列方向:{direction.ToLower()}");
            }
            await CacheHelper.RemoveKeyWhenModify(new ConfigCacheKey(userId));
        }

        public async Task ModifyAppIconSizeAsync(Int32 userId, Int32 newSize)
        {
            Check.IfNullOrZero(userId);
            Check.IfNullOrZero(newSize);
            await _deskContext.ModifyMemberDisplayIconSizeAsync(userId, newSize);
            await CacheHelper.RemoveKeyWhenModify(new ConfigCacheKey(userId));
        }

        public async Task ModifyAppVerticalSpacingAsync(Int32 userId, Int32 newSize)
        {
            Check.IfNullOrZero(userId);
            Check.IfNullOrZero(newSize);
            await _deskContext.ModifyMemberHorizontalSpacingAsync(userId, newSize);
            await CacheHelper.RemoveKeyWhenModify(new ConfigCacheKey(userId));
        }

        public async Task ModifyAppHorizontalSpacingAsync(Int32 userId, Int32 newSize)
        {
            Check.IfNullOrZero(userId);
            Check.IfNullOrZero(newSize);
            await _deskContext.ModifyMemberVerticalSpacingAsync(userId, newSize);
            await CacheHelper.RemoveKeyWhenModify(new ConfigCacheKey(userId));
        }

        public async Task ModifyAppStarAsync(Int32 userId, Int32 appId, Int32 starCount)
        {
            Check.IfNullOrZero(userId);
            Check.IfNullOrZero(appId);
            Check.IfNullOrZero(starCount, true);

            var isInstall = await _appContext.IsInstallAppAsync(userId, appId);
            if (!isInstall)
            {
                throw new BusinessException("您还没有安装这个App，因此不能打分");
            }
            await _appContext.ModifyAppStarAsync(userId, appId, starCount);
        }

        public async Task InstallAppAsync(Int32 userId, Int32 appId, Int32 deskNum)
        {
            Check.IfNullOrZero(userId);
            Check.IfNullOrZero(appId);
            Check.IfNullOrZero(deskNum);
            var app = await _appContext.InstallAsync(userId, appId, deskNum);
            await CacheHelper.RemoveKeyWhenModify(new DesktopCacheKey(userId));
            await _commonNotify.SendNotify(userId, new Notify("应用安装提醒", $@"您选择的 {app.Name} 已安装成功", 0, userId));
        }

        public async Task ModifyUserAppInfoAsync(Int32 userId, AppDto appDto)
        {
            Check.IfNullOrZero(userId);
            Check.IfNullOrZero(appDto);
            await _appContext.ModifyUserAppInfoAsync(userId, appDto.ConvertToModel<AppDto, App>());
        }

        public async Task CreateNewAppAsync(AppDto appDto)
        {
            Check.IfNullOrZero(appDto);
            var app = appDto.ConvertToModel<AppDto, App>();
            var internalApp = new App(app.Name, app.IconUrl, app.AppUrl, app.Width, app.Height, app.AppTypeId, app.AppAuditState, AppReleaseState.UnRelease, app.AppStyle, app.UserId, app.Remark, appDto.IsIconByUpload);

            await _appContext.CreateNewAppAsync(internalApp);
        }

        public async Task RemoveAppTypeAsync(Int32 appTypeId)
        {
            Check.IfNullOrZero(appTypeId);
            await _appContext.DeleteAppTypeAsync(appTypeId);
            await CacheHelper.RemoveKeyWhenModify(new AppTypeCacheKey());
        }

        public async Task CreateNewAppTypeAsync(AppTypeDto appTypeDto)
        {
            Check.IfNullOrZero(appTypeDto);
            var appType = appTypeDto.ConvertToModel<AppTypeDto, AppType>();
            await _appContext.CreateNewAppTypeAsync(appType);
        }

        public async Task ModifyAppTypeAsync(AppTypeDto appTypeDto, Int32 appTypeId)
        {
            Check.IfNullOrZero(appTypeDto);
            Check.IfNullOrZero(appTypeId);
            await _appContext.ModifyAppTypeAsync(appTypeDto.Name, appTypeDto.IsSystem, appTypeId);
        }

        public async Task PassAsync(Int32 appId)
        {
            Check.IfNullOrZero(appId);
            var app = await _appContext.PassAsync(appId);
            await _commonNotify.SendNotify(app.UserId, new Notify("应用审核提醒", $@"您提交的应用 {app.Name} 已审核通过", 0, app.UserId));
        }

        public async Task DenyAsync(Int32 appId)
        {
            Check.IfNullOrZero(appId);
            var app = await _appContext.DenyAsync(appId);
            await _commonNotify.SendNotify(app.UserId, new Notify("应用审核提醒", $@"您提交的应用 {app.Name} 未审核通过", 0, app.UserId));
        }

        public async Task SetTodayRecommandAppAsync(Int32 appId)
        {
            Check.IfNullOrZero(appId);
            await _appContext.SetTodayRecommandAppAsync(appId);
        }

        public async Task RemoveAppAsync(Int32 appId)
        {
            Check.IfNullOrZero(appId);
            await _appContext.RemoveAppAsync(appId);
        }

        public async Task ReleaseAppAsync(Int32 appId)
        {
            Check.IfNullOrZero(appId);
            var result = await _appContext.ReleaseAppAsync(appId);
            await _commonNotify.SendNotify(result.UserId, new Notify("应用发布提醒", $@"您的应用 {result.Name} 已发布到应用市场中 ", 0, result.UserId));
        }

        public async Task ModifyAppIconAsync(Int32 userId, Int32 appId, String newIcon)
        {
            Check.IfNullOrZero(userId);
            Check.IfNullOrZero(appId);
            Check.IfNullOrZero(newIcon);
            await _appContext.ModifyAppIconAsync(userId, appId, newIcon);
        }

        #region private method
        // <summary>
        // <summary> 获取传入的枚举类型的字面量的描述
        private static IEnumerable<dynamic> GetEnumDescriptions(Type enumType)
        {
            return enumType.GetFields().Where(field => field.CustomAttributes.Any()).Select(s => new { s.CustomAttributes.ToArray()[0].ConstructorArguments[0].Value, Id = s.GetRawConstantValue(), Type = enumType.Name }).Cast<dynamic>().ToList();
        }

        #endregion
    }
}

