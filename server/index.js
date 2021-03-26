const express = require('express');
const mogoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes')
const corsMiddleware = require('./middleware/cors.midddleware')

const app = express();
const PORT = config.get('serverPort')


app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth",authRouter)

const start = async ()=>{
    try{


        app.listen(PORT,()=>{
            console.log('server started on port:',PORT);
        })

        await mogoose.connect(config.get("dbUrl"),{useNewUrlParser: true, useUnifiedTopology: true })



    }catch(e){
      console.log(e);
    }
}
start();
