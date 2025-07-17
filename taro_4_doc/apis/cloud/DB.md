# ## 参数[​](DB.html#参数)
### Database[​](DB.html#database)
云开发 SDK 数据库实例
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Database.html)
参数类型说明config`IConfig`数据库配置command`Command`数据库操作符，通过 db.command 获取
API 支持度: weapp
[参考地址](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Command.html)Geo`IGeo`数据库地理位置结构集
API 支持度: weapp
[参考地址](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Geo.html)
#### serverDate[​](DB.html#serverdate)
构造一个服务端时间的引用。可用于查询条件、更新字段值或新增记录时的字段值。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Database.serverDate.html)
```tsx
(options?: IOptions) => ServerDate
```
参数类型options`IOptions`
##### 示例代码[​](DB.html#示例代码)
新增记录时设置字段为服务端时间：
```tsx
db.collection('todos').add({
 description: 'eat an apple',
 createTime: db.serverDate()
})
```

更新字段为服务端时间往后一小时：
```tsx
db.collection('todos').doc('my-todo-id').update({
 due: db.serverDate({
 offset: 60 * 60 * 1000
 })
})
```

#### RegExp[​](DB.html#regexp)
构造正则表达式，仅需在普通 js 正则表达式无法满足的情况下使用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Database.RegExp.html)
```tsx
(options: IRegExpOptions) => IRegExp
```
参数类型options`IRegExpOptions`
##### 示例代码[​](DB.html#示例代码-1)
```tsx
// 原生 JavaScript 对象
db.collection('todos').where({
 description: /miniprogram/i
})

// 数据库正则对象
db.collection('todos').where({
 description: db.RegExp({
 regexp: 'miniprogram',
 options: 'i',
 })
})

// 用 new 构造也是可以的
db.collection('todos').where({
 description: new db.RegExp({
 regexp: 'miniprogram',
 options: 'i',
 })
})
```

#### collection[​](DB.html#collection)
获取集合的引用。方法接受一个 `name` 参数，指定需引用的集合名称。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Database.collection.html)
```tsx
(collectionName: string) => Collection
```
参数类型collectionName`string`
##### 示例代码[​](DB.html#示例代码-2)
```tsx
const db = Taro.cloud.database()
const todosCollection = db.collection('todos')
```

#### ServerDate[​](DB.html#serverdate-1)
可用于查询条件、更新字段值或新增记录时的字段值。
参数类型options`IOptions`
##### IOptions[​](DB.html#ioptions)
参数类型offset`number`
#### IRegExp[​](DB.html#iregexp)
构造正则表达式
参数类型regexp`string`options`string`
##### IRegExpOptions[​](DB.html#iregexpoptions)
参数类型必填regexp`string`是options`string`否
#### InternalSymbol[​](DB.html#internalsymbol)
内部符号
### Collection[​](DB.html#collection-1)
数据库集合引用
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Collection.html)
参数类型说明collectionName`string`集合名称database`Database`集合所在数据库引用
#### doc[​](DB.html#doc)
获取集合中指定记录的引用。方法接受一个 `id` 参数，指定需引用的记录的 `_id`。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.doc.html)
```tsx
(docId: string | number) => Document
```
参数类型说明docIdstring or number记录 _id
##### 示例代码[​](DB.html#示例代码-3)
```tsx
const myTodo = db.collection('todos').doc('my-todo-id')
```

#### aggregate[​](DB.html#aggregate)
发起聚合操作，定义完聚合流水线阶段之后需调用 end 方法标志结束定义并实际发起聚合操作
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.aggregate.html)
```tsx
() => Aggregate
```

##### 示例代码[​](DB.html#示例代码-4)
###### 示例 1[​](DB.html#示例-1)
```tsx
const $ = db.command.aggregate
db.collection('books').aggregate()
 .group({
 // 按 category 字段分组
 _id: '$category',
 // 让输出的每组记录有一个 avgSales 字段，其值是组内所有记录的 sales 字段的平均值
 avgSales: $.avg('$sales')
 })
 .end()
 .then(res => console.log(res))
 .catch(err => console.error(err))
```

###### 示例 2[​](DB.html#示例-2)
```tsx
const $ = db.command.aggregate
db.collection('books').aggregate()
 .group({
 // 按 category 字段分组
 _id: '$category',
 // 让输出的每组记录有一个 avgSales 字段，其值是组内所有记录的 sales 字段的平均值
 avgSales: $.avg('$sales')
 })
 .end({
 success: function(res) {
 console.log(res)
 },
 fail: function(err) {
 console.error(err)
 }
 })
```

#### where[​](DB.html#where)
指定查询条件，返回带新查询条件的新的集合引用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.where.html)
```tsx
(condition: IQueryCondition) => Collection
```
参数类型condition`IQueryCondition`
##### 示例代码[​](DB.html#示例代码-5)
```tsx
const _ = db.command
const result = await db.collection('todos').where({
 price: _.lt(100)
}).get()
```

#### limit[​](DB.html#limit)
指定查询结果集数量上限
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.limit.html)
```tsx
(value: number) => Collection
```
参数类型value`number`
##### 示例代码[​](DB.html#示例代码-6)
```tsx
db.collection('todos').limit(10)
 .get()
 .then(console.log)
 .catch(console.error)
```

#### orderBy[​](DB.html#orderby)
指定查询排序条件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.orderBy.html)
```tsx
(fieldPath: string, string: "asc" | "desc") => Collection
```
参数类型fieldPath`string`string"asc" or "desc"
##### 示例代码[​](DB.html#示例代码-7)
按一个字段排序：按进度排升序取待办事项
```tsx
db.collection('todos').orderBy('progress', 'asc')
 .get()
 .then(console.log)
 .catch(console.error)
```

按多个字段排序：先按 progress 排降序（progress 越大越靠前）、再按 description 排升序（字母序越前越靠前）取待办事项
```tsx
db.collection('todos')
 .orderBy('progress', 'desc')
 .orderBy('description', 'asc')
 .get()
 .then(console.log)
 .catch(console.error)
```

#### skip[​](DB.html#skip)
指定查询返回结果时从指定序列后的结果开始返回，常用于分页
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.skip.html)
```tsx
(offset: number) => Collection
```
参数类型offset`number`
##### 示例代码[​](DB.html#示例代码-8)
```tsx
db.collection('todos').skip(10)
 .get()
 .then(console.log)
 .catch(console.error)
```

#### field[​](DB.html#field)
指定返回结果中记录需返回的字段
**说明**
方法接受一个必填对象用于指定需返回的字段，对象的各个 key 表示要返回或不要返回的字段，value 传入 true|false（或 1|-1）表示要返回还是不要返回。 如果指定的字段是数组字段，还可以用以下方法只返回数组的第一个元素：在该字段 key 后面拼接上 `.$` 成为 `字段.$` 的形式。 如果指定的字段是数组字段，还可以用 `db.command.project.slice` 方法返回数组的子数组： 方法既可以接收一个正数表示返回前 n 个元素，也可以接收一个负数表示返回后 n 个元素；还可以接收一个包含两个数字 `[ skip, limit ]` 的数组，如果 `skip` 是正数，表示跳过 `skip` 个元素后再返回接下来的 `limit` 个元素，如果 `skip` 是负数，表示从倒数第 `skip` 个元素开始，返回往后数的 `limit` 个元素

