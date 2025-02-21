import http from 'http';

// crear un sevidor HTTP basico 
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('!Hola, Mundo¡');
});


// configurar el servidor para que escuche en el purto 3000 
server.listen(3000,'127.0.0.1',()=>{
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});