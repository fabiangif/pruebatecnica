require('dotenv').config();

const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const port = process.env.PORT || 3001;
 
conn.sync({ force: false }).then(()=>{ 
    // Iniciamos el servidor
    server.listen(port, ()=>{
        console.log(`Server running on port ${port}`);
    });
});