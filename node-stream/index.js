const express = require('express');
const fs = require('fs');

const app = express();


app.get('/start', (req, res, next) => {
    const file = fs.createReadStream('big.file');
    file.pipe(res);
})


app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})