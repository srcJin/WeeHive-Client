# AudioBuffer 接口表示存在内存里的一段短小的音频资源，利用 [WebAudioContext.decodeAudioData](WebAudioContext.html#decodeaudiodata) 方法从一个音频文件构建，或者利用 [AudioContext.createBuffer](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/(AudioContext.createBuffer).html) 从原始数据构建。把音频放入 AudioBuffer 后，可以传入到一个 AudioBufferSourceNode 进行播放。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.html)
## 方法[​](AudioBuffer.html#方法)
参数类型说明sampleRate`number`存储在缓存区的PCM数据的采样率（单位为sample/s)length`number`返回存储在缓存区的PCM数据的采样帧率duration`number`返回存储在缓存区的PCM数据的时长（单位为秒）numberOfChannels`number`储存在缓存区的PCM数据的通道数
### getChannelData[​](AudioBuffer.html#getchanneldata)
返回一个 Float32Array，包含了带有频道的PCM数据，由频道参数定义（有0代表第一个频道）
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.getChannelData.html)
```tsx
(channel: number) => Float32Array
```
参数类型channel`number`
#### 示例代码[​](AudioBuffer.html#示例代码)
```tsx
const audioCtx = Taro.createWebAudioContext()
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
const nowBuffering = myArrayBuffer.getChannelData(channel);
```

### copyFromChannel[​](AudioBuffer.html#copyfromchannel)
从 AudioBuffer 的指定频道复制到数组终端。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.copyFromChannel.html)
```tsx
() => void
```

#### 示例代码[​](AudioBuffer.html#示例代码-1)
```tsx
const audioCtx = Taro.createWebAudioContext()
const audioBuffer = audioCtx.createFromAudioFile({
 filePath:'/pages/res/bgm.mp3', // 静态资源
 mixToMono:true,
 sampleRate:44100
});
const channels = audioBuffer.numberOfChannels
const anotherArray = new Float32Array(frameCount);
const rate = audioBuffer.sampleRate
const startOffSet = 0
const endOffset = rate * 3;
const newAudioBuffer = audioCtx.createBuffer(channels,endOffset - startOffset,rate)
const offset = 0

for (let channel = 0; channel < channels; channel++) {
 audioBuffer.copyFromChannel(anotherArray, channel, startOffset);
 newAudioBuffer.copyToChannel(anotherArray, channel, offset);
}
```

### copyToChannel[​](AudioBuffer.html#copytochannel)
从指定数组复制样本到 audioBuffer 的特定通道
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioBuffer.copyToChannel.html)
```tsx
(source: Float32Array, channelNumber: number, startInChannel: number) => void
```
参数类型说明source`Float32Array`需要复制的源数组channelNumber`number`需要复制到的目的通道号startInChannel`number`复制偏移数据量
## API 支持度[​](AudioBuffer.html#api-支持度)
API微信小程序H5React NativeHarmonyAudioBuffer✔️AudioBuffer.getChannelData✔️AudioBuffer.copyFromChannel✔️AudioBuffer.copyToChannel✔️
- 

- 
- 
- 

-
