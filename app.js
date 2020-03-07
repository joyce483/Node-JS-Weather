var request = require("request");
var url = "https://api.darksky.net/forecast/69ea4f4a768eeef0de0a025bf9b08a81/37.8267,-122.4233";

request({url:url,json:true},(err,res)=>{
    //console.log(JSON.parse(res.body).currently.time);
    //console.log(res);
    console.log(res.body.currently.summary)
});