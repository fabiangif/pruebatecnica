require('dotenv').config();

const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const initialProduct = require("./src/controllers/GET/apisave/index")

const port = process.env.PORT || 3001;
 
conn.sync({ force: true }).then(()=>{ 

    //Guardamos la info en la Base de Datos
    initialProduct()

    // Iniciamos el servidor
    server.listen(port, ()=>{
        console.log(`Server running on port ${port}`);
    });
});