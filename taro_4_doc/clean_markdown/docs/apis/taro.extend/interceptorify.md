# 包裹 promiseify api 的洋葱圈模型
支持情况：!!!!!!!!!!!
## 类型[​](interceptorify.html#类型)
```tsx
<T, R>(promiseifyApi: promiseifyApi<T, R>) => Interceptorify<T, R>
```

## 参数[​](interceptorify.html#参数)
### promiseifyApi[​](interceptorify.html#promiseifyapi)
```tsx
(requestParams: T) => Promise<R>
```
参数类型requestParams`T`
### InterceptorifyChain[​](interceptorify.html#interceptorifychain)
参数类型requestParams`T`proceed`promiseifyApi<T, R>`
### InterceptorifyInterceptor[​](interceptorify.html#interceptorifyinterceptor)
```tsx
(chain: InterceptorifyChain<T, R>) => Promise<R>
```
参数类型chain`InterceptorifyChain<T, R>`
### Interceptorify[​](interceptorify.html#interceptorify)
#### request[​](interceptorify.html#request)
```tsx
(requestParams: T) => Promise<R>
```
参数类型requestParams`T`
#### addInterceptor[​](interceptorify.html#addinterceptor)
```tsx
(interceptor: InterceptorifyInterceptor<T, R>) => void
```
参数类型interceptor`InterceptorifyInterceptor<T, R>`
#### cleanInterceptors[​](interceptorify.html#cleaninterceptors)
```tsx
() => void
```

## 示例代码[​](interceptorify.html#示例代码)
### 示例 1[​](interceptorify.html#示例-1)
```tsx
// 创建实例
const modalInterceptorify = interceptorify(taro.showModal)
// 添加拦截器
modalInterceptorify.addInterceptor(async function (chain) {
 const res = await chain.proceed({
 ...chain.requestParams,
 title: 'interceptor1'
 })
 return res
})
modalInterceptorify.addInterceptor(async function (chain) {
 const res = await chain.proceed({
 ...chain.requestParams,
 content: 'interceptor2'
 })
 return res
})
// 使用
modalInterceptorify.request({})
```

### 示例 2[​](interceptorify.html#示例-2)
```tsx
// 创建实例
const fetchDataInterceptorify = interceptorify(taro.request)
// 添加拦截器
fetchDataInterceptorify.addInterceptor(async function (chain) {
 taro.showLoading({
 title: 'Loading...'
 })
 const res = await chain.proceed(chain.requestParams)
 taro.hideLoading()
 return res
})
fetchDataInterceptorify.addInterceptor(async function (chain) {
 const params = chain.requestParams
 const res = await chain.proceed({
 url: 'http://httpbin.org' + params.url,
 })
 return res.data
})
// 使用
fetchDataInterceptorify.request({
 url: '/ip'
}).then((res) => {
 // log my ip
 console.log(res.origin)
})
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
