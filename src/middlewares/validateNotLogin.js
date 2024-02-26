const { SECRET_KEY_TOKEN } = process.env;
import jwt from 'jsonwebtoken';

export const authNotLogin = (req, res, next) => {
    // Usuario no logueado o token inválido, permitir que continúen o redirigirlos a la página de inicio de sesión
    next();
}