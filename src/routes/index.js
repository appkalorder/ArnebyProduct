import { Router } from 'express';
import { AcountRoute } from './acountRoute.js';
import { authRoute } from './authRoute.js';
import { pageRoute } from './pageRoute.js';
import { CSP } from '../middlewares/useCSP.js';
import { authLogin } from '../middlewares/validateLogged.js';

//Express Routes
const router = Router();

router
    //Content Security Policy
    .use(CSP)

    //Paginas
    .use('/', pageRoute)

    //Logins
    .use('/', authRoute)

    //Rutas del perfile - cuenta del usuario
    .use('/account', authLogin, AcountRoute)

    //Page 404
    .use((req, res) => {res.status(404).render('404', { session: req.session })});

export default router;