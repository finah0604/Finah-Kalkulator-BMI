//importing modules
const express = require("express");
const bodyparser = require("body-parser");
  
// stores the express module into the app variable!
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
  
//sends index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});
  
//this is used to post the data on the specific route
app.post("/bmicalculator", function (req, res) {
    var heigh = parseFloat(req.body.Height);
    var weigh = parseFloat(req.body.Weight);
    var bmi = weigh / (heigh * heigh);
  
    
    req_name = req.body.Name;
  
    // CONDITION FOR BMI
    if (bmi<18.5){
            res.send("<h3>hey! " + req_name +
                 " your BMI is :" + bmi +
                 "<centre><h1>YOU ARE UNDERWEIGHT");
        }else if (18.5 <= bmi && bmi < 25){
            res.send("<h3>hey! " + req_name +
                 " your BMI is :" + bmi +
                 "<centre><h1> YOU ARE NORMALWEIGHT");
        }else if (25 <= bmi && bmi < 30){
            res.send("<h3>hey! " + req_name +
                 " your BMI is :" + bmi +
                 "<centre><h1> YOU ARE OVERWEIGHT!"); 
        }else if (30<= bmi && bmi >30){
            res.send("<h3>hey! " + req_name +
                 " your BMI is : " + bmi +
                 "<centre><h1> YOU ARE OBESE!"); 
    }
});
  
//this is used to listen a specific port!
app.listen(3000, function () {
    console.log("port active at 3000");
});