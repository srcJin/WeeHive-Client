> 请注意：本章节所有内容只在小程序端起效果。

Taro 可以直接通过 `Element#innerHTML` 或 Vue 的 `v-html` 或 React/Nerv 的 `dangerouslySetInnerHTML` 直接渲染 HTML:

- React
- Vue
```jsx
function helloWorld() {
 const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`

 return <View dangerouslySetInnerHTML={{ __html: html }}></View>
}
html
<template>
 <view v-html="html"></view>
</template>

<script>
 export default {
 data() {
 return {
 html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`,
 }
 },
 }
</script>
```

## 自定义 HTML 样式[​](html.html#自定义-html-样式)
直接设置 HTML 不会让 HTML 标签带上浏览器的默认样式，Taro 提供两种内置样式我们可以直接引入生效：

- `@tarojs/taro/html.css`: [W3C HTML4 的内置样式](https://www.w3.org/TR/CSS2/sample.html)，只有 HTML4 标签样式，体积较小，兼容性强，能适应大多数情况。
- `@tarojs/taro/html5.css`: [Chrome(Blink) HTML5 的内置样式](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css)，内置样式丰富，包括了大多数 HTML5 标签，体积较大，不一定支持所有小程序容器。
为了让内置的标签样式起作用，我们还需要将 HTML 容器的 CSS 类设置为 `.taro_html`:

- React
- Vue
```jsx
if (process.env.TARO_ENV !== 'h5') {
 require('@tarojs/taro/html.css')
}

function helloWorld() {
 const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`

 return <View className="taro_html" dangerouslySetInnerHTML={{ __html: html }}></View>
}
html
<template>
 <view v-html="html" class="taro_html"></view>
</template>

<script>
 if (process.env.TARO_ENV !== 'h5') {
 require('@tarojs/taro/html.css')
 }

 export default {
 data() {
 return {
 html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`,
 }
 },
 }
</script>
```

同样地，我们也可以自己编写 CSS 样式，Taro 最终渲染的 HTML 标签的类名都和 HTML 标签名保持一致，例如我们的容器 CSS 类名为 `my_css`，想要设置 `h1` 标签的样式，那就这样这样做：
```css
.my_css .h1 {
 font-size: 30px;
}
```

你可能会倾向于其他浏览器的默认样式：

- [Firefox](https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css)
- [Internet Explorer](https://web.archive.org/web/20170122223926/https://www.iecss.com/)
- [Safari/Chrome(Webkit)](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)
- [Opera](https://web.archive.org/web/20161031005401/https://www.iecss.com/opera-10.51.css)
- [W3C HTML5 Spec](https://www.w3.org/TR/html5/rendering.html)
- [normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)
## HTML 转义[​](html.html#html-转义)
由于进行 HTML 转义需要消耗较多的性能和较大的体积，默认而言 Taro 的 HTML 接口只接受转义后的 HTML 字符串，我们推荐直接在服务端返回转义后的 HTML。如果确实需要在客户端转义，开源社区有两个较好的选择：

- [he](https://www.npmjs.com/package/he): 体积较大，但开源协议更为宽松
- [entities](https://www.npmjs.com/package/entities): 体积较小，但开源协议更为严格
你可能会需要[高级选项](html.html#%E9%AB%98%E7%BA%A7%E9%80%89%E9%A1%B9)的 `transformText` 配合 HTML 转义进行字符串渲染。
## 绑定事件[​](html.html#绑定事件)
出于作用域和安全因素考虑，Taro 会把 HTML 字符串中的事件和 JavaScript 全部清除。但我们仍然有办法给 HTML 绑定事件：

- React
- Vue
```jsx
import '@tarojs/taro/html.css'

function helloWorld() {
 const html = `<h1 id="test">Wallace is way taller than other reporters.</h1>`

 useEffect(() => {
 const el = document.getElementById('test')
 function testOnTap (event) {
 // do something
 ...
 }
 el.addEventListener('tap', testOnTap)

 return () => {
 el.removeEventListener('tap', testOnTap)
 }
 }, [])

 return <View className="taro_html" dangerouslySetInnerHTML={{ __html: html }}></View>
}
html
<template>
 <view v-html="html" class="taro_html"></view>
</template>

<script>
 import '@tarojs/taro/html.css'

 export default {
 data () {
 return {
 html: `<h1 id="test">Wallace is way taller than other reporters.</h1>`
 }
 },
 mounted () {
 const el = document.getElementById('test')
 el.addEventListener('tap', this.testOnTap)
 },
 testOnTap (event) {
 // do something
 ...
 },
 beforeDestroy () {
 const el = document.getElementById('test')
 el.removeEventListener('tap', this.testOnTap)
 }
 }
</script>
```

如果需要动态绑定事件的元素没有 ID 的话，你可能需要使用[高级选项](html.html#%E9%AB%98%E7%BA%A7%E9%80%89%E9%A1%B9)的 `transformElement`。
## 高级选项[​](html.html#高级选项)
如果内置的功能无法满足需求或渲染结果不如预期，Taro 还提供了 HTML 渲染的高级选项，高级选项可以通过 `Taro.options.html` 访问：
```js
import Taro from '@tarojs/taro'

// 不解析 souce 标签中的内容
Taro.options.html.skipElements.add('source')
```

### skipElements[​](html.html#skipelements)
类型：`Set<string>`
默认值：`new Set(['style', 'script'])`
HashSet 中包含的 HTML 标签将不会被解析。
### voidElements[​](html.html#voidelements)
类型：`Set<string>`
默认值：`new Set([ '!doctype', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr' ])`
HashSet 中包含的 HTML 标签不需要闭合标签，例如 `<img />`。
### closingElements[​](html.html#closingelements)
类型：`Set<string>`
默认值：`new Set([ 'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option', 'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup' ])`
HashSet 中包含的 HTML 标签可以自动闭合，且不能被嵌套。
### transformText[​](html.html#transformtext)
类型：`(taroText: TaroText, text: Text) => TaroText`
默认值：`void`
该函数第一个参数的值为 Taro 默认处理好的 [TaroText](https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/text.ts#L5)，第二个参数是 HTML 解析器解析好的 [Text](https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L33-L36)，最后返回的 `TaroText` 对象参与 HTML 中的字符串渲染。
### transformElement[​](html.html#transformelement)
类型：`(taroElement: TaroElement, element: Element) => TaroElement`
默认值：`void`
该函数第一个参数的值为 Taro 默认处理好的 [TaroElement](https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/element.ts#L15)，第二个参数是 HTML 解析器解析好的 [Element](https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L38-L43)，最后返回的 `TaroElement` 对象参与 HTML 元素渲染。
代码示例
```js
// 给所有 img 标签添加 aotu 类
Taro.options.html.transformElement = (el) => {
 if (el.nodeName === 'image') {
 el.setAttribute('class', 'aotu')
 }
 return el
}
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
