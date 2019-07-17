# Router level middlewares

### Reimplement `Router` class to allow router-level middlewares. Satisfy requirements of app.js file.

Contents of app.js:

```js
const Application = require('./lib/application')
const Router = require('./lib/router')

const port = 8001

const app = new Application({ port })

const router = new Router()

router.use((ctx, next) => {
  console.log('Router middleware')
  next()
})

router.get(
  '/',
  (ctx, next) => {
    console.log('first middleware on `/users` path, with method GET')
    next()
  },
  (ctx, next) => {
    console.log('second middleware on `/users` path, with method GET')
    ctx.res.json('get users')
  }
)

router.use(
  '/',
  (ctx, next) => {
    console.log(
      'first middleware on `/users` path, with any method except of GET'
    )
    next()
  },
  (ctx, next) => {
    console.log(
      'second middleware on `/users` path, with any method except of GET'
    )
    ctx.res.json('users')
  }
)

app.use('/users', router.getMiddleware())

app.run()

```

Resources:

- [Express middlewares](https://expressjs.com/en/guide/using-middleware.html)
