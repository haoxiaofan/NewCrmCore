﻿using System;
using NewLibCore.Storage.SQL;
using NewLibCore.Storage.SQL.Validate;

namespace NewCrmCore.Domain.Entitys.Security
{
    [TableName("newcrm_role_power")]
    public class RolePower : EntityBase
    {
        [Required]
        public Int32 RoleId { get; private set; }

        [Required]
        public Int32 AppId { get; private set; }

        public RolePower(Int32 roleId, Int32 appId)
        {
            RoleId = roleId;
            AppId = appId;
        }

        public RolePower()
        {

        }
    }
}
