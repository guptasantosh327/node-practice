var https = require("https"); 
var fs = require("fs"); 
var options = { hostname:"en.wikipedia.org",port:443,path:"/wiki/Sachin_Tendulkar", method:"GET" };

var req = https.request(options, function(res) { 
    var responseBody = ""; 
    let sum = 0;
    console.log("Response from server started."); 
    console.log(`Server Status: ${res.statusCode} `); 
    console.log("Response Headers: %j", res.headers); 
    res.setEncoding("UTF-8"); 
    res.on("data", function(chunk) { 
        console.log(`--data length-- ${chunk.length}`); 
        responseBody += chunk; 
        sum +=chunk.length;
    }); 

    res.on("end", function() { 
        fs.writeFile("Sachin-Tendulkar.html", responseBody, function(err) { 
            if (err) { throwerr; } 
            console.log("sum", sum)
            console.log("File Downloaded"); 
        }); 
    }); 
});

req.on("error", function(err) { 
    console.log(err.message); 
}); 

req.end(); 