let express=require('express');
let path=require('path');
let connection=require('./connection');
let app=express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/insert', (req, res) => {
    const query1=req.query.query1;
    connection.query(query1, (err) => {
        if (err) {
            res.send("Error");
        } else {
            res.send("Success");
        }
    });
});

app.listen(8000,()=>{
    console.log('Server is running at port 8000');
});