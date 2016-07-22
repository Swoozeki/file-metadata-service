var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var express=require('express')
var app=express()

app.use(express.static(__dirname))
app.post('/get-file-size', upload.single('uploadedFile'), function (req, res, next) {
    res.json({size:req.file.size})
})

app.listen(8080,()=>console.log('now listening to port 8080'))