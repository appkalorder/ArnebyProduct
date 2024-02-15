import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const PORT = process.env.PORT ?? 3000;

const app = express();
app.disable('x-powered-by'); // Deshabilitar el encabezado "X-Powered-By"

app.use(morgan('dev')); // Usar Morgan para registrar las solicitudes HTTP
app.use(cookieParser()); // Usar Cookie Parser para trabajar con cookies

const base = '/';
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);

app.listen(PORT);