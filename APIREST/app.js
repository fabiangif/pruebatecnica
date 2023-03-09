const http = require("http");
const libros = require('./libros')

const servidor = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return manejarSolicitudGet(req, res);
    default:
      console.log(`Metodo no especificado: ${method}`);
  }
});

function manejarSolicitudGet(req, res) {
  const path = req.url;

  if (path === "/") {
    res.statusCode = 200;
    console.log(path)
    res.end(JSON.stringify(libros.infoLibros.libros))
  } else {
    res.status = 400;
    res.end("ERROR")
  }
}

const puerto = 3003;

servidor.listen(puerto, () => {
  console.log("server listening in port 3003");
});
