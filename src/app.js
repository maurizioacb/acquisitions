import express from 'express'; //creamos ese import que se llamara expres y llamara a express
import logger from '#config/logger.js'; //importamos la constante logger desde el archivo logger.js    
import helmet from 'helmet'; //importamos helmet para proteger la app de vulnerabilidades
import morgan from 'morgan'; //importamos morgan para poder ver las peticiones que se hacen a la app
import cors from 'cors'; //importamos cors para permitir peticiones desde otros dominios
import cookieParser from 'cookie-parser'; //importamos cookieParser para poder recibir cookies en las peticiones
import authRoutes from '#routes/auth.routes.js';
import securityMiddleware from '#middleware/security.middleware.js'; //importamos securityMiddleware para proteger la app de ataques de denegacion de servicio 


const app = express(); //creamos una constante que se llamara app y que sera igual a express

app.use(helmet()); //usamos helmet para proteger la app de vulnerabilidades
app.use(express.json()); //usamos express.json para poder recibir peticiones en formato json
app.use(express.urlencoded({ extended: true })); //usamos express.urlencoded para poder recibir peticiones en formato urlencoded             
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } })); //usamos morgan para poder ver las peticiones que se hacen a la app y las enviamos al logger
app.use(cors()); //usamos cors para permitir peticiones desde otros dominios
app.use(cookieParser()); //usamos cookieParser para poder recibir cookies en las peticiones

app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } })); //usamos morgan para poder ver las peticiones que se hacen a la app y las enviamos al logger

app.use(securityMiddleware); //usamos securityMiddleware para proteger la app de ataques de denegacion de servicio

app.get('/', (req, res) => {
  logger.info('Hello from acquisitions!'); //cuando se haga una peticion get a la ruta raiz, se enviara un mensaje de hello world
  res.status(200).send('Hello from acquisitions!'); //cuando se haga una peticion get a la ruta raiz, se enviara un mensaje de hello world
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString(), uptime: process.uptime() });
});

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Acquisitions API is running!' });
});

app.use('/api/auth', authRoutes); //usamos authRoutes para manejar las rutas de autenticacion 

export default app; //exportamos la constante app para que pueda ser usada en otros archivos
 