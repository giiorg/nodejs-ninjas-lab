const Application = require('./lib/application')

const port = 8001

const app = new Application({ port })

// regex: should be matched on `/users`
app.use(/(.*)rs$/, (ctx, next) => {
  console.log('/(.*)rs$/')
  next()
})

// named parameters
app.use('/users/:userId/posts/:postId', ctx => {
  console.log(ctx.req.params) // example: { "userId": "2", "postId": "100" }
  ctx.res.json(ctx.req.params)
})

app.run()
