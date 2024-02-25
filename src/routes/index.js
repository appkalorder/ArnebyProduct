import { Router } from 'express';
import { AcountRoute } from './acount.js';
import { authNotLogin } from '../middlewares/validateNotLogin.js';

//Controllers
import { pageHome } from '../controllers/appController.js';

//Express Routes
const router = Router();

router
    .get('/', pageHome)

    //Rutas del perfile - cuenta del usuario
    .use('/account', AcountRoute)

    .get('/panel/app', (req, res) => {res.render('app')})
    .get('/panel/add', (req, res) => {res.render('panel-add')})
    .get('/panel/:idapp/post', (req, res) => {res.render('post')})

    .get('/login', authNotLogin,(req, res) => {res.render('login')})
    .get('/forget-pass', authNotLogin,  (req, res) => {res.render('forget-pass')})
    .get('/register', (req, res) => {res.render('register')});


//Page 404
router.use((req, res) => {res.status(404).render('404')});

export default router;