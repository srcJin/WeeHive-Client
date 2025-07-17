# WebAudioContext 实例，通过 [Taro.createWebAudioContext](createWebAudioContext.html) 接口获取该实例。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.html)
## 方法[​](WebAudioContext.html#方法)
参数类型说明state`string`当前 WebAudio 上下文的状态。

可能的值如下：suspended（暂停）、running（正在运行）、closed（已关闭）。
需要注意的是，不要在 audioContext close 后再访问 state 属性onstatechange`() => void`可写属性，开发者可以对该属性设置一个监听函数，当 WebAudio 状态改变的时候，会触发开发者设置的监听函数。currentTime`number`获取当前上下文的时间戳。destination`WebAudioContextNode`当前上下文的最终目标节点，一般是音频渲染设备。listener`AudioListener`空间音频监听器。sampleRate`number`采样率，通常在 8000-96000 之间，通常 44100hz 的采样率最为常见。
### close[​](WebAudioContext.html#close)
关闭WebAudioContext
**注意事项** 同步关闭对应的 WebAudio 上下文。close 后会立即释放当前上下文的资源，**不要在 close 后再次访问 state 属性**。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.close.html)
```tsx
() => Promise<void>
```

#### 示例代码[​](WebAudioContext.html#示例代码)
```tsx
const audioCtx = Taro.createWebAudioContext()
audioCtx.close().then(() => {
 console.log(audioCtx.state) // bad case：不应该在close后再访问state
})
```

### resume[​](WebAudioContext.html#resume)
同步恢复已经被暂停的 WebAudioContext 上下文
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.resume.html)
```tsx
() => Promise<void>
```

### suspend[​](WebAudioContext.html#suspend)
同步暂停 WebAudioContext 上下文
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.suspend.html)
```tsx
() => Promise<void>
```

### createIIRFilter[​](WebAudioContext.html#createiirfilter)
创建一个 IIRFilterNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createIIRFilter.html)
```tsx
(feedforward: number[], feedback: number[]) => IIRFilterNode
```
参数类型说明feedforward`number[]`一个浮点值数组，指定IIR滤波器传递函数的前馈(分子)系数。feedback`number[]`一个浮点值数组，指定IIR滤波器传递函数的反馈(分母)系数。
#### 示例代码[​](WebAudioContext.html#示例代码-1)
```tsx
let lowPassCoefs = [
 {
 frequency: 200,
 feedforward: [0.00020298, 0.0004059599, 0.00020298],
 feedback: [1.0126964558, -1.9991880801, 0.9873035442]
 },
 {
 frequency: 500,
 feedforward: [0.0012681742, 0.0025363483, 0.0012681742],
 feedback: [1.0317185917, -1.9949273033, 0.9682814083]
 },
 {
 frequency: 1000,
 feedforward: [0.0050662636, 0.0101325272, 0.0050662636],
 feedback: [1.0632762845, -1.9797349456, 0.9367237155]
 },
 {
 frequency: 5000,
 feedforward: [0.1215955842, 0.2431911684, 0.1215955842],
 feedback: [1.2912769759, -1.5136176632, 0.7087230241]
 }
]

const feedForward = lowPassCoefs[filterNumber].feedforward
const feedBack = lowPassCoefs[filterNumber].feedback
const iirFilter = audioContext.createIIRFilter(feedForward, feedBack)
```

### createWaveShaper[​](WebAudioContext.html#createwaveshaper)
创建一个 WaveShaperNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createWaveShaper.html)
```tsx
() => WaveShaperNode
```

### createConstantSource[​](WebAudioContext.html#createconstantsource)
创建一个 ConstantSourceNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createConstantSource.html)
```tsx
() => ConstantSourceNode
```

### createOscillator[​](WebAudioContext.html#createoscillator)
创建一个 OscillatorNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createOscillator.html)
```tsx
() => OscillatorNode
```

### createGain[​](WebAudioContext.html#creategain)
创建一个 GainNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createGain.html)
```tsx
() => GainNode
```

### createPeriodicWave[​](WebAudioContext.html#createperiodicwave)
创建一个 PeriodicWaveNode
**注意**`real` 和 `imag` 数组必须拥有一样的长度，否则抛出错误
```tsx
const real = new Float32Array(2)
const imag = new Float32Array(2)
real[0] = 0
imag[0] = 0
real[1] = 1
imag[1] = 0

const waveNode = audioContext.createPeriodicWave(real, imag, {disableNormalization: true})
```

支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createPeriodicWave.html)
```tsx
(real: Float32Array, imag: Float32Array, constraints: Constraints) => PeriodicWave
```
参数类型说明real`Float32Array`一组余弦项(传统上是A项)imag`Float32Array`一组余弦项(传统上是A项)constraints`Constraints`一个字典对象，它指定是否应该禁用规范化(默认启用规范化)
### createBiquadFilter[​](WebAudioContext.html#createbiquadfilter)
创建一个BiquadFilterNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createBiquadFilter.html)
```tsx
() => BiquadFilterNode
```

### createBufferSource[​](WebAudioContext.html#createbuffersource)
创建一个 BufferSourceNode 实例，通过 AudioBuffer 对象来播放音频数据。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createBufferSource.html)
```tsx
() => AudioBufferSourceNode
```

