const express=require("express")
const app=express()
const path=require("path")
const dotenv=require("dotenv")
const Baby=require("./Routes/Baby")
const Couples=require("./Routes/Couples")
const Family=require("./Routes/Family")
const Maternity=require("./Routes/Maternity")
const New=require("./Routes/New")
const Matrimony=require("./Routes/Matrimony")
const Wedding=require("./Routes/Wedding")
const PreWed=require("./Routes/PreWed")
const Application=require("./Routes/Application")
const Form=require('./Routes/Form')
dotenv.config({path:path.join(__dirname,'Config','config.env')})
const connectdb = require("./Config/connectdb")
const cors=require("cors")
const PORT=process.env.PORT||3500




app.use(express.json())
app.use(cors(
    {
        origin: "https://deploy-1-ogbj.onrender.com"
    }
))

app.options('*', cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // Update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api/v1/',Baby)
app.use('/api/v1/',Couples)
app.use('/api/v1/',Family)
app.use('/api/v1/',Maternity)
app.use('/api/v1/',New)
app.use('/api/v1/',Matrimony)
app.use('/api/v1/',Wedding)
app.use('/api/v1/',PreWed)
app.use('/api/v1/',Application)
app.use('/api/v1/',Form)

connectdb()


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} in ${process.env.NODE_ENV}`)
})
