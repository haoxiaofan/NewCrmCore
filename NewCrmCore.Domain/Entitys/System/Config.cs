﻿using System;
using System.ComponentModel;
using NewCrmCore.Domain.ValueObject;
using NewLibCore.Data.Mapper.MapperExtension;

namespace NewCrmCore.Domain.Entitys.System
{
	[Description("用户配置"), Serializable]
	public partial class Config : DomainModelBase
	{
		/// <summary>
		/// 皮肤
		/// </summary>
		[PropertyRequired, InputRange(10)]
		public String Skin { get; private set; }

		/// <summary>
		/// 用户头像
		/// </summary>
		[PropertyRequired, InputRange(150)]
		public String AccountFace { get; private set; }

		/// <summary>
		/// app尺寸
		/// </summary>
		[PropertyRequired]
		public Int32 AppSize { get; private set; }

		/// <summary>
		/// app垂直间距
		/// </summary>
		[PropertyRequired]
		public Int32 AppVerticalSpacing { get; private set; }

		/// <summary>
		/// app水平间距
		/// </summary>
		[PropertyRequired]
		public Int32 AppHorizontalSpacing { get; private set; }
		/// <summary>
		/// 默认桌面编号
		/// </summary>
		[PropertyDefaultValue(typeof(Int32), 1)]
		public Int32 DefaultDeskNumber { get; private set; }

		/// <summary>
		/// 默认桌面数量
		/// </summary>
		[PropertyDefaultValue(typeof(Int32), 5)]
		public Int32 DefaultDeskCount { get; private set; }

		/// <summary>
		/// 壁纸的展示模式
		/// </summary>
		[PropertyRequired]
		public WallpaperMode WallpaperMode { get; private set; }

		/// <summary>
		/// 壁纸来源
		/// </summary>
		[PropertyDefaultValue(typeof(Boolean), false)]
		public Boolean IsBing { get; private set; }

		/// <summary>
		/// app排列方向
		/// </summary>
		[PropertyRequired]
		public AppAlignMode AppXy { get; private set; }

		/// <summary>
		/// 码头位置
		/// </summary>
		[PropertyDefaultValue(typeof(DockPostion), DockPostion.Top)]
		public DockPostion DockPosition { get; private set; }

		/// <summary>
		/// 账户Id
		/// </summary>
		[PropertyRequired]
		public Int32 AccountId { get; private set; }

		/// <summary>
		/// 壁纸Id
		/// </summary>
		[PropertyRequired]
		public Int32 WallpaperId { get; private set; }

		public Config(Int32 accountId, Int32 wallpaperId)
		{
			AppXy = AppAlignMode.X;
			DockPosition = DockPostion.Top;
			AccountFace = @"\Scripts\HoorayUI\img\ui\avatar_48.jpg";
			Skin = "default";
			WallpaperMode = WallpaperMode.Fill;
			AppSize = 48;
			AppVerticalSpacing = 50;
			AppHorizontalSpacing = 50;
			DefaultDeskNumber = 1;
			DefaultDeskCount = 5;
			AccountId = accountId;
			WallpaperId = wallpaperId;
		}

		public Config() { }

	}

	public partial class Config
	{ 
		public Config ModifyAccountId(Int32 accountId)
		{
			AccountId = accountId;
			OnPropertyChanged(new PropertyArgs(nameof(AccountId), AccountId));
			return this;
		}

		public Config ModifySkin(String skin)
		{
			if (String.IsNullOrEmpty(skin))
			{
				throw new ArgumentException($@"{nameof(skin)} is null");
			}

			Skin = skin;
			OnPropertyChanged(new PropertyArgs(nameof(Skin), Skin));
			return this;
		}

		public Config ModifyAccountFace(String accountFace)
		{
			if (String.IsNullOrEmpty(accountFace))
			{
				throw new ArgumentException($@"{nameof(accountFace)} is null");
			}

			AccountFace = accountFace;
			OnPropertyChanged(new PropertyArgs(nameof(AccountFace), AccountFace));
			return this;
		}

		public Config ModifyAppSize(Int32 appSize)
		{
			if (appSize <= 0)
			{
				throw new ArgumentException($@"{nameof(appSize)} less than or equal to zero");
			}

			if (appSize < 32)
			{
				appSize = 32;
			}
			else if (appSize > 64)
			{
				appSize = 64;
			}

			AppSize = appSize;
			OnPropertyChanged(new PropertyArgs(nameof(AppSize), AppSize));
			return this;
		}

