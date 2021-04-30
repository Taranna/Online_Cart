require("dotenv").config();
const path=require("path");
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();
const app = express();
app.use(express.json());


app.use("/data/products", productRoutes);
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,'../client/build')));

  app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,"..",'client','build','index.html'))
  })
}
else{
  app.get('/',(req,res)=>{
    res.send("App is running")

  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port :${PORT}`));
