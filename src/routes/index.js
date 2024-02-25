import { Router } from 'express';
import { AcountRoute } from './acount.js';
import { authNotLogin } from '../middlewares/validateNotLogin.js';
const router = Router();

router
    .get('/', (req, res) => {res.render('index')})

    //Rutas del perfile - cuenta del usuario
    .use('/account', AcountRoute)

    .get('/panel/app', (req, res) => {res.render('app', {islogged: array})})
    .get('/panel/add', (req, res) => {res.render('panel-add')})
    .get('/panel/:idapp/post', (req, res) => {res.render('post')})

    .get('/login', authNotLogin,(req, res) => {res.render('login')})
    .get('/forget-pass', authNotLogin,  (req, res) => {res.render('forget-pass')})
    .get('/register', (req, res) => {res.render('register')});
//404
router.use((req, res) => {res.status(404).render('404')});

export default router;