import express from 'express';
import morgan from 'morgan';
import path from 'path';
import Routes from './src/routes/index.js';
import cookieParser from 'cookie-parser';

const app = express();
const __dirname = path.resolve(); // Corregir la obtención de __dirname
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// Configuración de la aplicación
app.disable('x-powered-by'); // Deshabilitar el encabezado "X-Powered-By"
app.use(cookieParser()); // Usar Cookie Parser para trabajar con cookies

app.use(morgan('dev')); // Usar Morgan para registrar las solicitudes HTTP
app.use(cookieParser()); // Usar Cookie Parser para trabajar con cookies

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'pug');;
app.use(express.static(path.join(__dirname, 'src', 'public'))); //Access to Public folder

// Definición de las rutas
app.use(Routes);

export default app;