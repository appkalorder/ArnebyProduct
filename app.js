import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import RedisStore from "connect-redis"
import {createClient} from "redis"
import morgan from 'morgan';
import path from 'path';
import Routes from './src/routes/index.js';
import cookieParser from 'cookie-parser';

const app = express();
const __dirname = path.resolve(); // Corregir la obtención de __dirname

// Initialize client.
let redisClient = createClient()
redisClient.connect().catch(console.error);


// Initialize store.
let redisStore = new RedisStore({
  client: redisClient,
  prefix: process.env.FRONTEND_URL || "ArnebyWeb:",
});

// Configuración de la aplicación
app.disable('x-powered-by'); // Deshabilitar el encabezado "X-Powered-By"
app.use(cookieParser()); // Usar Cookie Parser para trabajar con cookies

app.use(morgan('dev')); // Usar Morgan para registrar las solicitudes HTTP

//Inicializar la Web
try {
  app.use(session({
      store: redisStore,
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: true
  }))

  app.set('views', path.join(__dirname, 'src', 'views'));
  app.set('view engine', 'pug');
  app.use(express.static(path.join(__dirname, 'src', 'public'))); // Acceso a la carpeta Public

  // Definición de las rutas
  // Configurar body-parser para analizar solicitudes POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Rutas
  app.use(Routes);

} catch (error) {
  console.error('Error al configurar la aplicación:', error);
  
}

export default app;