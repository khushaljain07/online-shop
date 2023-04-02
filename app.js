const path=require('path');
const http =require('http');

const express=require('express');
const app=express();

app.set('view engine','pug');
app.set('views','views');
const adminData=require('./routes/admin')

const rootdir=require('./util/path')
 
const shoproutes=require('./routes/shop')

 
const bodyParser=require('body-parser');

app.use(express.static(path.join(rootdir,'public')))
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminData.routes);
app.use(shoproutes);


app.use((req,res,next)=>{
    res.status(404).render('404',{docTitle:'error page'})
})


app.listen(3000);