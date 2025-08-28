
// yaha  par server banaya hu mai 



const express=require('express');
const app=express();

// specifically parse json data & add it to the request.body object



const bodyParser=require('body-parser');

// use to parse req.body
app.use(bodyParser.json());


// yaha par mai activate kiya hu server ko 

app.listen(4000,()=>{
    console.log("server started at port number 4000");
})

// route kiya hu server ko 
app.get('/',(request,response)=>{
    response.send("hello jee ,kaise ho ");
})


// post request kiya hu server par 

app.post('/api/car',(request,response)=>{
    const {name, brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted sucessfully")
})


const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabse',{
    useNewurlParser:true,
    useUnifiedTopology:true

})
.then(()=>{console.log("connection suceesfully")})
.catch(()=>{console.log("connection is not succesfully")})