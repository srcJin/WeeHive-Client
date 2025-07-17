# 信息
本文档列出了 Harmony 平台支持的 CSS 属性及其可选值
## 选择器[​](c-api-css.html#选择器)
### 基本选择器[​](c-api-css.html#基本选择器)
选择器示例说明类选择器`.class`选择所有具有指定 class 的元素后代选择器`.parent .child`选择指定元素内的所有后代元素直接后代选择器`.parent > .child`选择指定元素的直接子元素多类选择器`.class1.class2`选择同时具有多个 class 的元素
### 伪元素[​](c-api-css.html#伪元素)
选择器示例说明:before`.element:before`在元素内容前插入内容:after`.element:after`在元素内容后插入内容
### 伪类[​](c-api-css.html#伪类)
选择器示例说明:nth-child`.parent :nth-child(2)`选择父元素的第 n 个子元素:first-child`.parent :first-child`选择父元素的第一个子元素:last-child`.parent :last-child`选择父元素的最后一个子元素:empty`.element:empty`选择没有子元素的元素
### 使用示例[​](c-api-css.html#使用示例)
```css
/* 类选择器 */
.class {
 color: red;
}

/* 后代选择器 */
.parent .child {
 margin: 10px;
}

/* 直接后代选择器 */
.parent > .child {
 padding: 5px;
}

/* 多类选择器 */
.class1.class2 {
 background-color: blue;
}

/* 伪元素 */
.element:before {
 content: '前缀';
}

.element:after {
 content: '后缀';
}

/* 伪类 */
.parent :nth-child(2) {
 font-weight: bold;
}

.parent :first-child {
 color: green;
}

.parent :last-child {
 color: blue;
}

.element:empty {
 display: none;
}
```
危险
暂不支持 CSS 属性继承，所有属性都需要显式设置
## 布局属性[​](c-api-css.html#布局属性)
### Flex 布局[​](c-api-css.html#flex-布局)
属性默认值可选值说明display'flex''flex', 'none', 'block', 'box'设置元素的显示类型，不支持 inline-blockflex-wrap'nowrap''nowrap', 'wrap', 'wrap-reverse'设置 flex 元素是否换行flex-direction'row''row', 'row-reverse', 'column', 'column-reverse'设置 flex 元素的主轴方向align-items'flex-start''flex-start', 'flex-end', 'center', 'baseline', 'stretch'设置 flex 元素在交叉轴上的对齐方式align-content'flex-start''flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'设置多行 flex 元素在交叉轴上的对齐方式justify-content'flex-start''flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'设置 flex 元素在主轴上的对齐方式flex'0 1 auto'flexGrow, flexShrink, flexBasis设置 flex 元素的伸缩性flex-grow0Number设置 flex 元素的放大比例flex-shrink1Number设置 flex 元素的缩小比例flex-basis'auto'Length设置 flex 元素在主轴上的初始大小align-self'auto''flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'auto'设置单个 flex 元素在交叉轴上的对齐方式
### 定位[​](c-api-css.html#定位)
属性默认值可选值说明position'relative''relative', 'absolute', 'fixed'设置元素的定位方式top'auto'Length设置元素的上边距bottom'auto'Length设置元素的下边距left'auto'Length设置元素的左边距right'auto'Length设置元素的右边距z-index'auto'Number设置元素的堆叠顺序，注意：z-index 仅在相同层级元素之间生效，跨层级元素之间的堆叠顺序不受影响
### 盒模型[​](c-api-css.html#盒模型)
信息
盒模型默认使用 `box-sizing: border-box`，即元素的宽度和高度包含内边距和边框
属性默认值可选值说明margin0Length（可设置 1~4 个值）设置元素的外边距margin-left0Length设置元素的左外边距margin-right0Length设置元素的右外边距margin-top0Length设置元素的上外边距margin-bottom0Length设置元素的下外边距padding0Length（可设置 1~4 个值）设置元素的内边距padding-left0Length设置元素的左内边距padding-right0Length设置元素的右内边距padding-top0Length设置元素的上内边距padding-bottom0Length设置元素的下内边距width'auto'Length设置元素的宽度min-width'auto'Length设置元素的最小宽度max-width'none'Length设置元素的最大宽度height'auto'Length设置元素的高度min-height'auto'Length设置元素的最小高度max-height'none'Length设置元素的最大高度
### 边框[​](c-api-css.html#边框)
属性默认值可选值说明border'0'Length（可设置 1~4 个值）设置元素的边框border-width'0'Length设置元素的边框宽度border-left-width'0'Length设置元素的左边框宽度border-right-width'0'Length设置元素的右边框宽度border-top-width'0'Length设置元素的上边框宽度border-bottom-width'0'Length设置元素的下边框宽度border-color'black'Color（可设置 1~4 个值）设置元素的边框颜色border-left-color'black'Color设置元素的左边框颜色border-right-color'black'Color设置元素的右边框颜色border-top-color'black'Color设置元素的上边框颜色border-bottom-color'black'Color设置元素的下边框颜色border-style'solid''dotted', 'dashed', 'solid'（可设置 1~4 个值）设置元素的边框样式border-left-style'solid''dotted', 'dashed', 'solid'设置元素的左边框样式border-right-style'solid''dotted', 'dashed', 'solid'设置元素的右边框样式border-top-style'solid''dotted', 'dashed', 'solid'设置元素的上边框样式border-bottom-style'solid''dotted', 'dashed', 'solid'设置元素的下边框样式border-radius'0'Length（可设置 1~4 个值）设置元素的边框圆角border-top-left-radius'0'Length设置元素的左上角圆角border-top-right-radius'0'Length设置元素的右上角圆角border-bottom-left-radius'0'Length设置元素的左下角圆角border-bottom-right-radius'0'Length设置元素的右下角圆角
## 文本属性[​](c-api-css.html#文本属性)
属性默认值可选值说明color'black'Color设置文本颜色，不会继承font-size'14vp'Length设置字体大小，不会继承text-align'left''center', 'left', 'right'设置文本对齐方式，不会继承font-weight'normal'100~900, 'bold', 'bolder', 'lighter', 'normal'设置字体粗细，不会继承vertical-align'baseline''middle', 'top', 'bottom'设置垂直对齐方式，不会继承letter-spacing'normal'Length设置字符间距，不会继承text-overflow'clip''ellipsis', 'clip'设置文本溢出时的处理方式，不会继承-webkit-line-clamp'none'Number设置文本显示的行数，不会继承word-break'normal''break-all', 'keep-all', 'normal'设置文本换行方式，不会继承text-decoration'none'-设置文本装饰，不会继承text-decoration-color'currentColor'Color设置文本装饰颜色，不会继承text-decoration-style'solid''dotted', 'dashed', 'solid'设置文本装饰样式，不会继承text-decoration-line'none''line-through', 'underline', 'overline', 'none'设置文本装饰线，不会继承white-space'normal''nowrap', 'normal'设置空白处理方式，不会继承
## 背景属性[​](c-api-css.html#背景属性)
属性默认值可选值说明background设置背景，内联样式暂不支持颜色名称（如 red、blue 等）background-color'transparent'Color设置背景颜色background-image'none''src(xxx)', 'linear-gradient(xxx)', 'radial-gradient(xxx)'设置背景图片或渐变background-size'auto''cover', 'contain', Length(x y), Length(x) Length(y)设置背景图片大小background-repeat'repeat''repeat', 'no-repeat', 'repeat-x', 'repeat-y'设置背景图片重复方式background-position'0% 0%''center', 'top', 'bottom', 'left', 'right', Length(x y), Length(x) Length(y)设置背景图片位置background-position-x'0%''center', 'top', 'bottom', 'left', 'right', Length(x y), Length(x) Length(y)设置背景图片水平位置background-position-y'0%''center', 'top', 'bottom', 'left', 'right', Length(x y), Length(x) Length(y)设置背景图片垂直位置
## 变换和动画[​](c-api-css.html#变换和动画)
### 变换[​](c-api-css.html#变换)
属性默认值可选值说明transform'none''translate', 'translateX', 'translateY', 'translateZ', 'translate2d', 'translate3d', 'scale', 'scaleX', 'scaleY', 'scale3d', 'rotate', 'rotateX', 'rotateY', 'rotate3d'设置元素的变换效果
### 动画[​](c-api-css.html#动画)
属性默认值可选值说明animation设置动画，暂不支持内联样式animation-name'none'String设置动画名称，暂不支持内联样式animation-duration'0s'Number设置动画持续时间，暂不支持内联样式animation-delay'0s'Number设置动画延迟时间，暂不支持内联样式animation-fill-mode'none''none', 'forwards', 'backwards', 'both'设置动画填充模式，暂不支持内联样式animation-iteration-count'1'Number设置动画重复次数，暂不支持内联样式animation-timing-function'ease''ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'cubic-bezier()', 'steps()'设置动画时间函数，暂不支持内联样式animation-direction'normal''normal', 'reverse', 'alternate', 'alternate-reverse'设置动画方向，暂不支持内联样式
### 过渡[​](c-api-css.html#过渡)
属性默认值可选值说明transition设置过渡，暂不支持内联样式transition-property'all'all，支持属性：height, width, margin, padding, border, color, background-color, transform, opacity设置过渡属性，暂不支持内联样式transition-duration'0s'Number设置过渡持续时间，暂不支持内联样式transition-delay'0s'Number设置过渡延迟时间，暂不支持内联样式transition-timing-function'ease''ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'cubic-bezier()', 'steps()'设置过渡时间函数，暂不支持内联样式
## 其他属性[​](c-api-css.html#其他属性)
属性默认值可选值说明box-shadow'none'-设置元素阴影box-shadow-color'black'Color设置阴影颜色box-shadow-offset'0 0'Length(x y), Length(x) Length(y)设置阴影偏移box-shadow-blur'0'Length设置阴影模糊半径overflow'visible''hidden', 'visible', 'scroll', 'auto'设置内容溢出时的处理方式visibility'visible''hidden', 'visible'设置元素可见性opacity'1'Number设置元素透明度
## 媒体查询[​](c-api-css.html#媒体查询)
### 支持的媒体特性[​](c-api-css.html#支持的媒体特性)
特性说明width视口宽度height视口高度aspect-ratio视口宽高比orientation视口方向device-width设备宽度device-height设备高度device-aspect-ratio设备宽高比resolution设备分辨率
### 支持的复合查询[​](c-api-css.html#支持的复合查询)
操作符说明not否定查询and逻辑与or逻辑或
### 使用示例[​](c-api-css.html#使用示例-1)
```css
/* 设备宽度大于等于 768px */
@media (min-width: 768px) {
 /* 样式 */
}

/* 设备方向为横屏 */
@media (orientation: landscape) {
 /* 样式 */
}

/* 设备宽度在 768px 到 1024px 之间 */
@media (min-width: 768px) and (max-width: 1024px) {
 /* 样式 */
}

/* 设备宽度小于 768px 或大于 1024px */
@media (max-width: 768px), (min-width: 1024px) {
 /* 样式 */
}
```

## 说明[​](c-api-css.html#说明)
### 长度单位[​](c-api-css.html#长度单位)
单位说明示例px像素`10px`vp虚拟像素`10vp`%百分比`50%`vw视口宽度的百分比`50vw`vh视口高度的百分比`50vh`calc()计算表达式`calc(100% - 20px)`env()环境变量`env(safe-area-inset-top)`
### 颜色值[​](c-api-css.html#颜色值)
格式说明示例十六进制6 位或 8 位十六进制数`#FF0000`, `#FF0000FF`RGBRGB 颜色值`rgb(255, 0, 0)`RGBA带透明度的 RGB 颜色值`rgba(255, 0, 0, 0.5)`颜色名称预定义的颜色名称`red`, `blue`, `green`
### 支持的动画和过渡属性[​](c-api-css.html#支持的动画和过渡属性)
属性说明height高度width宽度margin外边距padding内边距border边框color颜色background-color背景颜色transform变换opacity透明度
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
