import express from 'express'
import bodyParser from 'body-parser'
const app = express();
const PORT = 5000;
import userRoute from './routes/users.js'


app.use(bodyParser.json());



app.get('/',(req,res)=>{
    res.send('Home page')
})

app.use('/users', userRoute);

app.listen(PORT,()=>{
    console.log(`server run on port ${PORT} and url http://localhost:${PORT}`); 
});