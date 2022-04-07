const express = require('express');
const voucher_codes = require('voucher-code-generator');

exports.ride = function(req,res){

    var PerkmA = 8;
    const PerkmM = 10;
    const perKmB = 5;
    const perKmPsedan = 15;
    const perKmPsuv = 20;

    const pickup = req.body.pickup;
    const drop = req.body.drop;
    const distance = req.body.distance  //
 
//     res.json({Auto : "Get an auto at your doorstep  PRICE: ₹"+PerkmA*distance,
//     Mini : "Comfy hatchbacks at pocket-friendly fares PRICE: ₹"+PerkmM*distance,
//     Bike:"Zip through traffic at affordable fares PRICE: ₹"+perKmB*distance,
//     PrimeSedan:"Sedans with free wifi ad top drivers PRICE: ₹"+perKmPsedan*distance,
//     PrimeSUV:"SUVs with free wifi and top drivers PRICE: ₹"+perKmPsuv*distance
// })
res.send("Auto : Get an auto at your doorstep PRICE: ₹"+PerkmA*distance+"\n\n"+ "Mini : Comfy hatchbacks at pocket-friendly fares PRICE: ₹"+PerkmM*distance+"\n\n"+
"Bike :Zip through traffic at affordable fares PRICE: ₹"+perKmB*distance+"\n\n"+"PrimeSedan :Sedans with free wifi ad top drivers PRICE: ₹"+perKmPsedan*distance+"\n\n"+
"PrimeSUV :SUVs with free wifi and top drivers PRICE: ₹"+perKmPsuv*distance)
}

exports.codeGenerator = function(req,res){
 var voucher = voucher_codes.generate({
        length: 10,
        count: 1,
        charset: "ABCDEFGHIJKLMNOPqrstuvwxyz258974631"
    });
    res.send(voucher);
}

exports.auto = function(req,res){
    var PerkmA = 8;
    const pickup = req.body.pickup;
    const drop = req.body.drop;
    const distance = req.body.distance  

    var voucher = voucher_codes.generate({
        length: 15,
        count: 1,
        charset: "ABCDEFGHIJKLMNOPqrstuvwxyz258974631"
    });


    const option = req.body.option
    if(option == "Auto" || option == "auto"){

        res.send("PICKUP : "+req.body.pickup+"\n\n"+"DROP: "+req.body.drop+"\n\n"+"Total Fare: "+PerkmA*distance+"\n\n"+
        "PAY BY: "+"CASH / OLA MONEY"+"\n\n"+"CUPON CODE:"+voucher+"\n\n\n"+"change router CONFIRM BOOKING")
    }
}


exports.confirmbooking = function(req,res){
    res.send(hello());
}

// function generateOTP() {
          
//     var digits = '0123456789';
//     let OTP = '';
//     for (let i = 0; i < 4; i++ ) {
//         OTP += digits[Math.floor(Math.random() * 10)];
//     }
//     return OTP;
// }
  
// document.write("OTP of 4 digits: ")
// document.write( generateOTP() );
