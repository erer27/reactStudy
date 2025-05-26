//https://www.kobis.or.kr/kobis/business/main/main.do
//searchMainDailyBoxOffice.do
//searchMainDailySeatTicket.do
//searchMainRealTicket.do
const express = require('express');
const request=require('request');
const app=express();
const port = 3355;
app.use(express.json());
app.all('/*', function(req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.listen(port, () => {
    console.log("Server start " ,' http://localhost:3355');
})
// app.get("경로명",(req,res)=>{})
app.get("/movie/home",(req,res)=>{
    let no=req.query.no;
    no=parseInt(no);
    console.log(no)
    // String no=request.getParameter("no") => ?no=1
    let site="";
    if(no===1)
        site="searchMainDailyBoxOffice.do";
    else if(no===2)
        site="searchMainDailySeatTicket.do";
    else if(no===3)
        site="searchMainRealTicket.do";
    let url = "https://www.kobis.or.kr/kobis/business/main/"+site

    request({url:url},function(error,request,json){
        console.log(json);
        res.json(JSON.parse(json))
    })

})