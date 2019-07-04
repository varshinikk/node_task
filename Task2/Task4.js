var fs = require('fs')
fs.readFile('Index.txt','utf-8',function(callFunction) {
        console.log("callFunction data");
});
function callFunction()
{
    console.log("Go back to callFunction");
}