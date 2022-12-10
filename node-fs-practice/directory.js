const fs = require('node:fs');


fs.readdir('/development',(err, files)=>{
    if(err) return console.error(err);

    console.log(files);
})

fs.readlink('/development', (err,linkString) => {
    if(err) return console.error(err);

    console.log(linkString);
})