- 返回数组的前 5 个元素：`{ tags: db.command.project.slice(5) }`
- 返回数组的后 5 个元素：`{ tags: db.command.project.slice(-5) }`
- 跳过前 5 个元素，返回接下来 10 个元素：`{ tags: db.command.project.slice(5, 10) }`
- 从倒数第 5 个元素开始，返回接下来正方向数的 10 个元素：`{ tags: db.command.project.slice(-5, 10) }`
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.field.html)
```tsx
(object: TaroGeneral.IAnyObject) => Collection
```
参数类型object`TaroGeneral.IAnyObject`
##### 示例代码[​](DB.html#示例代码-9)
返回 description, done 和 progress 三个字段：
```tsx
db.collection('todos').field({
 description: true,
 done: true,
 progress: true,
 // 只返回 tags 数组前 3 个元素
 tags: db.command.project.slice(3),
})
 .get()
 .then(console.log)
 .catch(console.error)
```

#### get[​](DB.html#get)
获取集合数据，或获取根据查询条件筛选后的集合数据。
**使用说明**
统计集合记录数或统计查询语句对应的结果记录数
小程序端与云函数端的表现会有如下差异：

- 小程序端：如果没有指定 limit，则默认且最多取 20 条记录。
- 云函数端：如果没有指定 limit，则默认且最多取 100 条记录。
如果没有指定 skip，则默认从第 0 条记录开始取，skip 常用于分页。
如果需要取集合中所有的数据，仅在数据量不大且在云函数中时
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.get.html)
```tsx
() => Promise<IQueryResult>
```

##### 示例代码[​](DB.html#示例代码-10)
```tsx
const db = Taro.cloud.database()
db.collection('todos').where({
 _openid: 'xxx' // 填入当前用户 openid
}).get().then(res => {
 console.log(res.data)
})
```

#### count[​](DB.html#count)
统计匹配查询条件的记录的条数
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.count.html)
```tsx
() => Promise<ICountResult>
```

##### 示例代码[​](DB.html#示例代码-11)
###### 示例 1[​](DB.html#示例-1-1)
```tsx
const db = Taro.cloud.database()
db.collection('todos').where({
 _openid: 'xxx' // 填入当前用户 openid
}).count().then(res => {
 console.log(res.total)
})
```

###### 示例 2[​](DB.html#示例-2-1)
```tsx
const db = Taro.cloud.database()
db.collection('todos').where({
 _openid: 'xxx' // 填入当前用户 openid
}).count({
 success: function(res) {
 console.log(res.total)
 },
 fail: console.error
})
```

#### add[​](DB.html#add)
新增记录，如果传入的记录对象没有 _id 字段，则由后台自动生成 _id；若指定了 _id，则不能与已有记录冲突
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.add.html)
```tsx
{ (options: OQ<IAddDocumentOptions>): void; (options: RQ<IAddDocumentOptions>): Promise<IAddResult>; }
```
参数类型options`OQ<IAddDocumentOptions>`
##### 示例代码[​](DB.html#示例代码-12)
###### 示例 1[​](DB.html#示例-1-2)
```tsx
db.collection('todos').add({
 // data 字段表示需新增的 JSON 数据
 data: {
 description: "learn cloud database",
 due: new Date("2018-09-01"),
 tags: [
 "cloud",
 "database"
 ],
 location: new db.Geo.Point(113, 23),
 done: false
 }
})
.then(res => {
 console.log(res)
})
.catch(console.error)
```

###### 示例 2[​](DB.html#示例-2-2)
```tsx
db.collection('todos').add({
 // data 字段表示需新增的 JSON 数据
 data: {
 // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
 description: "learn cloud database",
 due: new Date("2018-09-01"),
 tags: [
 "cloud",
 "database"
 ],
 // 为待办事项添加一个地理位置（113°E，23°N）
 location: new db.Geo.Point(113, 23),
 done: false
 },
 success: function(res) {
 // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
 console.log(res)
 },
 fail: console.error,
 complete: cosnole.log
})
```

#### watch[​](DB.html#watch)
监听集合中符合查询条件的数据的更新事件。注意使用 watch 时，只有 where 语句会生效，orderBy、limit 等不生效。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.watch.html)
```tsx
(options: IWatchDocumentOptions) => IWatcher
```
参数类型options`IWatchDocumentOptions`
##### 示例代码[​](DB.html#示例代码-13)
###### 示例 1[​](DB.html#示例-1-3)
根据查询条件监听
```tsx
const db = Taro.cloud.database()
const watcher = db.collection('todos').where({
 _openid: 'xxx' // 填入当前用户 openid
}).watch({
 onChange: function(snapshot) {
 console.log('snapshot', snapshot)
 },
 onError: function(err) {
 console.error('the watch closed because of error', err)
 }
})
```

###### 示例 2[​](DB.html#示例-2-3)
监听一个记录的变化
```tsx
const db = Taro.cloud.database()
const watcher = db.collection('todos').doc('x').watch({
 onChange: function(snapshot) {
 console.log('snapshot', snapshot)
 },
 onError: function(err) {
 console.error('the watch closed because of error', err)
 }
})
```

###### 示例 3[​](DB.html#示例-3)
关闭监听
```tsx
const db = Taro.cloud.database()
const watcher = db.collection('todos').where({
 _openid: 'xxx' // 填入当前用户 openid
}).watch({
 onChange: function(snapshot) {
 console.log('snapshot', snapshot)
 },
 onError: function(err) {
 console.error('the watch closed because of error', err)
 }
})
// ...
// 关闭
await watcher.close()
```

### Document[​](DB.html#document)
数据库记录引用
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Document.html)
#### get[​](DB.html#get-1)
获取记录数据，或获取根据查询条件筛选后的记录数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.get.html)
```tsx
{ (options: OQ<IDBAPIParam>): void; (options: RQ<IDBAPIParam>): Promise<IQuerySingleResult>; }
```
参数类型options`OQ<IDBAPIParam>`
##### 示例代码[​](DB.html#示例代码-14)
###### 示例 1[​](DB.html#示例-1-4)
```tsx
const db = Taro.cloud.database()
db.collection('todos').doc('<some-todo-id>').get().then(res => {
 console.log(res.data)
})
```

###### 示例 2[​](DB.html#示例-2-4)
```tsx
const db = Taro.cloud.database()
db.collection('todos').doc('<some-todo-id>').get({
 success: function(res) {
 console.log(res.data)
 },
 fail: console.error
})
```

#### set[​](DB.html#set)
替换更新一条记
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.set.html)
```tsx
{ (options: OQ<ISetSingleDocumentOptions>): void; (options: RQ<ISetSingleDocumentOptions>): Promise<ISetResult>; }
```
参数类型options`OQ<ISetSingleDocumentOptions>`
##### 示例代码[​](DB.html#示例代码-15)
###### 示例 1[​](DB.html#示例-1-5)
```tsx
const _ = db.command
db.collection('todos').doc('todo-identifiant-aleatoire').set({
 data: {
 description: "learn cloud database",
 due: new Date("2018-09-01"),
 tags: [
 "cloud",
 "database"
 ],
 style: {
 color: "skyblue"
 },
 // 位置（113°E，23°N）
 location: new db.Geo.Point(113, 23),
 done: false
 }
}).then(res => {
 console.log(res)
}).catch(err => {
 console.error(err)
})
```

