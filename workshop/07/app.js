const Application = require('./lib/application')

const port = 8001

const app = new Application({ port })

app.use(
  '/users',
  (ctx, next) => {
    console.log('first middleware on `/users` path')
    next()
  },
  (ctx, next) => {
    console.log('second middleware on `/users` path')
    next()
  }
)

app.use(
  '/other',
  (ctx, next) => {
    console.log('first middleware on `/other` path')
    next()
  },
  (ctx, next) => {
    console.log('second middleware on `/other` path')
    ctx.res.json('terminating middleware')
  }
)

app.use(ctx => {
  ctx.res.json('Coolest app!')
})

app.run()
