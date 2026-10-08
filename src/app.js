import express from 'express';//creamos ese import que se llamara expres y llamara a express

const app = express();//creamos una constante que se llamara app y que sera igual a express

app.get('/', (req, res) => {
    res.status(200).send('Hello from acquisitions!'); //cuando se haga una peticion get a la ruta raiz, se enviara un mensaje de hello world
} );

export default app; //exportamos la constante app para que pueda ser usada en otros archivos