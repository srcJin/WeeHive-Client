# 文件管理器，可通过 [Taro.getFileSystemManager](getFileSystemManager.html) 获取。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.html)
## 方法[​](FileSystemManager.html#方法)
### access[​](FileSystemManager.html#access)
判断文件/目录是否存在
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.access.html)
```tsx
(option: AccessOption) => void
```
参数类型option`AccessOption`
### accessSync[​](FileSystemManager.html#accesssync)
[FileSystemManager.access](FileSystemManager.html#access) 的同步版本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.accessSync.html)
```tsx
(path: string) => void
```
参数类型说明path`string`要判断是否存在的文件/目录路径
### appendFile[​](FileSystemManager.html#appendfile)
在文件结尾追加内容
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFile.html)
```tsx
(option: AppendFileOption) => void
```
参数类型option`AppendFileOption`
### appendFileSync[​](FileSystemManager.html#appendfilesync)
[FileSystemManager.appendFile](FileSystemManager.html#appendfile) 的同步版本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFileSync.html)
```tsx
(filePath: string, data: string | ArrayBuffer, encoding?: keyof Encoding) => void
```
参数类型说明filePath`string`要追加内容的文件路径datastring or ArrayBuffer要追加的文本或二进制数据encoding`keyof Encoding`指定写入文件的字符编码
### close[​](FileSystemManager.html#close)
关闭文件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.close.html)
```tsx
(option: CloseOption) => void
```
参数类型option`CloseOption`
### closeSync[​](FileSystemManager.html#closesync)
[FileSystemManager.close](FileSystemManager.html#close) 的同步版本
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.closeSync.html)
```tsx
(option: CloseSyncOption) => void
```
参数类型option`CloseSyncOption`
### copyFile[​](FileSystemManager.html#copyfile)
复制文件
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFile.html)
```tsx
(option: CopyFileOption) => void
```
参数类型option`CopyFileOption`
### copyFileSync[​](FileSystemManager.html#copyfilesync)
[FileSystemManager.copyFile](FileSystemManager.html#copyfile) 的同步版本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.copyFileSync.html)
```tsx
(srcPath: string, destPath: string) => void
```
参数类型说明srcPath`string`源文件路径，只可以是普通文件destPath`string`目标文件路径
### fstat[​](FileSystemManager.html#fstat)
获取文件的状态信息
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.fstat.html)
```tsx
(option: FstatOption) => void
```
参数类型option`FstatOption`
### fstatSync[​](FileSystemManager.html#fstatsync)
[FileSystemManager.fstat](FileSystemManager.html#fstat) 的同步版本
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.fstatSync.html)
```tsx
(option: FstatSyncOption) => Stats
```
参数类型option`FstatSyncOption`
### ftruncate[​](FileSystemManager.html#ftruncate)
对文件内容进行截断操作
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.ftruncate.html)
```tsx
(option: FtruncateOption) => void
```
参数类型option`FtruncateOption`
### ftruncateSync[​](FileSystemManager.html#ftruncatesync)
[FileSystemManager.ftruncate](FileSystemManager.html#ftruncate) 的同步版本
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.ftruncateSync.html)
```tsx
(option: FtruncateSyncOption) => void
```
参数类型option`FtruncateSyncOption`
### getFileInfo[​](FileSystemManager.html#getfileinfo)
获取该小程序下的 `本地临时文件` 或 `本地缓存文件` 信息
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getFileInfo.html)
```tsx
(option: getFileInfoOption) => void
```
参数类型option`getFileInfoOption`
### getSavedFileList[​](FileSystemManager.html#getsavedfilelist)
获取该小程序下已保存的本地缓存文件列表
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getSavedFileList.html)
```tsx
(option?: getSavedFileListOption) => void
```
参数类型option`getSavedFileListOption`
### mkdir[​](FileSystemManager.html#mkdir)
创建目录
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdir.html)
```tsx
(option: MkdirOption) => void
```
参数类型option`MkdirOption`
### mkdirSync[​](FileSystemManager.html#mkdirsync)
[FileSystemManager.mkdir](FileSystemManager.html#mkdir) 的同步版本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.mkdirSync.html)
```tsx
(dirPath: string, recursive?: boolean) => void
```
参数类型说明dirPath`string`创建的目录路径recursive`boolean`是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
### open[​](FileSystemManager.html#open)
打开文件，返回文件描述符
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html)
```tsx
(option: OpenOption) => void
```
参数类型option`OpenOption`
### openSync[​](FileSystemManager.html#opensync)
[FileSystemManager.openSync](FileSystemManager.html#opensync) 的同步版本
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.ftruncateSync.html)
```tsx
(option: OpenSyncOption) => string
```
参数类型option`OpenSyncOption`
### read[​](FileSystemManager.html#read)
读文件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.read.html)
```tsx
(option: ReadOption) => void
```
参数类型option`ReadOption`
### readCompressedFile[​](FileSystemManager.html#readcompressedfile)
读取指定压缩类型的本地文件内容
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readCompressedFile.html)
```tsx
(option: Option) => Promise<Promised>
```
参数类型option`Option`
### readCompressedFileSync[​](FileSystemManager.html#readcompressedfilesync)
同步读取指定压缩类型的本地文件内容
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readCompressedFileSync.html)
```tsx
(option: Option) => ArrayBuffer
```
参数类型option`Option`
### readdir[​](FileSystemManager.html#readdir)
读取目录内文件列表
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdir.html)
```tsx
(option: ReaddirOption) => void
```
参数类型option`ReaddirOption`
### readdirSync[​](FileSystemManager.html#readdirsync)
[FileSystemManager.readdir](FileSystemManager.html#readdir) 的同步版本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readdirSync.html)
```tsx
(dirPath: string) => string[]
```
参数类型说明dirPath`string`要读取的目录路径
### readFile[​](FileSystemManager.html#readfile)
读取本地文件内容
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFile.html)
```tsx
(option: ReadFileOption) => void
```
参数类型option`ReadFileOption`
### readFileSync[​](FileSystemManager.html#readfilesync)
[FileSystemManager.readFile](FileSystemManager.html#readfile) 的同步版本
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFileSync.html)
```tsx
(filePath: string, encoding?: keyof Encoding, position?: number, length?: number) => string | ArrayBuffer
```
参数类型说明filePath`string`要读取的文件的路径encoding`keyof Encoding`指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容position`number`从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：bytelength`number`指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte
### readSync[​](FileSystemManager.html#readsync)
[FileSystemManager.read](FileSystemManager.html#read) 的同步版本
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readSync.html)
```tsx
(option: ReadSyncOption) => { bytesRead: number; arrayBuffer: ArrayBuffer; }
```
参数类型option`ReadSyncOption`
### readZipEntry[​](FileSystemManager.html#readzipentry)
读取压缩包内的文件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readZipEntry.html)
```tsx
(option: Option) => Promise<Promised>
```
参数类型option`Option`
### removeSavedFile[​](FileSystemManager.html#removesavedfile)
删除该小程序下已保存的本地缓存文件
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.removeSavedFile.html)
```tsx
(option: RemoveSavedFileOption) => void
```
参数类型option`RemoveSavedFileOption`
### rename[​](FileSystemManager.html#rename)
重命名文件。可以把文件从 oldPath 移动到 newPath
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rename.html)
```tsx
(option: RenameOption) => void
```
参数类型option`RenameOption`
### renameSync[​](FileSystemManager.html#renamesync)
[FileSystemManager.rename](FileSystemManager.html#rename) 的同步版本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.renameSync.html)
```tsx
(oldPath: string, newPath: string) => void
```
参数类型说明oldPath`string`源文件路径，可以是普通文件或目录newPath`string`新文件路径
### rmdir[​](FileSystemManager.html#rmdir)
删除目录
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdir.html)
```tsx
(option: RmdirOption) => void
```
参数类型option`RmdirOption`
### rmdirSync[​](FileSystemManager.html#rmdirsync)
[FileSystemManager.rmdir](FileSystemManager.html#rmdir) 的同步版本
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.rmdirSync.html)
```tsx
(dirPath: string, recursive?: boolean) => void
```
参数类型说明dirPath`string`要删除的目录路径recursive`boolean`是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
### saveFile[​](FileSystemManager.html#savefile)
保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFile.html)
```tsx
(option: SaveFileOption) => void
```
参数类型option`SaveFileOption`
### saveFileSync[​](FileSystemManager.html#savefilesync)
[FileSystemManager.saveFile](FileSystemManager.html#savefile) 的同步版本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.saveFileSync.html)
```tsx
(tempFilePath: string, filePath?: string) => string
```
参数类型说明tempFilePath`string`临时存储文件路径filePath`string`要存储的文件路径
### stat[​](FileSystemManager.html#stat)
获取文件 Stats 对象
支持情况：!!!!!!!!
```tsx
(option: StatOption) => void
```
参数类型option`StatOption`
### statSync[​](FileSystemManager.html#statsync)
[FileSystemManager.stat](FileSystemManager.html#stat) 的同步版本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.statSync.html)
```tsx
(path: string, recursive?: boolean) => any
```
参数类型说明path`string`文件/目录路径recursive`boolean`是否递归获取目录下的每个文件的 Stats 信息
### truncate[​](FileSystemManager.html#truncate)
对文件内容进行截断操作
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.truncate.html)
```tsx
(option: TruncateOption) => void
```
参数类型option`TruncateOption`
### truncateSync[​](FileSystemManager.html#truncatesync)
对文件内容进行截断操作 ([truncate](FileSystemManager.html#truncate) 的同步版本)
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.truncateSync.html)
```tsx
(option: TruncateSyncOption) => void
```
参数类型option`TruncateSyncOption`
### unlink[​](FileSystemManager.html#unlink)
删除文件
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlink.html)
```tsx
(option: UnlinkOption) => void
```
参数类型option`UnlinkOption`
### unlinkSync[​](FileSystemManager.html#unlinksync)
[FileSystemManager.unlink](FileSystemManager.html#unlink) 的同步版本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlinkSync.html)
```tsx
(filePath: string) => void
```
参数类型说明filePath`string`要删除的文件路径
### unzip[​](FileSystemManager.html#unzip)
解压文件
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unzip.html)
```tsx
(option: UnzipOption) => void
```
参数类型option`UnzipOption`
### write[​](FileSystemManager.html#write)
写入文件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.write.html)
```tsx
(option: WriteOption) => void
```
参数类型option`WriteOption`
### writeFile[​](FileSystemManager.html#writefile)
写文件
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFile.html)
```tsx
(option: WriteFileOption) => void
```
参数类型option`WriteFileOption`
### writeFileSync[​](FileSystemManager.html#writefilesync)
[FileSystemManager.writeFile](FileSystemManager.html#writefile) 的同步版本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeFileSync.html)
```tsx
(filePath: string, data: string | ArrayBuffer, encoding?: keyof Encoding) => void
```
参数类型说明filePath`string`要写入的文件路径datastring or ArrayBuffer要写入的文本或二进制数据encoding`keyof Encoding`指定写入文件的字符编码
### writeSync[​](FileSystemManager.html#writesync)
[write](FileSystemManager.html#write) 的同步版本
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.writeSync.html)
```tsx
(option: WriteSyncOption) => { bytesWritten: number; }
```
参数类型option`WriteSyncOption`
## 参数[​](FileSystemManager.html#参数)
### Encoding[​](FileSystemManager.html#encoding)
字符编码
参数说明asciibase64binaryhexucs2以小端序读取ucs-2以小端序读取utf16le以小端序读取utf-16le以小端序读取utf-8utf8latin1
### flag[​](FileSystemManager.html#flag)
文件系统标志
### AccessOption[​](FileSystemManager.html#accessoption)
参数类型必填说明path`string`是要判断是否存在的文件/目录路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: AccessFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### AccessFailCallbackResult[​](FileSystemManager.html#accessfailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail no such file or directory ${path}': 文件/目录不存在;
### AppendFileOption[​](FileSystemManager.html#appendfileoption)
参数类型必填说明datastring or ArrayBuffer是要追加的文本或二进制数据filePath`string`是要追加内容的文件路径encoding`keyof Encoding`否指定写入文件的字符编码complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: AppendFileFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### AppendFileFailCallbackResult[​](FileSystemManager.html#appendfilefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail no such file or directory, open ${filePath}': 指定的 filePath 文件不存在;
- 'fail illegal operation on a directory, open "${filePath}"': 指定的 filePath 是一个已经存在的目录;
- 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
- 'fail sdcard not mounted': 指定的 filePath 是一个已经存在的目录;
### CopyFileOption[​](FileSystemManager.html#copyfileoption)
参数类型必填说明destPath`string`是目标文件路径srcPath`string`是源文件路径，只可以是普通文件complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: CopyFileFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### CopyFileFailCallbackResult[​](FileSystemManager.html#copyfilefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail permission denied, copyFile ${srcPath} -> ${destPath}': 指定目标文件路径没有写权限;
- 'fail no such file or directory, copyFile ${srcPath} -> ${destPath}': 源文件不存在，或目标文件路径的上层目录不存在;
- 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
### getFileInfoOption[​](FileSystemManager.html#getfileinfooption)
参数类型默认值必填说明filePath`string`是要读取的文件路径digestAlgorithm"md5" or "sha1"`'md5'`否计算文件摘要的算法complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: GetFileInfoFailCallbackResult) => void`否接口调用失败的回调函数success`(result: GetFileInfoSuccessCallbackResult) => void`否接口调用成功的回调函数
### GetFileInfoFailCallbackResult[​](FileSystemManager.html#getfileinfofailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail file not exist': 指定的 filePath 找不到文件;
### GetFileInfoSuccessCallbackResult[​](FileSystemManager.html#getfileinfosuccesscallbackresult)
参数类型必填说明size`number`是文件大小，以字节为单位digest`string`否按照传入的 digestAlgorithm 计算得出的的文件摘要errMsg`string`是调用结果
### getSavedFileListOption[​](FileSystemManager.html#getsavedfilelistoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: GetSavedFileListSuccessCallbackResult) => void`否接口调用成功的回调函数
### GetSavedFileListSuccessCallbackResult[​](FileSystemManager.html#getsavedfilelistsuccesscallbackresult)
参数类型说明fileList`GetSavedFileListSuccessCallbackResultFileItem[]`文件数组errMsg`string`调用结果
### GetSavedFileListSuccessCallbackResultFileItem[​](FileSystemManager.html#getsavedfilelistsuccesscallbackresultfileitem)
文件数组
参数类型说明createTime`number`文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数filePath`string`本地路径size`number`本地文件大小，以字节为单位
### MkdirOption[​](FileSystemManager.html#mkdiroption)
参数类型默认值必填说明dirPath`string`是创建的目录路径recursive`boolean``false`否是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。
如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: MkdirFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### MkdirFailCallbackResult[​](FileSystemManager.html#mkdirfailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail no such file or directory ${dirPath}': 上级目录不存在;
- 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
- 'fail file already exists ${dirPath}': 有同名文件或目录;
### ReadFileOption[​](FileSystemManager.html#readfileoption)
参数类型必填说明filePath`string`是要读取的文件的路径position`number`否从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：bytelength`number`否指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：bytecomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）encoding`keyof Encoding`否指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容fail`(result: ReadFileFailCallbackResult) => void`否接口调用失败的回调函数success`(res: ReadFileSuccessCallbackResult) => void`否接口调用成功的回调函数
### ReadFileSuccessCallbackResult[​](FileSystemManager.html#readfilesuccesscallbackresult)
参数类型说明datastring or ArrayBuffer文件内容errMsg`string`调用结果
### ReadFileFailCallbackResult[​](FileSystemManager.html#readfilefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
- 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限;
### ReaddirOption[​](FileSystemManager.html#readdiroption)
参数类型必填说明dirPath`string`是要读取的目录路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: ReaddirFailCallbackResult) => void`否接口调用失败的回调函数success`(result: ReaddirSuccessCallbackResult) => void`否接口调用成功的回调函数
### ReaddirFailCallbackResult[​](FileSystemManager.html#readdirfailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail no such file or directory ${dirPath}': 目录不存在;
- 'fail not a directory ${dirPath}': dirPath 不是目录;
- 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限;
### ReaddirSuccessCallbackResult[​](FileSystemManager.html#readdirsuccesscallbackresult)
参数类型说明files`string[]`指定目录下的文件名数组。errMsg`string`调用结果
### readZipEntry[​](FileSystemManager.html#readzipentry-1)
#### Promised[​](FileSystemManager.html#promised)
```tsx
FailCallbackResult | SuccessCallbackResult
```

#### Option[​](FileSystemManager.html#option)
参数类型必填说明filePath`string`是要读取的压缩包的路径 (本地路径)encoding`string`否统一指定读取文件的字符编码，只在 entries 值为"all"时有效。如果 entries 值为"all"且不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容entriesFile[] or "all"是要读取的压缩包内的文件列表（当传入"all" 时表示读取压缩包内所有文件）complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: FailCallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### File[​](FileSystemManager.html#file)
参数类型必填说明path`string`是压缩包内文件路径encoding`string`否指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容position`number`否从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：bytelength`number`否指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte
#### Encoding[​](FileSystemManager.html#encoding-1)
字符编码合法值
参数异常情况asciibase64binaryhexucs2`以小端序读取`ucs-2`以小端序读取`utf16le`以小端序读取`utf-16le`以小端序读取`utf-8utf8latin1
#### FailCallbackResult[​](FileSystemManager.html#failcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在
- 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限
- 'fail sdcard not mounted': Android sdcard 挂载失败
#### SuccessCallbackResult[​](FileSystemManager.html#successcallbackresult)
参数类型说明entries`{ [path: string]: FileItem; }`文件读取结果。res.entries 是一个对象，key是文件路径，value是一个对象 FileItem ，表示该文件的读取结果。每个 FileItem 包含 data （文件内容） 和 errMsg （错误信息） 属性。
#### FileItem[​](FileSystemManager.html#fileitem)
参数类型说明datastring or ArrayBuffer文件内容errMsg`string`错误信息
### RemoveSavedFileOption[​](FileSystemManager.html#removesavedfileoption)
参数类型必填说明filePath`string`是需要删除的文件路径apFilePath`string`否本地缓存文件路径
API 支持度: alipaycomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: RemoveSavedFileFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RemoveSavedFileFailCallbackResult[​](FileSystemManager.html#removesavedfilefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail file not exist': 指定的 tempFilePath 找不到文件;
### RenameOption[​](FileSystemManager.html#renameoption)
参数类型必填说明newPath`string`是新文件路径oldPath`string`是源文件路径，可以是普通文件或目录complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: RenameFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RenameFailCallbackResult[​](FileSystemManager.html#renamefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail permission denied, rename ${oldPath} -> ${newPath}': 指定源文件或目标文件没有写权限;
- 'fail no such file or directory, rename ${oldPath} -> ${newPath}': 源文件不存在，或目标文件路径的上层目录不存在;
### RmdirOption[​](FileSystemManager.html#rmdiroption)
参数类型必填说明dirPath`string`是要删除的目录路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: RmdirFailCallbackResult) => void`否接口调用失败的回调函数recursive`boolean`否是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RmdirFailCallbackResult[​](FileSystemManager.html#rmdirfailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail no such file or directory ${dirPath}': 目录不存在;
- 'fail directory not empty': 目录不为空;
- 'fail permission denied, open ${dirPath}': 指定的 dirPath 路径没有写权限;
### SaveFileOption[​](FileSystemManager.html#savefileoption)
参数类型必填说明tempFilePath`string`是临时存储文件路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: SaveFileFailCallbackResult) => void`否接口调用失败的回调函数filePath`string`否要存储的文件路径success`(result: SaveFileSuccessCallbackResult) => void`否接口调用成功的回调函数
### SaveFileFailCallbackResult[​](FileSystemManager.html#savefilefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail tempFilePath file not exist': 指定的 tempFilePath 找不到文件;
- 'fail permission denied, open "${filePath}"': 指定的 filePath 路径没有写权限;
- 'fail no such file or directory "${dirPath}"': 上级目录不存在;
- 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
### SaveFileSuccessCallbackResult[​](FileSystemManager.html#savefilesuccesscallbackresult)
参数类型说明savedFilePath`string`存储后的文件路径errMsg`string`调用结果
### StatOption[​](FileSystemManager.html#statoption)
参数类型必填说明path`string`是文件/目录路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: StatFailCallbackResult) => void`否接口调用失败的回调函数recursive`boolean`否是否递归获取目录下的每个文件的 Stats 信息success`(result: StatSuccessCallbackResult) => void`否接口调用成功的回调函数
### StatFailCallbackResult[​](FileSystemManager.html#statfailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail permission denied, open ${path}': 指定的 path 路径没有读权限;
- 'fail no such file or directory ${path}': 文件不存在;
### StatSuccessCallbackResult[​](FileSystemManager.html#statsuccesscallbackresult)
参数类型说明stats`any`[Stats](Stats.html) or Object

