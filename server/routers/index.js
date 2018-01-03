module.exports = router => {
  router.get('/', async ctx => {
    let html = `
      <ul>
        <li><a href="/page/hello">/page/hello</a></li>
        <li><a href="/page/404">/page/404</a></li>
      </ul>
    `;
    ctx.body = html;
  });
  router.get('/404', async ctx => {
    ctx.body = 404;
  });
};
