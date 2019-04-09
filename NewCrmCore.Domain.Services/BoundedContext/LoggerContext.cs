﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using NewCrmCore.Domain.Entitys.Agent;
using NewCrmCore.Domain.Entitys.System;
using NewCrmCore.Domain.Services.Interface;
using NewLibCore.Data.SQL.CombineCondition;
using NewLibCore.Data.SQL.CombineCondition.ConcreteCombineCondition;
using NewLibCore.Data.SQL.Mapper;
using NewLibCore.Validate;

namespace NewCrmCore.Domain.Services.BoundedContext
{
    public class LoggerContext : ILoggerContext
    {
        public async Task AddLoggerAsync(Log log)
        {
            Parameter.Validate(log);
            await Task.Run(() =>
            {
                using (var mapper = new EntityMapper())
                {
                    mapper.Add(log);
                }
            });
        }

        public List<Log> GetLogs(String userName, Int32 logLevel, Int32 pageIndex, Int32 pageSize, out Int32 totalCount)
        {
            Parameter.Validate(userName, true);
            Parameter.Validate(logLevel);

            using (var mapper = new EntityMapper())
            {
                var where = new StringBuilder();
                var parameters = new List<EntityParameter>();
                var filter = CombineFactory.Create<User>();

                if (!String.IsNullOrEmpty(userName))
                {
                    filter.And(a => a.Name.Contains(userName));
                    //parameters.Add(new EntityParameter("@name", userName));
                    //where.Append($@" AND a1.Name LIKE CONCAT('%',@name,'%') ");
                }

                #region totalCount 
                {
                    mapper.LeftJoin<Log, User>((a, b) => a.UserId == b.Id).Find<>

                    var sql = $@"SELECT COUNT(*) FROM Log AS a LEFT JOIN User AS a1 ON a.UserId=a1.Id WHERE 1=1 {where}";
                    totalCount = mapper.FindSingleValue<Int32>(sql, parameters);
                }
                #endregion

                #region sql 
                {
                    var sql = $@"SELECT
                                a.LogLevelEnum,
                                a.Controller,
                                a.Action,
                                a.ExceptionMessage,
                                IFNULL(a.UserId,0) AS UserId,
                                a.AddTime
                                FROM Log AS a 
                                LEFT JOIN User AS a1 ON a.UserId=a1.Id
                                WHERE 1=1 {where} ORDER BY a.AddTime DESC LIMIT {pageSize * (pageIndex - 1)},{pageSize}";
                    return mapper.Find<Log>(sql, parameters);
                }
                #endregion
            }
        }
    }
}
