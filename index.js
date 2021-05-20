import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

const app = express();

//Conectar Base de Datos
db.authenticate()
     .then( () => console.log('DB connection established') )
     .catch( error => console.log(error));



//Definir puerto
const port = process.env.PORT || 3000;

//Definir host
const host = process.env.HOST || '0.0.0.0'

//Habilitar PUG
app.set('view engine', 'pug');

//Agregar Body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

//DEfinir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/',router);

//Obtener el año actual
app.use((req,res, next) => {
     res.locals.variable = 'Una variable'
     console.log(res.locals)
     return next();
});

app.listen(port, host, () => {
     console.log(`Listening on ${port}`)
})

