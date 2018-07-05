﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NewCrmCore.Infrastructure.CommonTools
{
	public class TimeToken
	{
		public static async Task<String> GetTokenAsync()
		{
			return await Task.Run(() =>
			{
				DateTime dt = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Local);
				DateTime dtNow = DateTime.Now;
				TimeSpan result = dtNow.Subtract(dt);
				Int32 seconds = Convert.ToInt32(result.TotalSeconds);

				var hashCode = $@"{Guid.NewGuid()}{seconds}{new Random(seconds).Next(999999999)}".GetHashCode();
				return Convert.ToBase64String(Encoding.UTF8.GetBytes(hashCode.ToString()));
			});
		}
	}
}
