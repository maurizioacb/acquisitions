import 'dotenv/config'; //importamos dotenv para poder usar variables de entorno

export default {
    schema: './src/models/*.js', //ruta del archivo schema.ts   
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {    
        url: process.env.DATABASE_URL, //url de la base de datos que se encuentra en el archivo .env
    },
};
