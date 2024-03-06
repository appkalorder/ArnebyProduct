import { genUUID } from '../services/genUUID.js';

// Middleware para configurar CSP
export const CSP = (req, res, next) => {
    const nonce = genUUID();
    res.locals.nonce = nonce;
    res.setHeader('Content-Security-Policy', `script-src 'self' 'nonce-${nonce}'`);
    next();
};