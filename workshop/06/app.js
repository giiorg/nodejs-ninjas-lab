const Application = require('./lib/application')
const Router = require('./lib/router')

const users = []

const port = 8001

const app = new Application({ port })

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

app.use('/users', router.getMiddleware())

app.use('/other', (ctx, next) => {
  console.log('other')
  ctx.res.json('other middleware')
})

function notFound(ctx, next) {
  ctx.res.status(404).json('not found')
}
app.use(notFound)

app.run()
