# 创建 AI 推理 Session
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/wx.createInferenceSession.html)
## 类型[​](createInferenceSession.html#类型)
```tsx
(option: Option) => InferenceSession
```

## 参数[​](createInferenceSession.html#参数)
参数类型option`Option`
### Option[​](createInferenceSession.html#option)
参数类型必填说明model`string`是模型文件路径，目前只执行后缀为.onnx格式(支持代码包路径，和本地文件系统路径）precesionLevel`PrecesionLevel`否推理精度，有效值为 0 - 4。
一般来说，使用的precesionLevel等级越低，推理速度越快，但可能会损失精度。
推荐开发者在开发时，在效果满足需求时优先使用更低精度以提高推理速度，节约能耗。allowQuantize`boolean`否是否生成量化模型推理allowNPU`boolean`否是否使用NPU推理，仅对IOS有效typicalShape`boolean`否输入典型分辨率
### PrecesionLevel[​](createInferenceSession.html#precesionlevel)
参数说明0使用fp16 存储浮点，fp16计算，Winograd 算法也采取fp16 计算，开启近似math计算1使用fp16 存储浮点，fp16计算，禁用 Winograd 算法，开启近似math计算2使用fp16 存储浮点，fp32计算，开启 Winograd，开启近似math计算3使用fp32 存储浮点，fp32计算，开启 Winograd，开启近似math计算4使用fp32 存储浮点，fp32计算，开启 Winograd，关闭近似math计算
- 
- 

- 
-
