// Middleware para configurar CSP
export const CSP = (req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self' *.arneby.com; img-src *; script-src *; style-src *;");
    next();
};