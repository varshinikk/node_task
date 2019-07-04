var fs = require('fs')
fs.readFile('Index.html','utf-8',function(err, data) {
    if (err) {
        console.log("file not found");
    }
});
console.log("something about nodejs");