### createChannelMerger[​](WebAudioContext.html#createchannelmerger)
创建一个ChannelMergerNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createChannelMerger.html)
```tsx
(numberOfInputs: number) => ChannelMergerNode
```
参数类型说明numberOfInputs`number`输出流中需要保持的输入流的个数
### createChannelSplitter[​](WebAudioContext.html#createchannelsplitter)
创建一个ChannelSplitterNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createChannelSplitter.html)
```tsx
(numberOfOutputs: number) => ChannelSplitterNode
```
参数类型说明numberOfOutputs`number`要分别输出的输入音频流中的通道数
### createDelay[​](WebAudioContext.html#createdelay)
创建一个DelayNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createDelay.html)
```tsx
(maxDelayTime: number) => DelayNode
```
参数类型说明maxDelayTime`number`最大延迟时间
#### 示例代码[​](WebAudioContext.html#示例代码-2)
```tsx
let audioCtx = Taro.createWebAudioContext()
const delayNode = audioCtx.createDelay(5)
```

### createDynamicsCompressor[​](WebAudioContext.html#createdynamicscompressor)
创建一个DynamicsCompressorNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createDynamicsCompressor.html)
```tsx
() => DynamicsCompressorNode
```

#### 示例代码[​](WebAudioContext.html#示例代码-3)
```tsx
let audioCtx = Taro.createWebAudioContext()
let compressor = audioCtx.createDynamicsCompressor()

compressor.threshold.value = -50
compressor.knee.value = 40
compressor.ratio.value = 12
compressor.attack.value = 0
compressor.release.value = 0.25
```

### createScriptProcessor[​](WebAudioContext.html#createscriptprocessor)
创建一个ScriptProcessorNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createScriptProcessor.html)
```tsx
(bufferSize: number, numberOfInputChannels: number, numberOfOutputChannels: number) => ScriptProcessorNode
```
参数类型说明bufferSize`number`缓冲区大小，以样本帧为单位numberOfInputChannels`number`用于指定输入 node 的声道的数量numberOfOutputChannels`number`用于指定输出 node 的声道的数量
#### 示例代码[​](WebAudioContext.html#示例代码-4)
```tsx
let audioCtx = Taro.createWebAudioContext()
const sampleSize = 4096
audioContext.createScriptProcessor(sampleSize, 1, 1)
```

### createPanner[​](WebAudioContext.html#createpanner)
创建一个PannerNode
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createPanner.html)
```tsx
() => PannerNode
```

### createBuffer[​](WebAudioContext.html#createbuffer)
创建一个AudioBuffer，代表着一段驻留在内存中的短音频
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createBuffer.html)
```tsx
(numOfChannels: number, length: number, sampleRate: number) => AudioBuffer
```
参数类型说明numOfChannels`number`定义了 buffer 中包含的声频通道数量的整数length`number`代表 buffer 中的样本帧数的整数sampleRate`number`线性音频样本的采样率，即每一秒包含的关键帧的个数
#### 示例代码[​](WebAudioContext.html#示例代码-5)
```tsx
const audioCtx = Taro.createWebAudioContext()
const channels = 2, frameCount = audioCtx.sampleRate * 2.0
const myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate)
```

### decodeAudioData[​](WebAudioContext.html#decodeaudiodata)
异步解码一段资源为AudioBuffer。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.decodeAudioData.html)
```tsx
() => AudioBuffer
```

#### 示例代码[​](WebAudioContext.html#示例代码-6)
```tsx
Taro.request({
 url: url, // 音频 url
 responseType: 'arraybuffer',
 success: res => {
 audioCtx.decodeAudioData(res.data, buffer => {
 console.log(buffer)
 }, err => {
 console.error('decodeAudioData fail', err)
 })
 }
})
```

## 参数[​](WebAudioContext.html#参数)
### createPeriodicWave[​](WebAudioContext.html#createperiodicwave-1)
#### Constraints[​](WebAudioContext.html#constraints)
字典对象
参数类型默认值必填说明disableNormalization`boolean``false`否如果指定为 true 则禁用标准化
## 示例代码[​](WebAudioContext.html#示例代码-7)
监听状态
```tsx
const audioCtx = Taro.createWebAudioContext()
audioCtx.onstatechange = () => {
 console.log(ctx.state)
}
setTimeout(audioCtx.suspend, 1000)
setTimeout(audioCtx.resume, 2000)
```

## API 支持度[​](WebAudioContext.html#api-支持度)
API微信小程序H5React NativeHarmonyWebAudioContext✔️WebAudioContext.close✔️WebAudioContext.resume✔️WebAudioContext.suspend✔️WebAudioContext.createIIRFilter✔️WebAudioContext.createWaveShaper✔️WebAudioContext.createConstantSource✔️WebAudioContext.createOscillator✔️WebAudioContext.createGain✔️WebAudioContext.createPeriodicWave✔️WebAudioContext.createBiquadFilter✔️WebAudioContext.createBufferSource✔️WebAudioContext.createChannelMerger✔️WebAudioContext.createChannelSplitter✔️WebAudioContext.createDelay✔️WebAudioContext.createDynamicsCompressor✔️WebAudioContext.createScriptProcessor✔️WebAudioContext.createPanner✔️WebAudioContext.createBuffer✔️WebAudioContext.decodeAudioData✔️
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
