const Koa = require('koa') // koa v2.x
const convert = require('koa-convert');
const app = new Koa()

app.use(function *(){
  this.body = 'Hello World';
});

if (!module.parent) app.listen(3000);
