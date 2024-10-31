let express = require('express');
let app = express(); 

const port = 3000;


//app.METHOD
app.get("/teste", (req, res) => {
    res.send("resposta da rota /teste");
});


app.get("/user/:id-:id2", (req,res) => {
    console.log(req.params);
});

app.listen(port, ()=> {
    console.log(`servidor escutando a porta ${port}`);
});

app.post("/rotapost", (req, res) => {
    res.send("Retorno da rota usando o metodo post");
});

app.post("/user/:id-:id2", (req, res) => {
    res.send(req.params);
});