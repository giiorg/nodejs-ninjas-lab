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
