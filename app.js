import express from 'express';
import session from 'express-session';
import RedisStore from "connect-redis"
import {createClient} from "redis"
import morgan from 'morgan';
import path from 'path';
import Routes from './src/routes/index.js';
import cookieParser from 'cookie-parser';

const app = express();
const __dirname = path.resolve(); // Corregir la obtención de __dirname
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// Initialize client.
let redisClient = createClient()
redisClient.connect().catch(console.error);


// Initialize store.
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
});

// Configuración de la aplicación
app.disable('x-powered-by'); // Deshabilitar el encabezado "X-Powered-By"
app.use(cookieParser()); // Usar Cookie Parser para trabajar con cookies

app.use(morgan('dev')); // Usar Morgan para registrar las solicitudes HTTP


app.use(session({
    store: redisStore,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'src', 'public'))); //Access to Public folder

// Definición de las rutas
app.use(Routes);

export default app;