当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。errMsg`string`调用结果
### UnlinkOption[​](FileSystemManager.html#unlinkoption)
参数类型必填说明filePath`string`是要删除的文件路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: UnlinkFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### UnlinkFailCallbackResult[​](FileSystemManager.html#unlinkfailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail permission denied, open ${path}': 指定的 path 路径没有读权限;
- 'fail no such file or directory ${path}': 文件不存在;
- 'fail operation not permitted, unlink ${filePath}': 传入的 filePath 是一个目录;
### UnzipOption[​](FileSystemManager.html#unzipoption)
参数类型必填说明targetPath`string`是目标目录路径zipFilePath`string`是源文件路径，只可以是 zip 压缩文件complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: UnzipFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### UnzipFailCallbackResult[​](FileSystemManager.html#unzipfailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail permission denied, unzip ${zipFilePath} -> ${destPath}': 指定目标文件路径没有写权限;
- 'fail no such file or directory, unzip ${zipFilePath} -> "${destPath}': 源文件不存在，或目标文件路径的上层目录不存在;
### WriteFileOption[​](FileSystemManager.html#writefileoption)
参数类型必填说明datastring or ArrayBuffer是要写入的文本或二进制数据filePath`string`是要写入的文件路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）encoding`keyof Encoding`否指定写入文件的字符编码fail`(result: WriteFileFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### WriteFileFailCallbackResult[​](FileSystemManager.html#writefilefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在;
- 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限;
- 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
### FstatOption[​](FileSystemManager.html#fstatoption)
参数类型必填说明fd`string`是文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: FstatFailCallbackResult) => void`否接口调用失败的回调函数success`(res: FstatSuccessCallbackResult) => void`否接口调用成功的回调函数
### FstatFailCallbackResult[​](FileSystemManager.html#fstatfailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'bad file descriptor': 无效的文件描述符;
- 'fail permission denied': 指定的 fd 路径没有读权限;
### FstatSuccessCallbackResult[​](FileSystemManager.html#fstatsuccesscallbackresult)
参数类型说明stats`Stats`Stats 对象，包含了文件的状态信息errMsg`string`调用结果
### FstatSyncOption[​](FileSystemManager.html#fstatsyncoption)
参数类型说明fd`string`文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得
### CloseOption[​](FileSystemManager.html#closeoption)
参数类型必填说明fd`string`是需要被关闭的文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: CloseFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### CloseFailCallbackResult[​](FileSystemManager.html#closefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'bad file descriptor': 无效的文件描述符
### CloseSyncOption[​](FileSystemManager.html#closesyncoption)
参数类型说明fd`string`需要被关闭的文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得
### FtruncateOption[​](FileSystemManager.html#ftruncateoption)
参数类型必填说明fd`string`是文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得length`number`是截断位置，默认0。如果 length 小于文件长度（单位：字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'）complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: FtruncateFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### FtruncateFailCallbackResult[​](FileSystemManager.html#ftruncatefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'bad file descriptor': 无效的文件描述符
- 'fail permission denied': 指定的 fd 没有写权限
- 'fail the maximum size of the file storage limit is exceeded': 存储空间不足
- 'fail sdcard not mounted android sdcard': 挂载失败
### FtruncateSyncOption[​](FileSystemManager.html#ftruncatesyncoption)
参数类型说明fd`string`文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得length`number`截断位置，默认0。如果 length 小于文件长度（单位：字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'）
### OpenOption[​](FileSystemManager.html#openoption)
参数类型必填说明filePath`string`是文件路径 (本地路径)flag`keyof flag`否文件系统标志，默认值: 'r'complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: OpenFailCallbackResult) => void`否接口调用失败的回调函数success`(res: OpenSuccessCallbackResult) => void`否接口调用成功的回调函数
### OpenFailCallbackResult[​](FileSystemManager.html#openfailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail no such file or directory "${filePath}"': 上级目录不存在
### OpenSuccessCallbackResult[​](FileSystemManager.html#opensuccesscallbackresult)
参数类型说明fd`string`文件描述符errMsg`string`调用结果
### OpenSyncOption[​](FileSystemManager.html#opensyncoption)
参数类型必填说明filePath`string`是文件路径 (本地路径)flag`keyof flag`否文件系统标志，默认值: 'r'
### ReadOption[​](FileSystemManager.html#readoption)
参数类型必填说明fd`string`是文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得arrayBuffer`ArrayBuffer`是数据写入的缓冲区，必须是 ArrayBuffer 实例offset`number`否缓冲区中的写入偏移量，默认0length`number`否要从文件中读取的字节数，默认0position`number`否文件读取的起始位置，如不传或传 null，则会从当前文件指针的位置读取。如果 position 是正整数，则文件指针位置会保持不变并从 position 读取文件。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: ReadFailCallbackResult) => void`否接口调用失败的回调函数success`(res: ReadSuccessCallbackResult) => void`否接口调用成功的回调函数
### ReadFailCallbackResult[​](FileSystemManager.html#readfailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'bad file descriptor': 无效的文件描述符
- 'fail permission denied': 指定的 fd 路径没有读权限
- 'fail the value of "offset" is out of range': 传入的 offset 不合法
- 'fail the value of "length" is out of range': 传入的 length 不合法
- 'fail sdcard not mounted': android sdcard 挂载失败
- 'bad file descriptor': 无效的文件描述符
### ReadSuccessCallbackResult[​](FileSystemManager.html#readsuccesscallbackresult)
参数类型说明bytesRead`string`实际读取的字节数arrayBuffer`ArrayBuffer`被写入的缓存区的对象，即接口入参的 arrayBuffererrMsg`string`调用结果
### readCompressedFile[​](FileSystemManager.html#readcompressedfile-1)
#### Promised[​](FileSystemManager.html#promised-1)
```tsx
FailCallbackResult | SuccessCallbackResult
```

