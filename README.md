# koa简述结构
## 源码文件
```
├── lib
│   ├── application.js
│   ├── context.js
│   ├── request.js
│   └── response.js
└── package.json

application.js 是整个koa2 的入口文件，封装了context，request，response，以及最核心的中间件处理流程。
context.js 处理应用上下文，里面直接封装部分request.js和response.js的方法
request.js 处理http请求
response.js 处理http响应
```

## koa特性
```
只提供封装好http上下文、请求、响应，以及基于async/await的中间件容器。
利用ES7的async/await的来处理传统回调嵌套问题和代替koa@1的generator，但是需要在node.js 7.x的harmony模式下才能支持async/await。
中间件只支持 async/await 封装的，如果要使用koa@1基于generator中间件，需要通过中间件koa-convert封装一下才能使用。
```

# 项目目录
```
├── init                                数据库初始化目录
│   ├── index.js                        初始化入口文件
│   ├── sql/                            sql脚本文件目录
│   └── util/                           工具操作目录
├── package.json 
├── config.js                           配置文件
├── server                              后端代码目录
│   ├── app.js                          后端服务入口文件
│   ├── codes/                          提示语代码目录
│   ├── controllers/                    操作层目录
│   ├── models/                         数据模型model层目录
│   ├── routers/                        路由目录
│   ├── services/                       业务层目录
│   ├── utils/                          工具类目录
│   └── views/                          模板目录
└── static                              前端静态代码目录
    ├── build/                          webpack编译配置目录
    ├── output/                         编译后前端代码目录&静态资源前端访问目录
    └── src/                            前端源代码目录
```
