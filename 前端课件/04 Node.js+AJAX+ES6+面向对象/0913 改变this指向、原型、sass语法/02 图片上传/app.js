var express = require('express');


var app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require('cors')());

var uploadRouter = require('./routes/upload');
app.use(uploadRouter);


app.listen(3000,function(){
    console.log('server running ...');
});