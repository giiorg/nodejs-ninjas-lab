const Application = require('./lib/application')

const port = 8001

const app = new Application({ port })

app.on('error', (err, ctx) => {
  console.log('err', err)
  ctx.res.json(err.message)
})

app.on('listen', port => {
  console.log(`Server is running on http://localhost:${port}`)
})

app.use((ctx, next) => {
  throw new Error('Manual error')
})

app.run()
