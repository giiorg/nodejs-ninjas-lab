# Add support of route namespacing and scoped middlewares to mount on the specific path

### note: modify `Application` and `Router` classes to satisfy app.js's requirements:

Contents of app.js:

```js
const Application = require('./lib/application')
const Router = require('./lib/router')

const users = []

const app = new Application()

function isAuth(ctx, next) {
  console.log('checking whether authenticated')
  next()
}
app.use(isAuth)

const router = new Router()

router.get('/', ctx => {
  ctx.res.json(users)
})

router.post('/', ({ req, res }) => {
  const user = req.body
  users.push(user)
  res.json(user)
})

router.put('/', ({ res }) => {
  res.json('put request...')
})

router.delete('/', ctx => {
  ctx.res.json('delete request...')
})

// runs only on the matched path that starts with '/users'
app.use('/users', router.getMiddleware())

// runs only on the matched path that starts with '/other'
app.use('/other', (ctx, next) => {
  console.log('other')
  ctx.res.json('other middleware')
})

function notFound(ctx, next) {
  ctx.res.status(404).json('not found')
}
app.use(notFound)

app.listen(8001, () => {
  console.log('Server listens to http://localhost:8001')
})

```
