# ## 类型说明[​](queries.html#类型说明)
TWaitforParams：
属性类型必须默认值说明containerHTMLElementwindow.document查询的 root 节点timeoutnumber1000失效时间intervalnumber50查询间隔mutationObserverOptionsMutationObserverInit{subtree: true, childList: true, attributes: true, characterData: true }监听器参数
## 按照选择器查询[​](queries.html#按照选择器查询)
### querySelector[​](queries.html#queryselector)
```typescript
function querySelector(selectors: string): HTMLElement
```

参数：
参数类型必须说明selectorsstring是选择器，同 docuemt.querySelector 一致
用法：
```js
const btns = testUtils.queries.querySelectorAll('.btns')
```

### querySelectorAll[​](queries.html#queryselectorall)
```typescript
function querySelectorAll(selectors: string): HTMLElement[]
```

参数：
参数类型必须说明selectorsstring是选择器，同 docuemt.querySelectorAll 一致
用法：
```js
const btns = testUtils.queries.querySelectorAll('.btns')
```

### waitForQuerySelector[​](queries.html#waitforqueryselector)
```typescript
async function waitForQuerySelector(selectors: string, params?: TParams): Promise<HTMLElement>
```

参数：
参数类型必须说明selectorsstring是选择器，同 docuemt.querySelector 一致paramsTWaitforParams参数：见 TWaitforParams 说明
用法：
```js
const btn = await testUtils.queries.waitForQuerySelector('.async-btn')
```

### waitForQuerySelectorAll[​](queries.html#waitforqueryselectorall)
```typescript
async function waitForQuerySelectorAll(selectors: string, params?: TParams): Promise<HTMLElement[]>
```

参数：
参数类型必须说明selectorsstring是选择器，同 docuemt.querySelectorAll 一致paramsTWaitforParams参数：见 TWaitforParams 说明
用法：
```js
const btns = await testUtils.queries.waitForQuerySelectorAll('.async-btns')
```

## 按照文本查询[​](queries.html#按照文本查询)
### queryByText[​](queries.html#querybytext)
```typescript
function queryByText(text: string, selector?: string): HTMLElement
```

参数：
参数类型必须说明textstring是文本内容，部分匹配即可selectorstring选择器，同 docuemt.querySelector 一致
用法：
```js
// <Text>Hello World!!!</Text>
const textView = testUtils.queries.queryByText('Hello World')
```

### queryByTextAll[​](queries.html#querybytextall)
```typescript
function queryAllByText(text: string, selector?: string): HTMLElement[]
```

参数：
参数类型必须说明textstring是文本内容，部分匹配即可selectorstring选择器，同 docuemt.querySelector 一致
用法：
```js
// <Text>Hello World!!</Text>
// <View>Hello World!!!</View>
const textViews = testUtils.queries.queryAllByText('Hello World')
```

### waitForQueryByText[​](queries.html#waitforquerybytext)
```typescript
async function waitForQueryByText(text: string, selector?: string, params?: TWaitforParams): HTMLElement
```

参数：
参数类型必须说明textstring是文本内容，部分匹配即可selectorstring选择器，同 docuemt.querySelector 一致paramsTWaitforParams参数：见 TWaitforParams 说明
用法：
```js
// <Text>Hello World!!!</Text>
const textView = async testUtils.queries.waitForQueryByText("Hello World");
```

### waitForQueryAllByText[​](queries.html#waitforqueryallbytext)
```typescript
async function waitForQueryAllByText(text: string, selector?: string, params?: TWaitforParams): HTMLElement[]
```

参数：
参数类型必须说明textstring是文本内容，部分匹配即可selectorstring选择器，同 docuemt.querySelector 一致paramsTWaitforParams参数：见 TWaitforParams 说明
用法：
```js
// <Text>Hello World!!</Text>
// <View>Hello World!!!</View>
const textViews = async testUtils.queries.waitForQueryAllByText("Hello World");
```

## 按照 Placeholder 查询[​](queries.html#按照-placeholder-查询)
### queryByPlaceholder[​](queries.html#querybyplaceholder)
```typescript
function queryByPlaceholder(text: string): HTMLElement
```

参数：
参数类型必须说明textstring是placeholder 内容
用法：
```js
// <input placeholder="hello" />
const input = testUtils.queries.queryByPlaceholder('hello')
```

### queryAllByPlaceholder[​](queries.html#queryallbyplaceholder)
```typescript
function queryAllByPlaceholder(text: string): HTMLElement[]
```

参数：
参数类型必须说明textstring是placeholder 内容
用法：
```js
// <input placeholder="hello" />
// <input placeholder="hello" />
const inputs = testUtils.queries.queryAllByPlaceholder('hello')
```

### waitForQueryByPlaceholder[​](queries.html#waitforquerybyplaceholder)
```typescript
async function waitForQueryByPlaceholder(text: string, params?: TParams): Promise<HTMLElement>
```

参数：
参数类型必须说明textstring是placeholder 内容paramsTWaitforParams参数：见 TWaitforParams 说明
用法：
```js
// <input placeholder="async-placeholde" />
const input = await testUtils.queries.waitForQueryByPlaceholder('async-placeholder')
```

### waitForQueryAllByPlaceholder[​](queries.html#waitforqueryallbyplaceholder)
```typescript
async function waitForQueryAllByPlaceholder(text: string, params?: TParams): Promise<HTMLElement[]>
```

参数：
参数类型必须说明textstring是placeholder 内容paramsTWaitforParams参数：见 TWaitforParams 说明
用法：
```js
// <input placeholder="async-placeholde" />
// <input placeholder="async-placeholde" />
const inputs = await testUtils.queries.waitForQueryAllByPlaceholder('async-placeholder')
```

## 按照属性查询[​](queries.html#按照属性查询)
### queryByAttribute[​](queries.html#querybyattribute)
```typescript
function queryByAttribute(attr: string, value: any): HTMLElement
```

参数：
参数类型必须说明attrstring是属性 keyvalueany是属性 value
用法：
```js
// <div key="value" />
const view = testUtils.queries.queryByAttribute('key', 'value')
```

### queryAllByAttribute[​](queries.html#queryallbyattribute)
```typescript
function queryAllByAttribute(attr: string, value: any): HTMLElement[]
```

参数：
参数类型必须说明attrstring是属性 keyvalueany是属性 value
用法：
```js
// <div key="value" />
// <div key="value" />
const view = testUtils.queries.queryAllByAttribute('key', 'value')
```

### waitForQueryByAttribute[​](queries.html#waitforquerybyattribute)
```typescript
async function waitForQueryByAttribute(attr: string, value: string, params?: TParams): Promise<HTMLElement>
```

参数：
参数类型必须说明attrstring是属性 keyvalueany是属性 valueparamsTWaitforParams参数：见 TWaitforParams 说明
用法：
```js
// <div key="value" />
const view = await testUtils.queries.waitForQueryByAttribute('key', 'value')
```

### waitForQueryAllByAttribute[​](queries.html#waitforqueryallbyattribute)
```typescript
async function waitForQueryAllByAttribute(attr: string, value: string, params?: TParams): Promise<HTMLElement[]>
```

参数：
参数类型必须说明attrstring是属性 keyvalueany是属性 valueparamsTWaitforParams参数：见 TWaitforParams 说明
用法：
```js
// <div key="value" />
// <div key="value" />
const inputs = await testUtils.queries.waitForQueryAllByAttribute('key', 'value')
```

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
