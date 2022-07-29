import express from "express"

const app = express();
app.use(express.json());

const pessoas = [
    {
        "nome": "jhey", 
        "idade": 31, 
        "sexo": "F"
    }, 
    {
        "nome": "leide", 
        "idade": 17, 
        "sexo": "F"
    }, 
    {
        "nome": "dany", 
        "idade": 21, 
        "sexo": "M"
    }
];

app.get("/pessoas", (req, res) => { 
    
    return res.json(pessoas);

 
});


app.post("/pessoas", (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;
    const sexo = req.query.sexo;
    
    pessoas.push({nome, idade, sexo});

    return res.json({nome, idade, sexo});

    });
    
    
    
app.listen(3000);