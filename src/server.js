import app from './app.js'; //importamos la constante app desde el archivo app.js

const PORT = process.env.PORT || 3000;//la contante PORT sera ifual a una variable de entorno que sera buscada como port, sino hay nada sera 3000

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);   //el app escuchara en el puerto PORT y mostrara un mensaje en consola
}) ;