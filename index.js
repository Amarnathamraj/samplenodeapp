const express=require('express')
const app=express()
app.use(express.json())
app.get('/',(req,resp)=>{
    resp.json({message:'you requested homeppage'})
})

app.get('/all',(req,resp)=>{
      resp.json({message:'get request made  '})
})

app.post('/add',(req,resp)=>{
    console.log(req.body)
    resp.json({message:'post request received',data:req.body})
})

const PORT=process.env.PORT||8080;
app.listen(PORT,(req,res)=>{
    console.log('app is listening on port no',PORT)
})

// samplenodeapp-production-9883.up.railway.app
