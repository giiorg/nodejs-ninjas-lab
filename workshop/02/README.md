# Write mini router in ./lib.js file to satisfy requirements of app.js file

Contents of app.js:

```js
const Application = require('./lib/application')
const Router = require('./lib/router')

const users = []

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

const app = new Application()

app.use(router)

app.listen(8001, () => {
  console.log('Server listens to http://localhost:8001')
})


```

Notes:

* Use `class` keyword while implementing the `Application` and `Router` constructors

Resources:

* [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
