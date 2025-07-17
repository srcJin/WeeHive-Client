# ## 方法[​](InferenceSession.html#方法)
### destroy[​](InferenceSession.html#destroy)
销毁 InferenceSession 实例
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.destroy.html)
```tsx
() => void
```

### offError[​](InferenceSession.html#offerror)
取消监听模型加载失败事件. 传入指定回调函数则只取消指定回调，不传则取消所有回调
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.offError.html)
```tsx
(callback?: OnErrorCallback) => void
```
参数类型callback`OnErrorCallback`
### offLoad[​](InferenceSession.html#offload)
取消监听模型加载完成事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.offLoad.html)
```tsx
(callback?: OnLoadCallback) => void
```
参数类型callback`OnLoadCallback`
### onError[​](InferenceSession.html#onerror)
监听模型加载失败事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.onError.html)
```tsx
(callback: OnErrorCallback) => void
```
参数类型callback`OnErrorCallback`
### onLoad[​](InferenceSession.html#onload)
监听模型加载完成事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.onLoad.html)
```tsx
(callback: OnLoadCallback) => void
```
参数类型callback`OnLoadCallback`
### run[​](InferenceSession.html#run)
运行推断 需要在 session.onLoad 回调后使用。接口参数为 Tensors 对象，返回 Promise。 一个 InferenceSession 被创建完成后可以重复多次调用 InferenceSession.run(), 直到调用 session.destroy() 进行销毁。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.destroy.html)
```tsx
(option: Tensors) => Promise<Tensors>
```
参数类型option`Tensors`
## 参数[​](InferenceSession.html#参数)
### Type[​](InferenceSession.html#type)
### Tensor[​](InferenceSession.html#tensor)
参数类型说明shape`number[]`Tensor shape （Tensor 形状，例如 [1, 3, 224, 224] 即表示一个4唯Tensor，每个维度的长度分别为1, 3, 224, 224）data`ArrayBuffer`Tensor 值，一段 ArrayBuffertype`keyof Type`ArrayBuffer 值的类型，合法值有 uint8, int8, uint32, int32, float32
### Tensors[​](InferenceSession.html#tensors)
参数类型__index`__index`
### OnErrorCallback[​](InferenceSession.html#onerrorcallback)
模型加载失败回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnLoadCallback[​](InferenceSession.html#onloadcallback)
模型加载完成回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
## API 支持度[​](InferenceSession.html#api-支持度)
API微信小程序H5React NativeHarmonyInferenceSession.destroy✔️InferenceSession.offError✔️InferenceSession.offLoad✔️InferenceSession.onError✔️InferenceSession.onLoad✔️InferenceSession.run✔️
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
