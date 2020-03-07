var request = require("request");

const foreCast = (lat,lng,callback)=>{
    var url = "https://api.darksky.net/forecast/69ea4f4a768eeef0de0a025bf9b08a81/"+lat+","+lng;
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback(err);
        }else if(res){
            callback(res);
        }   
    });
};

module.exports.FC = foreCast;

// foreCast(37.8267,-122.4233,(e,data)=>{
//     console.log(e);
//     console.log(data);
// })