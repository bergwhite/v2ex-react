## 目录

* 项目简介
* 在线演示
* 截图演示
* 踩坑

## 项目简介（1/4）

* 项目使用React、Reac-router、Axios、ANTD UI进行开发
* 项目兼容移动端
* 使用Nginx代理V2EX API并支持CORS跨域
* 另外还写过一个V2EX项目，v2ex-vue：https://github.com/bergwhite/v2ex-vue
* 以及nodejs聊天室，nchat：https://github.com/bergwhite/nchat
* 找工作，北京。联系方式：YmVyZ3doaXRlc0BnbWFpbC5jb20=
* 觉得对你有帮助的话，欢迎给个star，谢谢

## 在线演示（2/4）

* [点击进入](https://v2ex-react.bw2.me/)
* [cordova打包的安卓APK](http://atmp.oss-cn-qingdao.aliyuncs.com/apk/v2ex-react-1.0.ap)

![mobile](http://atmp.oss-cn-qingdao.aliyuncs.com/img/v2ex-react_moile-qrcode.png)
![apk](http://atmp.oss-cn-qingdao.aliyuncs.com/img/v2ex-react_apk-1.0-qrcde.png)

## 截图演示（3/4）

### 导航页面

![nav-page](http://atmp.oss-cn-qingdao.aliyuncs.com/img/v2ex-react_allPage.gif)

### 文章页面

![art-page](http://atmp.oss-cn-qingdao.aliyuncs.com/img/v2ex-react_articlePage.gif)

### 分类页面

![tag-page](http://atmp.oss-cn-qingdao.aliyuncs.com/img/v2ex-react_nodePage.gif)

### 用户和主题页面

![use-page](http://atmp.oss-cn-qingdao.aliyuncs.com/img/v2ex-react_userAndNodePage.gif)

## 踩坑（4/4）

### 支持IE

在IE中的报错，TypeError: 对象不支持“startsWith”属性或方法，通过添加babel-polyfill解决

```

import babel-polyfill for IE9+

```

### 通过Nginx配置路由

直接访问二级路由会404，通过nginx把页面定向到inedx.html，让react-router接管页面路由

```

location / {
  try_files $uri /index.html
}

```

### 开启Gzip

页面访问速度过慢，于是开启Gzip对数据压缩传输

```

gzip on; # 开启Gzip
gzip_comp_level 6; # 级别为1-9，9是最高的压缩比
gzip_types *; # 压缩所有类型文件
gzip_vary on; # 添加响应头

```