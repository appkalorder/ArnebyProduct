import { Router } from 'express';
import { AcountRoute } from './acount.js';

//Express Routes
const router = Router();

router
    .get('/', (req, res) => {res.render('index')})

    //Rutas del perfile - cuenta del usuario
    .use('/account', AcountRoute)

    .get('/login', (req, res) => {res.render('login')})
    .get('/forget-pass', (req, res) => {res.render('forget-pass')})
    .get('/register', (req, res) => {res.render('register')});


//Page 404
router.use((req, res) => {res.status(404).render('404')});

export default router;