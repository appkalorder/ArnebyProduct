import Auth from '../Models/authModel.js';

export const getLogin = async (req, res) => {
    return res.render('login');
};

export const postLogin = async (req, res) => {
    try {
        // Ahora `req.body` contendrá los datos enviados desde el formulario
        const { email, password } = req.body;
        //Error no hay valor del correo
        if (!email) return res.render('login', { err: "Falta el correo electrónico." });
        //Error no hay valor de la contraseña
        if (!password) return res.render('login', { err: "Falta la contraseña." });

        //Los valores de la Api
        const result = await Auth.login({email: email, password: password});

        //Comprobar no fue stisfactorio, y no obtuvimos un token
        if (!result.success && !result.data.token || !result.success){
            return res.render('login', {err : result.msg});
        }

        //Guardamos Session
        req.session.logged = true;
        req.session.token = result.data.token; //Guardamos Token
        req.session.name = result.data.user.name; //Guardamos Nombre
        req.session.role = result.data.user.role; //Guardamos Role
        req.session.avatar = result.data.user.avatar; //Guardamos Avatar

        //Redireccionar a cuenta
        return res.redirect('account');

    } catch (err) {
        return res.render('login', {err : "Error interno"});
    }
};



export const getRegister = async (req, res) => {
    return res.render('register');
};



export const postRegister = async (req, res) => {
    try {
        // Ahora `req.body` contendrá los datos enviados desde el formulario
        const { email, password } = req.body;
        //Error no hay valor del correo
        if (!email) return res.render('register', { err: "Falta el correo electrónico." });
        //Error no hay valor de la contraseña
        if (!password) return res.render('register', { err: "Falta la contraseña." });

        //Los valores de la Api
        const result = await Auth.login({email: email, password: password});

        //Comprobar no fue stisfactorio, y no obtuvimos un token
        if (!result.success && !result.data.token || !result.success){
            return res.render('register', {err : result.msg});
        }

        //Redireccionar al Login
        return res.redirect('/login');

    } catch (err) {
        return res.render('register', {err : "Error interno"});
    }
};

export const getForgetPass = async (req, res) => {
    return res.render('forget-pass');
};

export const postForgetPass = async (req, res) => {
    return res.render('forget-pass');
};

export const getNewPass = async (req, res) => {
    return res.render('new-pass');
};

export const postNewPass = async (req, res) => {
    return res.render('new-pass');
};