var fs=require('fs')
fs.readFile('Index.txt','utf-8',function(err, data) {
    if (!err) {
        console.log(data);
    }
    else{
        console.log("file not found");
    }
});

fs.readFileSync('Index.txt','utf-8',function(err, data) {
    if (!err) {
        console.log(data);
    }
    else{
        console.log("file not found");
    }
});