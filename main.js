var algorithm = require("./a41");
var http = require("http");
var querystring = require("querystring");
var data = algorithm.ee("16240457","04133210");
var content = querystring.stringify(data);
var options = {
    hostname:'10.1.255.90',
    path:'0.htm',
    method:'POST',
    headers: {  
            "Content-Type": 'application/x-www-form-urlencoded',  
            "Content-Length": content.length  
        } 
}

var req = http.request(options,function(res){
    console.log('STATUS:'+res.statusCode);
    if(res.statusCode == 200){
        	console.log("fucking Ok!");
        }
    //console.log('HEADERS:'+JSON.stringify(res.headers));
    res.on('data',function(chunk){
        //console.log('BODY:'+chunk);
    });
    req.on('end',function(){  
        
    });  
});
req.write(content);
req.end();

