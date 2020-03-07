var request = require("request");

const MapBox = (address,cb)=>{
    var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoiam95Y2VnaiIsImEiOiJjazcza284Mm8wY3lkM2lqdGY1dGZobzU5In0.TpIB7EFR-FzVnBJvezeDtQ"
    request({url:url,json:true},(err,res)=>{
        if(err){
            cb(err);
        }else if(res){
            cb(res);
        }
    })
};

module.exports.MapBox = MapBox;

// MapBox("Boston",(e,data)=>{
//     if(e){
//         console.log(e.location,undefined);
//     }else if(data){
//         console.log(undefined,data.location);
//     }
// });