# ## 方法[​](CacheManager.html#方法)
参数类型说明mode`keyof Mode`当前缓存模式origin`string`全局 originmaxAge`number`全局缓存有效时间state`keyof State`当前缓存管理器状态
### addRule[​](CacheManager.html#addrule)
添加规则
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.addRule.html)
```tsx
(option: AddRuleOption) => string
```
参数类型option`AddRuleOption`
#### 示例代码[​](CacheManager.html#示例代码)
```tsx
const ruleId = cacheManager.addRule({
 id: 'haha-rule',
 method: 'GET',
 url: '/haha',
 maxAge: 123455,
 dataSchema: [
 // data 字段的匹配，默认为空，表示不匹配
 // 类型可以是：string、number、boolean、null、object、any（表示任意类型均可），以及这些类型的数组表示方式
 {name: 'aaa', schema: {type: 'string'}}, // 类型为 string
 {name: 'bbb', schema: [{type: 'number'}, {type: 'string'}]}, // 类型为 number, string
 {name: 'ccc', schema: {type: 'string', value: 'abc'}}, // 值为 abc
 {name: 'ddd', schema: {type: 'string', value: /(abc|cba)/ig}}, // 值符合该正则匹配，如果该值不是字符串类型，则会被尝试转成字符串后再进行比较
 {name: 'ddd', schema: {type: 'string', value: val => val === '123'}}, // 传入函数来校验值
 {name: 'eee', schema: {type: 'object', value: [{ // 类型为对象，则通过嵌套的方式来逐层校验
 name: 'aaa', schema: {type: 'string'},
 // ...
 // 嵌套 dataSchema，同上面的方式一样来匹配嵌套的对象
 }]}},
 {name: 'fff', schema: {type: 'string[]'}}, // 类型为 string 数组
 {name: 'ggg', schema: {type: 'any'}}, // 类型为任意类型
 {name: 'hhh', schema: {type: 'any[]'}}, // 类型为任意类型的数组
 ]
})
```

### addRules[​](CacheManager.html#addrules)
批量添加规则
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.addRules.html)
```tsx
(option: AddRulesOption) => string[]
```
参数类型option`AddRulesOption`
### clearCaches[​](CacheManager.html#clearcaches)
清空所有缓存
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.clearCaches.html)
```tsx
() => void
```

### clearRules[​](CacheManager.html#clearrules)
清空所有规则，同时会删除对应规则下所有缓存
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.clearRules.html)
```tsx
() => void
```

### deleteCache[​](CacheManager.html#deletecache)
删除缓存
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteCache.html)
```tsx
(id: string) => void
```
参数类型说明id`string`缓存 id
### deleteCaches[​](CacheManager.html#deletecaches)
批量删除缓存
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteCaches.html)
```tsx
(ids: string[]) => void
```
参数类型说明ids`string[]`缓存 id 列表
### deleteRule[​](CacheManager.html#deleterule)
删除规则，同时会删除对应规则下所有缓存
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteRule.html)
```tsx
(id: string) => void
```
参数类型说明id`string`规则 id
### deleteRules[​](CacheManager.html#deleterules)
批量删除规则，同时会删除对应规则下所有缓存
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteRules.html)
```tsx
(ids: string[]) => void
```
参数类型说明ids`string[]`规则 id 列表
### match[​](CacheManager.html#match)
匹配命中的缓存规则，一般需要和 request 事件搭配使用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.match.html)
```tsx
(option: MatchOption) => MatchResult
```
参数类型option`MatchOption`
### off[​](CacheManager.html#off)
取消事件监听
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.off.html)
```tsx
(eventName: string, handler: TaroGeneral.EventCallback) => void
```
参数类型说明eventName`string`事件名称handler`TaroGeneral.EventCallback`事件监听函数
### on[​](CacheManager.html#on)
监听事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.on.html)
```tsx
(eventName: keyof OnEventName, handler: TaroGeneral.EventCallback) => void
```
参数类型说明eventName`keyof OnEventName`事件名称handler`TaroGeneral.EventCallback`事件监听函数
### start[​](CacheManager.html#start)
开启缓存，仅在 mode 为 none 时生效，调用后缓存管理器的 state 会置为 1
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.start.html)
```tsx
() => void
```

### stop[​](CacheManager.html#stop)
关闭缓存，仅在 mode 为 none 时生效，调用后缓存管理器的 state 会置为 0
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.stop.html)
```tsx
() => void
```

## 参数[​](CacheManager.html#参数)
### Mode[​](CacheManager.html#mode)
参数说明weakNetwork默认值，弱网/离线使用缓存返回always总是使用缓存返回none不开启，后续可手动开启/停止使用缓存返回
### State[​](CacheManager.html#state)
参数说明0不使用缓存返回1使用缓存返回2未知
### DataSchema[​](CacheManager.html#dataschema)
参数类型必填说明type`string`是需要匹配的 data 对象的参数类型
string、number、boolean、null、object、any（表示任意类型），
同时支持数组模式（数组模式则在类型后面加 []，如 string[] 表示字符串数组）valuestring or Function or RegExp or DataRule[]否需要匹配的 data 对象的参数值
当 type 为基本类型时，可以用 string/regexp 来匹配固定的值，
也可以通过 function 来确定值是否匹配，
如果传入的 type 是 object，那么表示需要嵌套匹配值是否正确，可以传入 Array
### DataRule[​](CacheManager.html#datarule)
参数类型说明name`string`需要匹配的参数名schemaDataSchema or DataSchema[]
### RuleObject[​](CacheManager.html#ruleobject)
参数类型默认值说明id`string`规则 id，如果不填则会由基础库生成method`string`请求方法，可选值 GET/POST/PATCH/PUT/DELETE，如果为空则表示前面提到的所有方法都能被匹配到url`any`uri 匹配规则，可参考规则字符串写法和正则写法maxAge`number``7 * 24 * 60 * 60 * 1000`缓存有效时间，单位为 ms，不填则默认取缓存管理器全局的缓存有效时间dataSchema`DataRule[]`匹配请求参数
### Rule[​](CacheManager.html#rule)
### AddRuleOption[​](CacheManager.html#addruleoption)
参数类型说明rule`Rule`规则
### AddRulesOption[​](CacheManager.html#addrulesoption)
参数类型说明rules`Rule[]`规则列表
### MatchOption[​](CacheManager.html#matchoption)
参数说明evtrequest 事件对象
### MatchResult[​](CacheManager.html#matchresult)
参数类型说明ruleId`string`命中的规则idcacheId`string`缓存iddata`any`缓存内容，会带有 fromCache 标记，方便开发者区分内容是否来自缓存createTime`number`缓存创建时间maxAge`number`缓存有效时间
### OnEventName[​](CacheManager.html#oneventname)
参数说明request发生 wx.request 请求，只在缓存管理器开启阶段会触发enterWeakNetwork进入弱网/离线状态exitWeakNetwork离开弱网/离线状态
## API 支持度[​](CacheManager.html#api-支持度)
API微信小程序H5React NativeHarmonyCacheManager.addRule✔️CacheManager.addRules✔️CacheManager.clearCaches✔️CacheManager.clearRules✔️CacheManager.deleteCache✔️CacheManager.deleteCaches✔️CacheManager.deleteRule✔️CacheManager.deleteRules✔️CacheManager.match✔️CacheManager.off✔️CacheManager.on✔️CacheManager.start✔️CacheManager.stop✔️
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
