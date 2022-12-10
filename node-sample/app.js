const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/webhookStripe', (req, res, next) => {
    console.log(req.body);
    return res.status(200).json(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})