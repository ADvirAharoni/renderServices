
const sdk = require('api')('@render-api/v1.0#jw0325lr5hblce');
require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    sdk.auth(process.env.RENDER_API_TOKEN);
    sdk.getServices({limit: '20'})
      .then(({ data }) => res.send(data))
      .catch(err => {console.error(err); res.send("error: unknown error");});})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})