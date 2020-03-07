var express = require("express");
var app = express();
var path = require("path");
var mapbox = require("../mapbox.js");
var forecast = require("../fc.js");

//app.use(express.static(path.join(__dirname,"./public")));
app.use('/public', express.static(path.resolve(__dirname, 'public')));
app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index.hbs",{
        info:{
            "tutorial":"udemy"
        }
    })
});

app.get("/about",(req,res)=>{
    res.render("about.hbs",{
        info:{
            "tutorial":"udemy"
        }
    })
});

app.get("/get",(req,res)=>{
    res.send("hey get call...")
});

app.get("/index",(req,res)=>{
    res.send(".....");
});

app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send("Incorrect request header passed.");
    }else{
            mapbox.MapBox(req.query.address,(data)=>{
                console.log(JSON.stringify("here is the search term ",data.body.query[0]));
                //res.send("You have searched for "+(JSON.stringify(data.body)));
                var lat = data.body.features[0].geometry.coordinates[1];
                var lng = data.body.features[0].geometry.coordinates[0];
            forecast.FC(lat,lng,(FCdata)=>{
                console.log(FCdata.body.currently.summary);
            res.status(200).send("The climate in "+data.body.query +" is "+FCdata.body.currently.summary)    
        });
    });
}
});

app.get("/*",(req,res)=>{
    res.send("page not found...");
});

app.listen(8014,()=>{
    console.log("Express...");
});