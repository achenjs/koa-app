const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

const loggerAsync = require('./middleware/logger-async');

app.use(loggerAsync());

let home = new Router()

// 子路由1
home.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

// 子路由2
let page = new Router()
page.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{
  ctx.body = 'helloworld page!'
})

// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.use(async ctx => {
  let url = ctx.request.url;
  ctx.body = url;
});

app.listen(4000, () => {
  console.log('[demo] start-quick is starting at port 4000');
});