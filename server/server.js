const express=require('express');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');
mongoose.connect('mongodb+srv://MahendharBillakuri:Mahi%40snist28@cluster0.koa4a1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{console.log("MonogoDB connected")}).catch((error)=>{console.log("Error in MongoDB connection",error)});
const app=express();
const PORT=process.env.PORT ||6000;
app.use(cors(
    {
    origin:'http://localhost:5173',
    allowedHeaders:["Content-Type",'Authorization',"Cache-Control","Expires","pragma"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}
)  );
app.use(express.json());
app.use(cookieParser());
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});