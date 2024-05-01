const express = require("express");
const app = express();
const port = 3000;

app.get('/', function (req, res){
    res.send("Weclome to my world");
})

app.get('/testing', (req, res) => {
    res.send("Testing done from testing page !!");
})

app.get('/dosa', (req, res) => {
    var customized_dosa = {
        name: 'Masala Dosa',
        size: '10 cm',
        is_sambhar: true,
        is_chutney: true
    }
    res.send(customized_dosa);
})

app.listen(port, ()=> {
    console.log(`Listening on port no : ${port}`);
});