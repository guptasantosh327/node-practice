const fs = require('fs');
const fs = require('node:fs/promises');


// var buf = new Buffer(1024);
const buf = new Buffer.alloc(1000);
//Asynchronously
// fs.readFile('input.txt', (err, data) => {
//     if(err){
//         return  console.error(err);
//     }
//     console.log(data.toString());
// });

// //Syncronously
// const data = fs.readFileSync('input.txt');

// console.log(data.toString());


// Fs open
fs.open('input.txt', 'r+',(err, file) => {
    if(err){
        return console.error(err);
    }

    fs.read(file, buf, 0, buf.length, 0, (err, bytes) =>{
        if(err){
            return console.error(err);
        }
        if(bytes > 0){
            console.log(buf.slice(0,bytes).toString());
        }
    });

    fs.close(file,err => {
        if (err) console.log(err);
        console.log("File closed successfully.");
    });

    fs.unlink('input.txt', (err)=>{
        if(err) return console.error(err);
    });

});


// fs.writeFile('input.txt',"Node js", (err) => {
//     if(err) return console.error(err);

//     console.log("data is written successfully");

//     fs.readFile('input.txt', (err, data) => {
//         if(err) return console.error(err);
//         console.log("Reading file");
//         console.log(data.toString());
//     });
    

//     fs.appendFile('input.txt', "\nPractice makes human perfect", 'utf8', (err)=>{
//         if(err) return console.error(err);
//     });
// })
