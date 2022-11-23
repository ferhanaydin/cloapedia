import express from "express";

const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('Hey');
});

app.listen(port, () =>{
    console.log(`Server ${port} nolu port ile başlatıldı ..`);
    console.log('http://localhost:'+port);
});