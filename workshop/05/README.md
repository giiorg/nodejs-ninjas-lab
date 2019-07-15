# EventEmitter

### Write your own implementation of EventEmitter class in ./lib/event-emitter.js and extend Application class with your EventEmitter in ./lib/application instead of node.js's EventEmitter (note: requirements from app.js file's perspective stays the same)

Contents of app.js:

```js
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

```

Resources:

* [EventEmitter documentation](https://nodejs.org/api/events.html)
* [events module source code in nodejs' repository](https://github.com/nodejs/node/blob/master/lib/events.js)
