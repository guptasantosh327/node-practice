const fs = require('node:fs');


function callback(err) {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
}

// destination.txt will be created or overwritten by default.
// fs.copyFile('source.txt', 'destination.txt', callback);

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
fs.copyFile('source.txt', 'destination.txt', fs.constants.COPYFILE_FICLONE_FORCE, callback);