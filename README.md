# parcel-server

## Usage
```
parcel-server server.js
```

## Example
See `/example` for details.

`package.json`
```json
  "scripts": {
    "start": "parcel-server server.js"
  },
```

`server.js`
```js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('b')
})

app.listen(3000)

console.log('server started')
```

`npm start` will
- start bundling
- watch files
- run the server listening 3000

