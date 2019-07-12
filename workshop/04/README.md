# Make `app` instance of EventEmitter in ./lib to satisfy requirements of app.js file

Contents of app.js:

```js
const Application = require('./lib/application')

const port = 8001

const app = new Application({ port })

app.on('error', (err, ctx) => {
  console.log('err', err)
  ctx.res.json(err.message)
})

app.on('listen', (err, port) => {
  if (err) {
    console.log(
      `Could not start server on http://localhost:${port} because of error: ${
        err.message
      }`
    )
    return
  }

  console.log(`Server is running on http://localhost:${port}`)
})

app.use((ctx, next) => {
  throw new Error('Manual error')
})

app.run()

```

Resources:

* [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
* [EventEmitter documentation](https://nodejs.org/api/events.html)
