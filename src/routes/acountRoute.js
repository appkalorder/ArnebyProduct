import { Router } from 'express';

export const AcountRoute = Router();

AcountRoute
    .get('/', (req, res) => {res.render('profile', { session: req.session })})
    .get('/post', (req, res) => {res.render('eventForm', { session: req.session })})