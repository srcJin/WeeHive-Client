# ## 搜外七巧板简介[​](seowhy.html#搜外七巧板简介)
[搜外七巧板](https://diy.seowhy.com/)是十多年技术沉淀、站长圈中流砥柱的[搜外网](https://www.seowhy.com/)开发的网站转小程序制作平台，小程序底层使用了 Taro，支持多种主流小程序平台，如 QQ、微信、字节跳动、360、支付宝、百度 。
只要你的网站是[搜外 6 系统](https://6.seowhy.com/)、Wordpress、DedeCMS、帝国 CMS、Zblog、PHPCMS 等其中的任意一种，那么，你只需要来搜外七巧板，进行一些简单的配置与美化就可以将自己网站的内容一键连接到小程序里 ，实现一个网站、一个小程序、多渠道展现。
**官网地址：[https://diy.seowhy.com/](https://diy.seowhy.com/)**
**Taro 案例：[https://diy.seowhy.com/case](https://diy.seowhy.com/case)**
---

## 使用搜外七巧板[​](seowhy.html#使用搜外七巧板)

- 登录注册即可免费拥有一个小程序
- 设计配置打包下载小程序打包上传
---

## 加入搜外七巧板开发者[​](seowhy.html#加入搜外七巧板开发者)
搜外七巧板小程序使自己开发的系统也支持小程序
更多详细见：[《搜外七巧板小程序开发者入驻文档》](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030231)
### 第一步：定义常量[​](seowhy.html#第一步定义常量)
```text
1. DB_PATH 数据库目录
2. PROVIDER 程序名称
```

### 第二步：实现方法[​](seowhy.html#第二步实现方法)
#### 1、main.php[​](seowhy.html#1mainphp)

- appClient 类
- connectProvider 方法 （读取数据库字段）
##### 范例：[​](seowhy.html#范例)

- [dedecms 范例](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030187)
- [wordpress 范例](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030188)
---

#### 2、 provider.php[​](seowhy.html#2-providerphp)
##### 必须实现方法：[​](seowhy.html#必须实现方法)
字段名说明getPosts[获得数据列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030192)getCategories[获得分类列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030191)getCategory[获得分类详情](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030191)getArticles[获得文章列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030194)getArticle[获得文章详情](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030191)getProducts[获得产品列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030193)getProduct[获得产品详情](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030196)getPages[获得单页列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030197)getPage[获得单页详情](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030198)getComments[获得评论列表](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030199)saveComment[新增/修改评论](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030200)commentAttitude[点赞或反对评论](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030201)getMapping[获得 sitemap](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030203)getSiteMapIndex[获得 sitemapIndex](https://www.kancloud.cn/lyc_echo/diy_seowhy_com/2030204)_getRelations获得相关产品_getSubCatIds获得所有分类下级getThumb格式化缩略图convertArticle格式化文章返回参数convertProduct格式化产品返回参数convertCategory格式化分类convertPage格式化单页convertComment格式化留言parseContent格式化内容getParams获得扩展字段
- 
- 
- 

- 
-
