const app = require('express')();
const express= require('express');
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/homepage',(request,response)=>{
    response.sendFile(path.join(__dirname, 'public/html/index.html'));
});




app.listen(5000, ()=>{
    console.log('Server Running');
})




