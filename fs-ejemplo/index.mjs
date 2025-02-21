import fs from 'fs';

// leer un archivo de manera asincrona
fs.readFile('./data/example.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log('Contenido del archivo:',data);
});

// escribir en un nuevo archivo 
fs.writeFile('./data/newfile.txt','Contenido nuevo',(err)=>{
    if (err) throw err;
    console.log('archivo creado y escrito');
});

// renombrar un archivo 
fs.rename('./data/newfile.txt','./data/renamedfile.txt',(err)=>{
    if(err) throw err;
    console.log ('Archivo renombrado');
});


// Tuve que crear la carpeta data y el archivo example.txt para que le script funcionara de manera optima sin inconvenintes, ya que al no encontrar la direccion y el archivo se ejecutaba con error 
