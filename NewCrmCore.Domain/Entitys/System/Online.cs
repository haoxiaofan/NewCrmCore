﻿using System;
using System.ComponentModel;
using NewLibCore.Data.SQL.MapperExtension;

namespace NewCrmCore.Domain.Entitys.System
{
    [Description("在线人数"), Serializable]
    public partial class Online : DomainModelBase
    {
        /// <summary>
        /// Ip地址
        /// </summary>
        [PropertyRequired]
        public String IpAddress { get; private set; }

        /// <summary>
        /// 用户Id
        /// </summary>
        [PropertyRequired]
        public Int32 UserId { get; private set; }

        /// <summary>
        /// 实例化一个在线状态的对象
        /// </summary>
        public Online(String ipAddress, Int32 userId)
        {
            IpAddress = ipAddress;
            UserId = userId;
        }

        /// <summary>
        /// 实例化一个在线状态的对象
        /// </summary>
        public Online()
        {
        }
    }
}
