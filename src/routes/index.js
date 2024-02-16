import { Router, json } from 'express';
const router = Router();

router
    .get('/', (req, res) => {res.render('index')})
    .get('/panel', (req, res) => {res.render('panel')})
    .get('/panel/app', (req, res) => {res.render('app')})
    .get('/panel/add', (req, res) => {res.render('panel-add')})
    .get('/panel/:idapp/post', (req, res) => {res.render('post')})
    .get('/login', (req, res) => {res.render('login')})
    .get('/rescue',  (req, res) => {res.render('forget-pass')})
    .get('/register', (req, res) => {res.render('register')});
//404
router.use((req, res) => {res.status(404).render('404')});

export default router;