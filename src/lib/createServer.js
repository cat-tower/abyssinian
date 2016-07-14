import Koa from 'koa';
import indexView from '../index';

export default async function createServer(opts) {

  const app = new Koa();
  const devServer = require('../middleware/webpackDevServer').default;
  devServer(app);

  app.listen(opts.port);
  app.use(async (ctx) => {
  ctx.body = indexView();
  });
}
