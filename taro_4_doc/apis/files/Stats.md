# 描述文件状态的对象
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html)
## 方法[​](Stats.html#方法)
参数类型说明mode`string`文件的类型和存取的权限，对应 POSIX stat.st_modesize`number`文件大小，单位：B，对应 POSIX stat.st_sizelastAccessedTime`number`文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atimelastModifiedTime`number`文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime
### isDirectory[​](Stats.html#isdirectory)
判断当前文件是否一个目录
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isDirectory.html)
```tsx
() => boolean
```

### isFile[​](Stats.html#isfile)
判断当前文件是否一个普通文件
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isFile.html)
```tsx
() => boolean
```

## API 支持度[​](Stats.html#api-支持度)
API微信小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyStats✔️Stats.isDirectory✔️✔️✔️✔️✔️Stats.isFile✔️✔️✔️✔️
- 

- 
- 

-
