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