#### Option[​](FileSystemManager.html#option-1)
参数类型必填说明filePath`string`是要读取的文件的路径 (本地用户文件或代码包文件)compressionAlgorithm`string`是文件压缩类型，目前仅支持 'br'。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: FailCallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### CompressionAlgorithm[​](FileSystemManager.html#compressionalgorithm)
文件压缩类型合法值
参数说明brbrotli压缩文件
#### FailCallbackResult[​](FileSystemManager.html#failcallbackresult-1)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail decompress fail': 指定的 compressionAlgorithm 与文件实际压缩格式不符
- 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在
- 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有读权限
#### SuccessCallbackResult[​](FileSystemManager.html#successcallbackresult-1)
参数类型说明data`ArrayBuffer`文件内容
### readCompressedFileSync[​](FileSystemManager.html#readcompressedfilesync-1)
#### Option[​](FileSystemManager.html#option-2)
参数类型说明filePath`string`要读取的文件的路径 (本地用户文件或代码包文件)compressionAlgorithm`string`文件压缩类型，目前仅支持 'br'。
#### CompressionAlgorithm[​](FileSystemManager.html#compressionalgorithm-1)
文件压缩类型合法值
参数说明brbrotli压缩文件
### ReadSyncOption[​](FileSystemManager.html#readsyncoption)
参数类型必填说明fd`string`是文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得arrayBuffer`ArrayBuffer`是数据写入的缓冲区，必须是 ArrayBuffer 实例offset`number`否缓冲区中的写入偏移量，默认0length`number`否要从文件中读取的字节数，默认0position`number`否文件读取的起始位置，如不传或传 null，则会从当前文件指针的位置读取。如果 position 是正整数，则文件指针位置会保持不变并从 position 读取文件。
### TruncateOption[​](FileSystemManager.html#truncateoption)
参数类型必填说明filePath`string`是要截断的文件路径 (本地路径)length`number`否截断位置，默认0。如果 length 小于文件长度（字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'）complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: TruncateFailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### TruncateFailCallbackResult[​](FileSystemManager.html#truncatefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail no such file or directory, open ${filePath}': 指定的 filePath 所在目录不存在
- 'fail illegal operation on a directory, open "${filePath}"': 指定的 filePath 是一个已经存在的目录
- 'fail permission denied, open ${dirPath}': 指定的 filePath 路径没有写权限
- 'fail the maximum size of the file storage limit is exceeded': 存储空间不足
- 'fail sdcard not mounted': android sdcard 挂载失败
### TruncateSyncOption[​](FileSystemManager.html#truncatesyncoption)
参数类型必填说明filePath`string`是要截断的文件路径 (本地路径)length`number`否截断位置，默认0。如果 length 小于文件长度（字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'）
### WriteOption[​](FileSystemManager.html#writeoption)
参数类型必填说明fd`string`是文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得datastring or ArrayBuffer是写入的内容，类型为 String 或 ArrayBufferoffset`number`否只在 data 类型是 ArrayBuffer 时有效，决定 arrayBuffe 中要被写入的部位，即 arrayBuffer 中的索引，默认0length`number`否只在 data 类型是 ArrayBuffer 时有效，指定要写入的字节数，默认为 arrayBuffer 从0开始偏移 offset 个字节后剩余的字节数encoding`keyof Encoding`否只在 data 类型是 String 时有效，指定写入文件的字符编码，默认为 utf8position`number`否指定文件开头的偏移量，即数据要被写入的位置。当 position 不传或者传入非 Number 类型的值时，数据会被写入当前指针所在位置。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: WriteFailCallbackResult) => void`否接口调用失败的回调函数success`(res: WriteSuccessCallbackResult) => void`否接口调用成功的回调函数
### WriteFailCallbackResult[​](FileSystemManager.html#writefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
'bad file descriptor': 无效的文件描述符
'fail permission denied': 指定的 fd 路径没有写权限
'fail sdcard not mounted': android sdcard 挂载失败
### WriteSuccessCallbackResult[​](FileSystemManager.html#writesuccesscallbackresult)
参数类型说明bytesWritten`number`实际被写入到文件中的字节数（注意，被写入的字节数不一定与被写入的字符串字符数相同）errMsg`string`调用结果
### WriteSyncOption[​](FileSystemManager.html#writesyncoption)
参数类型必填说明fd`string`是文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得datastring or ArrayBuffer是写入的内容，类型为 String 或 ArrayBufferoffset`number`否只在 data 类型是 ArrayBuffer 时有效，决定 arrayBuffe 中要被写入的部位，即 arrayBuffer 中的索引，默认0length`number`否只在 data 类型是 ArrayBuffer 时有效，指定要写入的字节数，默认为 arrayBuffer 从0开始偏移 offset 个字节后剩余的字节数encoding`keyof Encoding`否只在 data 类型是 String 时有效，指定写入文件的字符编码，默认为 utf8position`number`否指定文件开头的偏移量，即数据要被写入的位置。当 position 不传或者传入非 Number 类型的值时，数据会被写入当前指针所在位置。
## API 支持度[​](FileSystemManager.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridFileSystemManager✔️✔️✔️FileSystemManager.access✔️✔️✔️✔️✔️✔️✔️FileSystemManager.accessSync✔️✔️✔️✔️✔️✔️FileSystemManager.appendFile✔️✔️✔️✔️✔️✔️FileSystemManager.appendFileSync✔️✔️✔️✔️✔️✔️FileSystemManager.close✔️FileSystemManager.closeSync✔️FileSystemManager.copyFile✔️✔️✔️✔️✔️✔️FileSystemManager.copyFileSync✔️✔️✔️✔️✔️✔️FileSystemManager.fstat✔️FileSystemManager.fstatSync✔️FileSystemManager.ftruncate✔️FileSystemManager.ftruncateSync✔️FileSystemManager.getFileInfo✔️✔️✔️✔️✔️✔️✔️FileSystemManager.getSavedFileList✔️✔️✔️✔️✔️✔️FileSystemManager.mkdir✔️✔️✔️✔️✔️✔️FileSystemManager.mkdirSync✔️✔️✔️✔️✔️✔️FileSystemManager.open✔️FileSystemManager.openSync✔️FileSystemManager.read✔️FileSystemManager.readCompressedFile✔️FileSystemManager.readCompressedFileSync✔️FileSystemManager.readdir✔️✔️✔️✔️✔️✔️FileSystemManager.readdirSync✔️✔️✔️✔️✔️✔️FileSystemManager.readFile✔️✔️✔️✔️✔️✔️✔️FileSystemManager.readFileSync✔️✔️✔️✔️✔️✔️✔️FileSystemManager.readSync✔️FileSystemManager.readZipEntry✔️FileSystemManager.removeSavedFile✔️✔️✔️✔️✔️✔️FileSystemManager.rename✔️✔️✔️✔️✔️✔️FileSystemManager.renameSync✔️✔️✔️✔️✔️✔️FileSystemManager.rmdir✔️✔️FileSystemManager.rmdirSync✔️✔️FileSystemManager.saveFile✔️✔️✔️✔️✔️✔️FileSystemManager.saveFileSync✔️✔️✔️✔️✔️✔️FileSystemManager.stat✔️✔️✔️✔️✔️FileSystemManager.statSync✔️✔️✔️✔️✔️✔️FileSystemManager.truncate✔️✔️FileSystemManager.truncateSync✔️✔️FileSystemManager.unlink✔️✔️✔️✔️✔️✔️FileSystemManager.unlinkSync✔️✔️✔️✔️✔️✔️FileSystemManager.unzip✔️✔️✔️✔️✔️✔️FileSystemManager.write✔️FileSystemManager.writeFile✔️✔️✔️✔️✔️✔️FileSystemManager.writeFileSync✔️✔️✔️✔️✔️✔️FileSystemManager.writeSync✔️
- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

-