		public Config ModifyAppVerticalSpacing(Int32 appVerticalSpacing)
		{
			if (appVerticalSpacing <= 0)
			{
				throw new ArgumentException($@"{nameof(appVerticalSpacing)} less than or equal to zero");
			}

			if (appVerticalSpacing < 0)
			{
				appVerticalSpacing = 0;
			}
			else if (appVerticalSpacing > 100)
			{
				appVerticalSpacing = 100;
			}

			AppVerticalSpacing = appVerticalSpacing;
			OnPropertyChanged(new PropertyArgs(nameof(AppVerticalSpacing), AppVerticalSpacing));
			return this;
		}

		public Config ModifyAppHorizontalSpacing(Int32 appHorizontalSpacing)
		{
			if (appHorizontalSpacing <= 0)
			{
				throw new ArgumentException($@"{nameof(appHorizontalSpacing)} less than or equal to zero");
			}

			if (appHorizontalSpacing < 0)
			{
				appHorizontalSpacing = 0;
			}
			else if (appHorizontalSpacing > 100)
			{
				appHorizontalSpacing = 100;
			}

			AppHorizontalSpacing = appHorizontalSpacing;
			OnPropertyChanged(new PropertyArgs(nameof(AppHorizontalSpacing), AppHorizontalSpacing));
			return this;
		}

		public Config ModifyDefaultDeskNumber(Int32 deskNumber)
		{
			if (deskNumber <= 0)
			{
				throw new ArgumentException($@"{nameof(deskNumber)} less than or equal to zero");
			}

			DefaultDeskNumber = deskNumber;
			OnPropertyChanged(new PropertyArgs(nameof(DefaultDeskNumber), DefaultDeskNumber));
			return this;
		}

		public Config ModifyDefaultDeskCount(Int32 deskCount)
		{
			if (deskCount <= 0)
			{
				throw new ArgumentException($@"{nameof(deskCount)} less than or equal to zero");
			}

			DefaultDeskCount = deskCount;
			OnPropertyChanged(new PropertyArgs(nameof(DefaultDeskCount), DefaultDeskCount));
			return this;
		}

		public Config ModeTo(WallpaperMode mode)
		{
			WallpaperMode = mode;
			OnPropertyChanged(new PropertyArgs(nameof(WallpaperMode), WallpaperMode));
			return this;
		}

		public Config DisplayToTile()
		{
			WallpaperMode = WallpaperMode.Tile;
			OnPropertyChanged(new PropertyArgs(nameof(WallpaperMode), WallpaperMode));
			return this;
		}

		public Config DisplayToDraw()
		{
			WallpaperMode = WallpaperMode.Draw;
			OnPropertyChanged(new PropertyArgs(nameof(WallpaperMode), WallpaperMode));
			return this;
		}

		public Config DisplayToCenter()
		{
			WallpaperMode = WallpaperMode.Center;
			OnPropertyChanged(new PropertyArgs(nameof(WallpaperMode), WallpaperMode));
			return this;
		}

		public Config FromBing()
		{
			IsBing = true;
			OnPropertyChanged(new PropertyArgs(nameof(IsBing), IsBing));
			return this;
		}

		public Config NotFromBing()
		{
			IsBing = false;
			OnPropertyChanged(new PropertyArgs(nameof(IsBing), IsBing));
			return this;
		}

		public Config DirectionToX()
		{
			AppXy = AppAlignMode.X;
			OnPropertyChanged(new PropertyArgs(nameof(AppXy), AppXy));
			return this;
		}

		public Config DirectionToY()
		{
			AppXy = AppAlignMode.Y;
			OnPropertyChanged(new PropertyArgs(nameof(AppXy), AppXy));
			return this;
		}

		public Config PositionTo(DockPostion postion)
		{
			DockPosition = postion;
			OnPropertyChanged(new PropertyArgs(nameof(DockPosition), DockPosition));
			return this;
		}

		public Config ModifyWallpaperId(Int32 wallpaperId)
		{
			WallpaperId = wallpaperId;
			OnPropertyChanged(new PropertyArgs(nameof(WallpaperId), WallpaperId));
			return this;
		}
	}
}
