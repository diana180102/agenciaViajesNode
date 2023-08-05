// const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

//Conectar Base de datos
db.authenticate()
   .then(() => console.log('Base de Datos conectada'))
   .catch (error => console.log(error));

//Definimos puerto
const port= process.env.PORT || 4000;



//habilitar PUG
app.set('view engine', 'pug');

//Obtener año actual
app.use((req, res, next) =>{
   const year = new Date();

   res.locals.nowYear = year.getFullYear();
//    console.log(res.locals);
   res.locals.nombresitio = "Agencia de Viajes"
   return next();
});

// Agregar body parse para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static('./public'));

// req lo que enviadmos  res- respuesta dada por la peticion

app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});

//agregar router
app.use('/', router);