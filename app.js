const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const db =require('./config/db').database
var router=express.Router();
var bodyParser=require('body-parser');
var logger = require('./logger');
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(bodyParser.json())
mongoose.connect(db, { useNewUrlParser: true,
    useUnifiedTopology: true}).then(() => {
   console.log("Databse Connected Successfully")
}).catch(() => {
   console.log('unable to connect to database')
});



require('./routes/authRoute')(app, router);
require('./routes/bookRoute')(app, router);
require('./routes/userRoute')(app,router);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

module.exports = router;