# Named parameters and complex paths

### Use `path-to-regexp` npm package to implement advanced path matching and named parameters in `Application` class. Satisfy requirements of app.js

Contents of app.js:

```js
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
```

Resources:

- [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
- [Express Routing](https://expressjs.com/en/guide/routing.html)
- [Koa Router](https://github.com/ZijianHe/koa-router)
