import { Router } from 'express';

export const AcountRoute = Router();

AcountRoute
    .get('/', (req, res) => {res.render('profile')});