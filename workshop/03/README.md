# Add `express`-like but simple middleware system in ./lib to satisfy requirements of app.js file

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

router.get('/users', ctx => {
  ctx.res.json(users)
})

router.post('/users', ({ req, res }) => {
  const user = req.body
  users.push(user)
  res.json(user)
})

router.put('/users', ({ res }) => {
  res.json('put request...')
})

router.delete('/users', ctx => {
  ctx.res.json('delete request...')
})

app.use(router.getMiddleware())

function notFound(ctx, next) {
  ctx.res.status(404).json('not found')
}
app.use(notFound)

app.listen(8001, () => {
  console.log('Server listens to http://localhost:8001')
})

```
