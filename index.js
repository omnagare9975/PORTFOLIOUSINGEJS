const express = require('express')
const app = express()
const PORT = 9000
const path = require('path')

app.set('view engine' , 'ejs')
app.set("views" , path.join(__dirname , "views"))


app.get('/' , (req , res)=>{
    res.render('main')
})

app.listen(PORT , '0.0.0.0', ()=> console.log(`SERVER IS RUNNING ON PORT ${PORT}`))