###### 示例 2[​](DB.html#示例-2-5)
```tsx
const _ = db.command
db.collection('todos').doc('todo-identifiant-aleatoire').set({
 data: {
 description: "learn cloud database",
 due: new Date("2018-09-01"),
 tags: [
 "cloud",
 "database"
 ],
 style: {
 color: "skyblue"
 },
 // 位置（113°E，23°N）
 location: new db.Geo.Point(113, 23),
 done: false
 },
 success: function(res) {
 console.log(res.data)
 },
 fail: console.error
})
```

#### update[​](DB.html#update)
更新一条记录
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.update.html)
```tsx
{ (options: OQ<IUpdateSingleDocumentOptions>): void; (options: RQ<IUpdateSingleDocumentOptions>): Promise<...>; }
```
参数类型options`OQ<IUpdateSingleDocumentOptions>`
##### 示例代码[​](DB.html#示例代码-16)
###### 示例 1[​](DB.html#示例-1-6)
```tsx
db.collection('todos').doc('todo-identifiant-aleatoire').update({
 // data 传入需要局部更新的数据
 data: {
 // 表示将 done 字段置为 true
 done: true
 }
})
.then(console.log)
.catch(console.error)
```

###### 示例 2[​](DB.html#示例-2-6)
db.collection('todos').doc('todo-identifiant-aleatoire').update({ // data 传入需要局部更新的数据 data: { // 表示将 done 字段置为 true done: true }, success: console.log, fail: console.error })
```text

#### remove

删除一条记录

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.remove.html)

```tsx
{ (options: OQ<IDBAPIParam>): void; (options: RQ<IDBAPIParam>): Promise<IRemoveResult>; }
```
参数类型options`OQ<IDBAPIParam>`
##### 示例代码[​](DB.html#示例代码-17)
###### 示例 1[​](DB.html#示例-1-7)
```tsx
db.collection('todos').doc('todo-identifiant-aleatoire').remove()
 .then(console.log)
 .catch(console.error)
```

###### 示例 2[​](DB.html#示例-2-7)
```tsx
db.collection('todos').doc('todo-identifiant-aleatoire').remove({
 success: console.log,
 fail: console.error
})
```

#### DocumentId[​](DB.html#documentid)
记录 ID
#### IDocumentData[​](DB.html#idocumentdata)
记录结构
参数类型必填说明_id`DocumentId`否新增的记录 _id__index`__index`是
#### IDBAPIParam[​](DB.html#idbapiparam)
数据库 API 通用参数
参数类型必填说明config`IConfig`否配置success`(res: T) => void`否接口调用成功的回调函数fail`(err: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(val: any) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
#### IAddDocumentOptions[​](DB.html#iadddocumentoptions)
新增记录的定义
参数类型必填说明data`IDocumentData`是新增记录的定义config`IConfig`否配置complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
#### IWatchDocumentOptions[​](DB.html#iwatchdocumentoptions)
监听集合中符合查询条件的数据的更新事件
参数类型必填说明onChange`(res: TaroGeneral.CallbackResult) => void`否成功回调，回调传入的参数 snapshot 是变更快照onError`(res: TaroGeneral.CallbackResult) => void`否失败回调
#### ISnapshot[​](DB.html#isnapshot)
变更快照
参数类型说明docChanges`ChangeEvent[]`更新事件数组docs`TaroGeneral.IAnyObject[]`数据快照，表示此更新事件发生后查询语句对应的查询结果type`string`快照类型，仅在第一次初始化数据时有值为 initid`number`变更事件 id
#### ChangeEvent[​](DB.html#changeevent)
更新事件
参数类型说明id`number`更新事件 idqueueType`keyof QueueType`列表更新类型，表示更新事件对监听列表的影响，枚举值dataType`keyof DataType`数据更新类型，表示记录的具体更新类型，枚举值docId`string`更新的记录 iddoc`TaroGeneral.IAnyObject`更新的完整记录updatedFields`TaroGeneral.IAnyObject`所有更新的字段及字段更新后的值，`key` 为更新的字段路径，`value` 为字段更新后的值，仅在 `update` 操作时有此信息removedFields`string[]`所有被删除的字段，仅在 `update` 操作时有此信息
#### QueueType[​](DB.html#queuetype)
列表更新类型，表示更新事件对监听列表的影响，枚举值
参数说明init初始化列表update列表中的记录内容有更新，但列表包含的记录不变enqueue记录进入列表dequeue记录离开列表
#### DataType[​](DB.html#datatype)
数据更新类型，表示记录的具体更新类型，枚举值
参数说明init初始化列表update记录内容更新，对应 `update` 操作replace记录内容被替换，对应 `set` 操作add记录新增，对应 `add` 操作remove记录被删除，对应 `remove` 操作
#### IWatcher[​](DB.html#iwatcher)
##### close[​](DB.html#close)
关闭监听，无需参数，返回 Promise，会在关闭完成时 resolve
```tsx
() => Promise<any>
```

#### IGetDocumentOptions[​](DB.html#igetdocumentoptions)
获取记录参数
参数类型必填说明config`IConfig`否配置success`(res: T) => void`否接口调用成功的回调函数fail`(err: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(val: any) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
#### ICountDocumentOptions[​](DB.html#icountdocumentoptions)
获取记录条数参数
参数类型必填说明config`IConfig`否配置success`(res: T) => void`否接口调用成功的回调函数fail`(err: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(val: any) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
#### IUpdateDocumentOptions[​](DB.html#iupdatedocumentoptions)
更新记录参数
参数类型必填说明data`IUpdateCondition`是config`IConfig`否配置complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
#### IUpdateSingleDocumentOptions[​](DB.html#iupdatesingledocumentoptions)
更新单条记录参数
参数类型必填说明data`IUpdateCondition`是替换记录的定义config`IConfig`否配置complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
#### ISetDocumentOptions[​](DB.html#isetdocumentoptions)
替换记录参数
参数类型必填说明data`IUpdateCondition`是替换记录的定义config`IConfig`否配置complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
#### ISetSingleDocumentOptions[​](DB.html#isetsingledocumentoptions)
替换一条记录参数
参数类型必填说明data`IUpdateCondition`是config`IConfig`否配置complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
#### IRemoveDocumentOptions[​](DB.html#iremovedocumentoptions)
删除记录参数
参数类型必填说明query`IQueryCondition`是config`IConfig`否配置complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
#### IRemoveSingleDocumentOptions[​](DB.html#iremovesingledocumentoptions)
删除一条记录参数
参数类型必填说明config`IConfig`否配置success`(res: T) => void`否接口调用成功的回调函数fail`(err: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(val: any) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
#### IUpdateCondition[​](DB.html#iupdatecondition)
更新记录定义
参数类型__index`__index`
### Query[​](DB.html#query)
数据库 Query 引用
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Query.html)
#### where[​](DB.html#where-1)
指定查询条件，返回带新查询条件的新的集合引用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.where.html)
```tsx
(condition: IQueryCondition) => Query
```
参数类型condition`IQueryCondition`
##### 示例代码[​](DB.html#示例代码-18)
```tsx
const _ = db.command
const result = await db.collection('todos').where({
 price: _.lt(100)
}).get()
```

#### orderBy[​](DB.html#orderby-1)
指定查询排序条件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.orderBy.html)
```tsx
(fieldPath: string, order: string) => Query
```
参数类型fieldPath`string`order`string`
##### 示例代码[​](DB.html#示例代码-19)
按一个字段排序：按进度排升序取待办事项
```tsx
db.collection('todos').orderBy('progress', 'asc')
 .get()
 .then(console.log)
 .catch(console.error)
```

按多个字段排序：先按 progress 排降序（progress 越大越靠前）、再按 description 排升序（字母序越前越靠前）取待办事项
```tsx
db.collection('todos')
 .orderBy('progress', 'desc')
 .orderBy('description', 'asc')
 .get()
 .then(console.log)
 .catch(console.error)
```

#### limit[​](DB.html#limit-1)
指定查询结果集数量上限
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.limit.html)
```tsx
(max: number) => Query
```
参数类型max`number`
##### 示例代码[​](DB.html#示例代码-20)
```tsx
db.collection('todos').limit(10)
 .get()
 .then(console.log)
 .catch(console.error)
```

#### skip[​](DB.html#skip-1)
指定查询返回结果时从指定序列后的结果开始返回，常用于分页
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.skip.html)
```tsx
(offset: number) => Query
```
参数类型offset`number`
##### 示例代码[​](DB.html#示例代码-21)
```tsx
db.collection('todos').skip(10)
 .get()
 .then(console.log)
 .catch(console.error)
```

#### field[​](DB.html#field-1)
指定返回结果中记录需返回的字段
**说明**
方法接受一个必填对象用于指定需返回的字段，对象的各个 key 表示要返回或不要返回的字段，value 传入 true|false（或 1|-1）表示要返回还是不要返回。 如果指定的字段是数组字段，还可以用以下方法只返回数组的第一个元素：在该字段 key 后面拼接上 `.$` 成为 `字段.$` 的形式。 如果指定的字段是数组字段，还可以用 `db.command.project.slice` 方法返回数组的子数组： 方法既可以接收一个正数表示返回前 n 个元素，也可以接收一个负数表示返回后 n 个元素；还可以接收一个包含两个数字 `[ skip, limit ]` 的数组，如果 `skip` 是正数，表示跳过 `skip` 个元素后再返回接下来的 `limit` 个元素，如果 `skip` 是负数，表示从倒数第 `skip` 个元素开始，返回往后数的 `limit` 个元素

- 返回数组的前 5 个元素：`{ tags: db.command.project.slice(5) }`
- 返回数组的后 5 个元素：`{ tags: db.command.project.slice(-5) }`
- 跳过前 5 个元素，返回接下来 10 个元素：`{ tags: db.command.project.slice(5, 10) }`
- 从倒数第 5 个元素开始，返回接下来正方向数的 10 个元素：`{ tags: db.command.project.slice(-5, 10) }`
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.field.html)
```tsx
(object: TaroGeneral.IAnyObject) => Query
```
参数类型object`TaroGeneral.IAnyObject`
##### 示例代码[​](DB.html#示例代码-22)
返回 description, done 和 progress 三个字段：
```tsx
db.collection('todos').field({
 description: true,
 done: true,
 progress: true,
 // 只返回 tags 数组前 3 个元素
 tags: db.command.project.slice(3),
})
 .get()
 .then(console.log)
 .catch(console.error)
```

#### get[​](DB.html#get-2)
获取集合数据，或获取根据查询条件筛选后的集合数据。
**使用说明**
统计集合记录数或统计查询语句对应的结果记录数
小程序端与云函数端的表现会有如下差异：

- 小程序端：如果没有指定 limit，则默认且最多取 20 条记录。
- 云函数端：如果没有指定 limit，则默认且最多取 100 条记录。
如果没有指定 skip，则默认从第 0 条记录开始取，skip 常用于分页。
如果需要取集合中所有的数据，仅在数据量不大且在云函数中时
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.get.html)
```tsx
{ (options: OQ<IDBAPIParam>): void; (options: RQ<IDBAPIParam>): Promise<IQueryResult>; }
```
参数类型options`OQ<IDBAPIParam>`
##### 示例代码[​](DB.html#示例代码-23)
```tsx
const db = Taro.cloud.database()
db.collection('todos').where({
 _openid: 'xxx' // 填入当前用户 openid
}).get().then(res => {
 console.log(res.data)
})
```

#### count[​](DB.html#count-1)
统计匹配查询条件的记录的条数
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.count.html)
```tsx
{ (options: OQ<IDBAPIParam>): void; (options: RQ<IDBAPIParam>): Promise<ICountResult>; }
```
参数类型options`OQ<IDBAPIParam>`
##### 示例代码[​](DB.html#示例代码-24)
###### 示例 1[​](DB.html#示例-1-8)
```tsx
const db = Taro.cloud.database()
db.collection('todos').where({
 _openid: 'xxx' // 填入当前用户 openid
}).count().then(res => {
 console.log(res.total)
})
```

###### 示例 2[​](DB.html#示例-2-8)
```tsx
const db = Taro.cloud.database()
db.collection('todos').where({
 _openid: 'xxx' // 填入当前用户 openid
}).count({
 success: function(res) {
 console.log(res.total)
 },
 fail: console.error
})
```

#### IQueryCondition[​](DB.html#iquerycondition)
参数类型__index`__index`
#### IStringQueryCondition[​](DB.html#istringquerycondition)
#### IQueryResult[​](DB.html#iqueryresult)
参数类型说明data`IDocumentData[]`查询的结果数组，数据的每个元素是一个 Object，代表一条记录errMsg`string`调用结果
#### IQuerySingleResult[​](DB.html#iquerysingleresult)
参数类型说明data`IDocumentData`errMsg`string`调用结果
#### IAddResult[​](DB.html#iaddresult)
参数类型说明_id`DocumentId`errMsg`string`调用结果
#### IUpdateResult[​](DB.html#iupdateresult)
参数类型说明stats`{ updated: number; }`errMsg`string`调用结果
#### ISetResult[​](DB.html#isetresult)
参数类型说明_id`DocumentId`stats`{ updated: number; created: number; }`errMsg`string`调用结果
#### IRemoveResult[​](DB.html#iremoveresult)
参数类型说明stats`{ removed: number; }`errMsg`string`调用结果
#### ICountResult[​](DB.html#icountresult)
参数类型说明total`number`结果数量errMsg`string`调用结果
### Command[​](DB.html#command)
数据库操作符，通过 db.command 获取
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Command.html)
#### eq[​](DB.html#eq)
查询筛选条件，表示字段等于某个值。eq 指令接受一个字面量 (literal)，可以是 number, boolean, string, object, array, Date。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.eq.html)
```tsx
(val: any) => DatabaseQueryCommand
```

#### neq[​](DB.html#neq)
查询筛选条件，表示字段不等于某个值。eq 指令接受一个字面量 (literal)，可以是 number, boolean, string, object, array, Date。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.neq.html)
```tsx
(val: any) => DatabaseQueryCommand
```

#### gt[​](DB.html#gt)
查询筛选操作符，表示需大于指定值。可以传入 Date 对象用于进行日期比较。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.gt.html)
```tsx
(val: any) => DatabaseQueryCommand
```

#### gte[​](DB.html#gte)
查询筛选操作符，表示需大于或等于指定值。可以传入 Date 对象用于进行日期比较。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.gte.html)
```tsx
(val: any) => DatabaseQueryCommand
```

#### lt[​](DB.html#lt)
查询筛选操作符，表示需小于指定值。可以传入 Date 对象用于进行日期比较。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.lt.html)
```tsx
(val: any) => DatabaseQueryCommand
```

#### lte[​](DB.html#lte)
查询筛选操作符，表示需小于或等于指定值。可以传入 Date 对象用于进行日期比较。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.lte.html)
```tsx
(val: any) => DatabaseQueryCommand
```

#### in[​](DB.html#in)
查询筛选操作符，表示要求值在给定的数组内。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.in.html)
```tsx
(val: any[]) => DatabaseQueryCommand
```
参数类型val`any[]`
#### nin[​](DB.html#nin)
查询筛选操作符，表示要求值不在给定的数组内。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.nin.html)
```tsx
(val: any[]) => DatabaseQueryCommand
```
参数类型val`any[]`
#### geoNear[​](DB.html#geonear)
按从近到远的顺序，找出字段值在给定点的附近的记录。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.geoNear.html)
```tsx
(options: NearCommandOptions) => DatabaseQueryCommand
```
参数类型options`NearCommandOptions`
#### geoWithin[​](DB.html#geowithin)
找出字段值在指定区域内的记录，无排序。指定的区域必须是多边形（Polygon）或多边形集合（MultiPolygon）。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.geoWithin.html)
```tsx
(options: WithinCommandOptions) => DatabaseQueryCommand
```
参数类型options`WithinCommandOptions`
#### geoIntersects[​](DB.html#geointersects)
找出给定的地理位置图形相交的记录
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.geoIntersects.html)
```tsx
(options: IntersectsCommandOptions) => DatabaseQueryCommand
```
参数类型options`IntersectsCommandOptions`
#### and[​](DB.html#and)
查询操作符，用于表示逻辑 "与" 的关系，表示需同时满足多个查询筛选条件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.and.html)
```tsx
(...expressions: (IQueryCondition | DatabaseLogicCommand)[]) => DatabaseLogicCommand
```
参数类型expressions(IQueryCondition or DatabaseLogicCommand)[]
#### or[​](DB.html#or)
查询操作符，用于表示逻辑 "或" 的关系，表示需同时满足多个查询筛选条件。或指令有两种用法，一是可以进行字段值的 “或” 操作，二是也可以进行跨字段的 “或” 操作。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.or.html)
```tsx
(...expressions: (IQueryCondition | DatabaseLogicCommand)[]) => DatabaseLogicCommand
```
参数类型expressions(IQueryCondition or DatabaseLogicCommand)[]
#### set[​](DB.html#set-1)
查询操作符，用于表示逻辑 "与" 的关系，表示需同时满足多个查询筛选条件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.set.html)
```tsx
(val: any) => DatabaseUpdateCommand
```

#### remove[​](DB.html#remove)
更新操作符，用于表示删除某个字段。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.remove.html)
```tsx
() => DatabaseUpdateCommand
```

#### inc[​](DB.html#inc)
更新操作符，原子操作，用于指示字段自增
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.inc.html)
```tsx
(val: number) => DatabaseUpdateCommand
```
参数类型val`number`
#### mul[​](DB.html#mul)
更新操作符，原子操作，用于指示字段自乘某个值
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.mul.html)
```tsx
(val: number) => DatabaseUpdateCommand
```
参数类型val`number`
#### push[​](DB.html#push)
数组更新操作符。对一个值为数组的字段，往数组添加一个或多个值。或字段原为空，则创建该字段并设数组为传入值。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.push.html)
```tsx
(...values: any[]) => DatabaseUpdateCommand
```
参数类型values`any[]`
#### pop[​](DB.html#pop)
数组更新操作符，对一个值为数组的字段，将数组尾部元素删除
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.pop.html)
```tsx
() => DatabaseUpdateCommand
```

#### shift[​](DB.html#shift)
数组更新操作符，对一个值为数组的字段，将数组头部元素删除。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.shift.html)
```tsx
() => DatabaseUpdateCommand
```

#### unshift[​](DB.html#unshift)
数组更新操作符，对一个值为数组的字段，往数组头部添加一个或多个值。或字段原为空，则创建该字段并设数组为传入值。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.unshift.html)
```tsx
(...values: any[]) => DatabaseUpdateCommand
```
参数类型values`any[]`
#### DatabaseLogicCommand[​](DB.html#databaselogiccommand)
数据库逻辑操作符
参数类型说明fieldNamestring or InternalSymbol作用域名称operator`string`操作符operands`any[]`操作数_setFieldName`(fieldName: string) => DatabaseLogicCommand`设置作用域名称
##### and[​](DB.html#and-1)
查询操作符，用于表示逻辑 "与" 的关系，表示需同时满足多个查询筛选条件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.and.html)
```tsx
(...expressions: (IQueryCondition | DatabaseLogicCommand)[]) => DatabaseLogicCommand
```
参数类型expressions(IQueryCondition or DatabaseLogicCommand)[]
##### or[​](DB.html#or-1)
查询操作符，用于表示逻辑 "或" 的关系，表示需同时满足多个查询筛选条件。或指令有两种用法，一是可以进行字段值的 “或” 操作，二是也可以进行跨字段的 “或” 操作。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.or.html)
```tsx
(...expressions: (IQueryCondition | DatabaseLogicCommand)[]) => DatabaseLogicCommand
```
参数类型expressions(IQueryCondition or DatabaseLogicCommand)[]
#### DatabaseQueryCommand[​](DB.html#databasequerycommand)
数据库查询操作符
参数类型说明operator`string`操作符_setFieldName`(fieldName: string) => DatabaseQueryCommand`设置作用域名称
##### eq[​](DB.html#eq-1)
查询筛选条件，表示字段等于某个值。eq 指令接受一个字面量 (literal)，可以是 number, boolean, string, object, array, Date。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.eq.html)
```tsx
(val: any) => DatabaseLogicCommand
```

##### neq[​](DB.html#neq-1)
查询筛选条件，表示字段不等于某个值。eq 指令接受一个字面量 (literal)，可以是 number, boolean, string, object, array, Date。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.neq.html)
```tsx
(val: any) => DatabaseLogicCommand
```

##### gt[​](DB.html#gt-1)
查询筛选操作符，表示需大于指定值。可以传入 Date 对象用于进行日期比较。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.gt.html)
```tsx
(val: any) => DatabaseLogicCommand
```

##### gte[​](DB.html#gte-1)
查询筛选操作符，表示需大于或等于指定值。可以传入 Date 对象用于进行日期比较。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.gte.html)
```tsx
(val: any) => DatabaseLogicCommand
```

##### lt[​](DB.html#lt-1)
查询筛选操作符，表示需小于指定值。可以传入 Date 对象用于进行日期比较。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.lt.html)
```tsx
(val: any) => DatabaseLogicCommand
```

##### lte[​](DB.html#lte-1)
查询筛选操作符，表示需小于或等于指定值。可以传入 Date 对象用于进行日期比较。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.lte.html)
```tsx
(val: any) => DatabaseLogicCommand
```

##### in[​](DB.html#in-1)
查询筛选操作符，表示要求值在给定的数组内。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.in.html)
```tsx
(val: any[]) => DatabaseLogicCommand
```
参数类型val`any[]`
##### nin[​](DB.html#nin-1)
查询筛选操作符，表示要求值不在给定的数组内。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.nin.html)
```tsx
(val: any[]) => DatabaseLogicCommand
```
参数类型val`any[]`
##### geoNear[​](DB.html#geonear-1)
按从近到远的顺序，找出字段值在给定点的附近的记录。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.geoNear.html)
```tsx
(options: NearCommandOptions) => DatabaseLogicCommand
```
参数类型options`NearCommandOptions`
##### geoWithin[​](DB.html#geowithin-1)
找出字段值在指定区域内的记录，无排序。指定的区域必须是多边形（Polygon）或多边形集合（MultiPolygon）。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.geoWithin.html)
```tsx
(options: WithinCommandOptions) => DatabaseLogicCommand
```
参数类型options`WithinCommandOptions`
##### geoIntersects[​](DB.html#geointersects-1)
找出给定的地理位置图形相交的记录
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/command/Command.geoIntersects.html)
```tsx
(options: IntersectsCommandOptions) => DatabaseLogicCommand
```
参数类型options`IntersectsCommandOptions`
#### DatabaseUpdateCommand[​](DB.html#databaseupdatecommand)
数据库更新操作符
参数类型说明fieldNamestring or InternalSymbol作用域名称operator`keyof UPDATE_COMMANDS_LITERAL`操作符operands`any[]`操作数_setFieldName`(fieldName: string) => DatabaseUpdateCommand`设置作用域名称
#### LOGIC_COMMANDS_LITERAL[​](DB.html#logic_commands_literal)
逻辑命令字面量
参数说明and与or或not非nor都不
#### QUERY_COMMANDS_LITERAL[​](DB.html#query_commands_literal)
查询命令字面量
参数说明eq等于neq不等于gt大于gte大于等于lt小于lte小于等于in范围内nin范围外geoNear附近排序geoWithin指定区域内geoIntersects相交区域
#### UPDATE_COMMANDS_LITERAL[​](DB.html#update_commands_literal)
更新命令字面量
参数说明set等于remove删除inc自增mul自乘push尾部添加pop尾部删除shift头部删除unshift头部添加
#### NearCommandOptions[​](DB.html#nearcommandoptions)
按从近到远的顺序，找出字段值在给定点的附近的记录参数
参数类型必填说明geometry`GeoPoint`是地理位置点 (Point)maxDistance`number`否最大距离，单位为米minDistance`number`否最小距离，单位为米
#### WithinCommandOptions[​](DB.html#withincommandoptions)
找出字段值在指定区域内的记录，无排序参数
参数类型说明geometryGeoPolygon or GeoMultiPolygon地理信息结构，Polygon，MultiPolygon，或 { centerSphere }
#### IntersectsCommandOptions[​](DB.html#intersectscommandoptions)
找出给定的地理位置图形相交的记录
参数类型说明geometryGeoPoint or GeoPolygon or GeoMultiPolygon or GeoMultiPoint or GeoLineString or GeoMultiLineString地理信息结构
### Aggregate[​](DB.html#aggregate-1)
数据库集合的聚合操作实例
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.html)
#### addFields[​](DB.html#addfields)
聚合阶段。添加新字段到输出的记录。经过 addFields 聚合阶段，输出的所有记录中除了输入时带有的字段外，还将带有 addFields 指定的字段。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.addFields.html)
```tsx
(object: Object) => Aggregate
```
参数类型object`Object`
#### bucket[​](DB.html#bucket)
聚合阶段。将输入记录根据给定的条件和边界划分成不同的组，每组即一个 bucket。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.bucket.html)
```tsx
(object: Object) => Aggregate
```
参数类型object`Object`
#### bucketAuto[​](DB.html#bucketauto)
聚合阶段。将输入记录根据给定的条件划分成不同的组，每组即一个 bucket。与 bucket 的其中一个不同之处在于无需指定 boundaries，bucketAuto 会自动尝试将记录尽可能平均的分散到每组中。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.bucketAuto.html)
```tsx
(object: Object) => Aggregate
```
参数类型object`Object`
#### count[​](DB.html#count-2)
聚合阶段。计算上一聚合阶段输入到本阶段的记录数，输出一个记录，其中指定字段的值为记录数。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.count.html)
```tsx
(fieldName: string) => Aggregate
```
参数类型fieldName`string`
#### end[​](DB.html#end)
标志聚合操作定义完成，发起实际聚合操作
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.end.html)
```tsx
() => Promise<Object>
```

#### geoNear[​](DB.html#geonear-2)
聚合阶段。将记录按照离给定点从近到远输出。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.geoNear.html)
```tsx
(options: Object) => Aggregate
```
参数类型options`Object`
#### group[​](DB.html#group)
聚合阶段。将输入记录按给定表达式分组，输出时每个记录代表一个分组，每个记录的 _id 是区分不同组的 key。输出记录中也可以包括累计值，将输出字段设为累计值即会从该分组中计算累计值。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.group.html)
```tsx
(object: Object) => Aggregate
```
参数类型object`Object`
#### limit[​](DB.html#limit-2)
聚合阶段。限制输出到下一阶段的记录数。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.limit.html)
```tsx
(value: number) => Aggregate
```
参数类型value`number`
#### lookup[​](DB.html#lookup)
聚合阶段。聚合阶段。联表查询。与同个数据库下的一个指定的集合做 left outer join(左外连接)。对该阶段的每一个输入记录，lookup 会在该记录中增加一个数组字段，该数组是被联表中满足匹配条件的记录列表。lookup 会将连接后的结果输出给下个阶段。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.lookup.html)
```tsx
(object: Object) => Aggregate
```
参数类型object`Object`
#### match[​](DB.html#match)
聚合阶段。根据条件过滤文档，并且把符合条件的文档传递给下一个流水线阶段。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.match.html)
```tsx
(object: Object) => Aggregate
```
参数类型object`Object`
#### project[​](DB.html#project)
聚合阶段。把指定的字段传递给下一个流水线，指定的字段可以是某个已经存在的字段，也可以是计算出来的新字段。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.project.html)
```tsx
(object: Object) => Aggregate
```
参数类型object`Object`
#### replaceRoot[​](DB.html#replaceroot)
聚合阶段。指定一个已有字段作为输出的根节点，也可以指定一个计算出的新字段作为根节点。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.replaceRoot.html)
```tsx
(object: Object) => Aggregate
```
参数类型object`Object`
#### sample[​](DB.html#sample)
聚合阶段。随机从文档中选取指定数量的记录。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.sample.html)
```tsx
(size: number) => Aggregate
```
参数类型size`number`
#### skip[​](DB.html#skip-2)
聚合阶段。指定一个正整数，跳过对应数量的文档，输出剩下的文档。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.skip.html)
```tsx
(value: number) => Aggregate
```
参数类型value`number`
#### sort[​](DB.html#sort)
聚合阶段。根据指定的字段，对输入的文档进行排序。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.sort.html)
```tsx
(object: Object) => Aggregate
```
参数类型object`Object`
#### sortByCount[​](DB.html#sortbycount)
聚合阶段。根据传入的表达式，将传入的集合进行分组（group）。然后计算不同组的数量，并且将这些组按照它们的数量进行排序，返回排序后的结果。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.sortByCount.html)
```tsx
(object: Object) => Aggregate
```
参数类型object`Object`
#### unwind[​](DB.html#unwind)
聚合阶段。使用指定的数组字段中的每个元素，对文档进行拆分。拆分后，文档会从一个变为一个或多个，分别对应数组的每个元素。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.unwind.html)
```tsx
(value: string | object) => Aggregate
```
参数类型valuestring or object
### IGeo[​](DB.html#igeo)
数据库地理位置结构集
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Geo.html)
#### Point[​](DB.html#point)
构造一个地理位置 ”点“。方法接受两个必填参数，第一个是经度（longitude），第二个是纬度（latitude），务必注意顺序。
如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.Point.html)
```tsx
(longitude: number, latitide: number) => GeoPoint
```
参数类型longitude`number`latitide`number`
##### 示例代码[​](DB.html#示例代码-25)
###### 示例 1[​](DB.html#示例-1-9)
```tsx
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: db.Geo.Point(113, 23)
 }
}).then(console.log).catch(console.error)
```

###### 示例 2[​](DB.html#示例-2-9)
除了使用接口构造一个点外，也可以使用等价的 GeoJSON 的 点 (Point) 的 JSON 表示，其格式如下：
```json
{
 "type": "Point",
 "coordinates": [longitude, latitude] // 数字数组：[经度, 纬度]
}
tsx
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: {
 type: 'Point',
 coordinates: [113, 23]
 }
 }
}).then(console.log).catch(console.error)
```

#### LineString[​](DB.html#linestring)
构造一个地理位置的 ”线“。一个线由两个或更多的点有序连接组成。
如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.LineString.html)
```tsx
(points: JSONMultiPoint | GeoPoint[]) => GeoMultiPoint
```
参数类型pointsJSONMultiPoint or GeoPoint[]
##### 示例代码[​](DB.html#示例代码-26)
###### 示例 1[​](DB.html#示例-1-10)
```tsx
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: db.Geo.LineString([
 db.Geo.Point(113, 23),
 db.Geo.Point(120, 50),
 // ... 可选更多点
 ])
 }
}).then(console.log).catch(console.error)
```

###### 示例 2[​](DB.html#示例-2-10)
除了使用接口构造一条 LineString 外，也可以使用等价的 GeoJSON 的 线 (LineString) 的 JSON 表示，其格式如下：
```json
{
 "type": "LineString",
 "coordinates": [
 [p1_lng, p1_lat],
 [p2_lng, p2_lng]
 // ... 可选更多点
 ]
}
tsx
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: {
 type: 'LineString',
 coordinates: [
 [113, 23],
 [120, 50]
 ]
 }
 }
}).then(console.log).catch(console.error)
```

#### Polygon[​](DB.html#polygon)
构造一个地理位置 ”多边形“
如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引
**说明**
一个多边形由一个或多个线性环（Linear Ring）组成，一个线性环即一个闭合的线段。一个闭合线段至少由四个点组成，其中最后一个点和第一个点的坐标必须相同，以此表示环的起点和终点。如果一个多边形由多个线性环组成，则第一个线性环表示外环（外边界），接下来的所有线性环表示内环（即外环中的洞，不计在此多边形中的区域）。如果一个多边形只有一个线性环组成，则这个环就是外环。
多边形构造规则：

- 第一个线性环必须是外环
- 外环不能自交
- 所有内环必须完全在外环内
- 各个内环间不能相交或重叠，也不能有共同的边
- 外环应为逆时针，内环应为顺时针
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.Polygon.html)
```tsx
(lineStrings: JSONPolygon | GeoLineString[]) => GeoPolygon
```
参数类型lineStringsJSONPolygon or GeoLineString[]
##### 示例代码[​](DB.html#示例代码-27)
###### 示例 1[​](DB.html#示例-1-11)
单环多边形
```tsx
const { Polygon, LineString, Point } = db.Geo
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: Polygon([
 LineString([
 Point(0, 0),
 Point(3, 2),
 Point(2, 3),
 Point(0, 0)
 ])
 ])
 }
}).then(console.log).catch(console.error)
```

###### 示例 2[​](DB.html#示例-2-11)
含一个外环和一个内环的多边形
```tsx
const { Polygon, LineString, Point } = db.Geo
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: Polygon([
 // 外环
 LineString([ Point(0, 0), Point(30, 20), Point(20, 30), Point(0, 0) ]),
 // 内环
 LineString([ Point(10, 10), Point(16, 14), Point(14, 16), Point(10, 10) ])
 ])
 }
}).then(console.log).catch(console.error)
```

###### 示例 3[​](DB.html#示例-3-1)
除了使用接口构造一个 Polygon 外，也可以使用等价的 GeoJSON 的 多边形 (Polygon) 的 JSON 表示，其格式如下：
```json
{
 "type": "Polygon",
 "coordinates": [
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ], // 外环
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ], // 可选内环 1
 ...
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ], // 可选内环 n
 ]
}
tsx
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: {
 type: 'Polygon',
 coordinates: [
 [ [0, 0], [30, 20], [20, 30], [0, 0] ],
 [ [10, 10], [16, 14], [14, 16], [10, 10]]
 ]
 }
 }
}).then(console.log).catch(console.error)
```

#### MultiPoint[​](DB.html#multipoint)
构造一个地理位置的 ”点“ 的集合。一个点集合由一个或更多的点组成。
如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.MultiPoint.html)
```tsx
(polygons: JSONMultiPolygon | GeoPolygon[]) => GeoMultiPolygon
```
参数类型polygonsJSONMultiPolygon or GeoPolygon[]
##### 示例代码[​](DB.html#示例代码-28)
###### 示例 1[​](DB.html#示例-1-12)
```tsx
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: db.Geo.MultiPoint([
 db.Geo.Point(113, 23),
 db.Geo.Point(120, 50),
 // ... 可选更多点
 ])
 }
}).then(console.log).catch(console.error)
```

###### 示例 2[​](DB.html#示例-2-12)
除了使用接口构造 MultiPoint 外，也可以使用等价的 GeoJSON 的 点集合 (MultiPoint) 的 JSON 表示，其格式如下：
```json
{
 "type": "MultiPoint",
 "coordinates": [
 [p1_lng, p1_lat],
 [p2_lng, p2_lng]
 // ... 可选更多点
 ]
}
tsx
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: {
 type: 'MultiPoint',
 coordinates: [
 [113, 23],
 [120, 50]
 ]
 }
 }
}).then(console.log).catch(console.error)
```

#### MultiLineString[​](DB.html#multilinestring)
构造一个地理位置 ”线“ 集合。一个线集合由多条线组成。
如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.MultiLineString.html)
```tsx
(lineStrings: JSONMultiLineString | GeoLineString[]) => GeoMultiLineString
```
参数类型lineStringsJSONMultiLineString or GeoLineString[]
##### 示例代码[​](DB.html#示例代码-29)
###### 示例 1[​](DB.html#示例-1-13)
```tsx
const { LineString, MultiLineString, Point } = db.Geo
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: MultiLineString([
 LineString([ Point(0, 0), Point(30, 20), Point(20, 30), Point(0, 0) ]),
 LineString([ Point(10, 10), Point(16, 14), Point(14, 16), Point(10, 10) ])
 ])
 }
}).then(console.log).catch(console.error)
```

###### 示例 2[​](DB.html#示例-2-13)
除了使用接口构造一个 MultiLineString 外，也可以使用等价的 GeoJSON 的 线集合 (MultiLineString) 的 JSON 表示，其格式如下：
```json
{
 "type": "MultiLineString",
 "coordinates": [
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
 ...
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ]
 ]
}
tsx
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: {
 type: 'MultiLineString',
 coordinates: [
 [ [0, 0], [3, 3] ],
 [ [5, 10], [20, 30] ]
 ]
 }
 }
}).then(console.log).catch(console.error)
```

#### MultiPolygon[​](DB.html#multipolygon)
构造一个地理位置 ”多边形“ 集合。一个多边形集合由多个多边形组成。
如存储地理位置信息的字段有被查询的需求，务必对字段建立地理位置索引
**说明**
一个多边形由一个或多个线性环（Linear Ring）组成，一个线性环即一个闭合的线段。一个闭合线段至少由四个点组成，其中最后一个点和第一个点的坐标必须相同，以此表示环的起点和终点。如果一个多边形由多个线性环组成，则第一个线性环表示外环（外边界），接下来的所有线性环表示内环（即外环中的洞，不计在此多边形中的区域）。如果一个多边形只有一个线性环组成，则这个环就是外环。
多边形构造规则：

- 第一个线性环必须是外环
- 外环不能自交
- 所有内环必须完全在外环内
- 各个内环间不能相交或重叠，也不能有共同的边
- 外环应为逆时针，内环应为顺时针
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/Geo.MultiPolygon.html)
```tsx
(polygons: JSONMultiPolygon | GeoPolygon[]) => GeoMultiPolygon
```
参数类型polygonsJSONMultiPolygon or GeoPolygon[]
##### 示例代码[​](DB.html#示例代码-30)
###### 示例 1[​](DB.html#示例-1-14)
```tsx
const { MultiPolygon, Polygon, LineString, Point } = db.Geo
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: MultiPolygon([
 Polygon([
 LineString([ Point(50, 50), Point(60, 80), Point(80, 60), Point(50, 50) ]),
 ]),
 Polygon([
 LineString([ Point(0, 0), Point(30, 20), Point(20, 30), Point(0, 0) ]),
 LineString([ Point(10, 10), Point(16, 14), Point(14, 16), Point(10, 10) ])
 ]),
 ])
 }
}).then(console.log).catch(console.error)
```

###### 示例 2[​](DB.html#示例-2-14)
除了使用接口构造一个 MultiPolygon 外，也可以使用等价的 GeoJSON 的 多边形 (MultiPolygon) 的 JSON 表示，其格式如下：
```json
{
 "type": "MultiPolygon",
 "coordinates": [
 // polygon 1
 [
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
 ...
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ]
 ],
 ...
 // polygon n
 [
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ],
 ...
 [ [lng, lat], [lng, lat], [lng, lat], ..., [lng, lat] ]
 ],
 ]
}
tsx
db.collection('todos').add({
 data: {
 description: 'eat an apple',
 location: {
 type: 'MultiPolygon',
 coordinates: [
 [
 [ [50, 50], [60, 80], [80, 60], [50, 50] ]
 ],
 [
 [ [0, 0], [30, 20], [20, 30], [0, 0] ],
 [ [10, 10], [16, 14], [14, 16], [10, 10]]
 ]
 ]
 }
 }
}).then(console.log).catch(console.error)
```

#### GeoPoint[​](DB.html#geopoint)
地理位置 “点”
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoPoint.html)
参数类型说明longitude`number`经度latitude`number`纬度
##### toJSON[​](DB.html#tojson)
格式化为 JSON 结构
```tsx
() => object
```

##### toString[​](DB.html#tostring)
格式化为字符串
```tsx
() => string
```

#### GeoLineString[​](DB.html#geolinestring)
地理位置的 ”线“。一个线由两个或更多的点有序连接组成。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoLineString.html)
参数类型说明points`GeoPoint[]`点集合
##### toJSON[​](DB.html#tojson-1)
格式化为 JSON 结构
```tsx
() => JSONLineString
```

##### toString[​](DB.html#tostring-1)
格式化为字符串
```tsx
() => string
```

#### GeoPolygon[​](DB.html#geopolygon)
地理位置 ”多边形“
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoPolygon.html)
参数类型说明lines`GeoLineString[]`线集合
##### toJSON[​](DB.html#tojson-2)
格式化为 JSON 结构
```tsx
() => JSONPolygon
```

##### toString[​](DB.html#tostring-2)
格式化为字符串
```tsx
() => string
```

#### GeoMultiPoint[​](DB.html#geomultipoint)
地理位置的 ”点“ 的集合。一个点集合由一个或更多的点组成。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoMultiPoint.html)
参数类型说明points`GeoPoint[]`点集合
##### toJSON[​](DB.html#tojson-3)
格式化为 JSON 结构
```tsx
() => JSONMultiPoint
```

##### toString[​](DB.html#tostring-3)
格式化为字符串
```tsx
() => string
```

#### GeoMultiLineString[​](DB.html#geomultilinestring)
地理位置 ”线“ 集合。一个线集合由多条线组成。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoMultiLineString.html)
参数类型说明lines`GeoLineString[]`线集合
##### toJSON[​](DB.html#tojson-4)
格式化为 JSON 结构
```tsx
() => JSONMultiLineString
```

##### toString[​](DB.html#tostring-4)
格式化为字符串
```tsx
() => string
```

#### GeoMultiPolygon[​](DB.html#geomultipolygon)
地理位置 ”多边形“ 集合。一个多边形集合由多个多边形组成。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/geo/GeoMultiPolygon.html)
参数类型说明polygons`GeoPolygon[]`多边形集合
##### toJSON[​](DB.html#tojson-5)
格式化为 JSON 结构
```tsx
() => JSONMultiPolygon
```

##### toString[​](DB.html#tostring-5)
格式化为字符串
```tsx
() => string
```

#### JSONPoint[​](DB.html#jsonpoint)
地理位置 “点” 的 JSON 结构
参数类型说明type`"Point"`类型coordinates`[number, number]`坐标
#### JSONLineString[​](DB.html#jsonlinestring)
地理位置 ”线“ 的 JSON 结构
参数类型说明type`"LineString"`类型coordinates`[number, number][]`坐标
#### JSONPolygon[​](DB.html#jsonpolygon)
地理位置 ”多边形“ 的 JSON 结构
参数类型说明type`"Polygon"`类型coordinates`[number, number][][]`坐标
#### JSONMultiPoint[​](DB.html#jsonmultipoint)
地理位置的 ”点“ 集合的 JSON 结构
参数类型说明type`"MultiPoint"`类型coordinates`[number, number][]`坐标
#### JSONMultiLineString[​](DB.html#jsonmultilinestring)
地理位置 ”线“ 集合的 JSON 结构
参数类型说明type`"MultiLineString"`类型coordinates`[number, number][][]`坐标
#### JSONMultiPolygon[​](DB.html#jsonmultipolygon)
地理位置 ”多边形“ 集合的 JSON 结构
参数类型说明type`"MultiPolygon"`类型coordinates`[number, number][][][]`坐标
- 

- 
- 
- 
- 
- 
- 
-
