import os from 'os';

// obetener la aquitectura del sistema 
console.log ('Aquitectura:',os.arch());

// obtener el tipo de sitema operativo
console.log('Platforma:',os.platform());

// obtener la cantidad total de memoria 
console.log('Memoria RAM total (GB):',os.totalmem()/1024/1024/1024);

// obtener la memoria libre 
console.log('Memoria RAM libre en GB:',os.freemem()/1024/1024/1024);
// Cree una divicion de memoria pra mostras mas claramente los GB 


// obtener informacion de la cpu 
console.log('Informacionde la cpu:', os.cpus());