const express = require('express');
const cors = require('cors')
const bodyParser=require('body-parser')
const app = express();
const base64Img = require('base64-img');
const { v4: uuidv4 } = require('uuid');
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({limit: '10mb'}));

app.post('/upload',(req,res)=>{
    const filepath = base64Img.imgSync(req.body.base64, '../images', `${uuidv4()}${Date.now()}`); // Synchronous using
    res.status(200).json({location:`https://www.brainlytic.org/${filepath.replace('\\','/').replace('../','')}`})
})


const port = process.env.PORT || 8080;


app.listen(port);
console.log(`Server listening at port: ${port}`);