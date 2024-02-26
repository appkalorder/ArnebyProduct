const { SECRET_KEY_TOKEN } = process.env;
import jwt from 'jsonwebtoken';


export const authLogin = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    next();
}