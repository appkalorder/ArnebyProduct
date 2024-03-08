import Auth from '../Models/authModel.js';

export const logout = async (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

export const getLogin = async (req, res) => {
    return res.render('login', { session: req.session });
};

export const postLogin = async (req, res) => {
    try {
        // Ahora `req.body` contendrá los datos enviados desde el formulario
        const { email, password } = req.body;
        //Error no hay valor del correo
        if (!email) return res.render('login', { err: "Falta el correo electrónico.", session: req.session });
        //Error no hay valor de la contraseña
        if (!password) return res.render('login', { err: "Falta la contraseña.", session: req.session  });

        //Los valores de la Api
        const result = await Auth.login({email: email, password: password});

        //Comprobar no fue stisfactorio, y no obtuvimos un token
        if (!result.success && !result.data.token || !result.success){
            const errorMessage = Array.isArray(result.data) ? result.data[0].message : result.msg;
            return res.render('login', { err: errorMessage, session: req.session });
        }

        //Guardamos Session
        req.session.logged = true;
        req.session.token = result.data.token; //Guardamos Token
        req.session.name = result.data.user.name; //Guardamos Nombre
        req.session.email = result.data.user.email; //Guardamos Email
        req.session.role = result.data.user.role; //Guardamos Role
        req.session.avatar = 'https://src.arneby.com'+ result.data.user.avatar; //Guardamos Avatar

        //Redireccionar a cuenta
        return res.render('login', {ok : "Login exitoso. Serás redirigido en unos segundos.", redir: '/account', session: req.session });

    } catch (err) {
        return res.render('login', {err : "Error interno", session: req.session });
    }
};



export const getRegister = async (req, res) => {
    return res.render('register', { session: req.session });
};



export const postRegister = async (req, res) => {
    try {
        // Ahora `req.body` contendrá los datos enviados desde el formulario
        const { name, lastname, email, password } = req.body;
        //Error no hay valor del correo
        if (!name) return res.render('register', { err: "Falta el nombre." });
        //Error no hay valor del correo
        if (!lastname) return res.render('register', { err: "Falta el apellido." });
        //Error no hay valor del correo
        if (!email) return res.render('register', { err: "Falta el correo electrónico." });
        //Error no hay valor de la contraseña
        if (!password) return res.render('register', { err: "Falta la contraseña." });

        //Los valores de la Api
        const result = await Auth.register({name: name, lastname: lastname, email: email, password: password});

        //Comprobar no fue stisfactorio, y no obtuvimos un token
        if (!result.success ){
            const errorMessage = Array.isArray(result.data) ? result.data[0].message : result.msg;
            return res.render('register', { err: errorMessage, session: req.session });
        }

        // Renderizar la pantalla con un mensaje de éxito
        res.render('register', { ok: "Registro exitoso. Serás redirigido en unos segundos.", redir: '/login', session: req.session });

    } catch (err) {
        return res.render('register', {err : "Error interno", session: req.session });
    }
};

export const getForgetPass = async (req, res) => {
    return res.render('forget-pass', { session: req.session  });
};

export const postForgetPass = async (req, res) => {
    try {
        // Ahora `req.body` contendrá los datos enviados desde el formulario
        const { email } = req.body;

        //Error no hay valor del correo
        if (!email) return res.render('forget-pass', { err: "Falta el correo electrónico." });

        //Los valores de la Api
        const result = await Auth.lostPassword({ email: email });

        //Comprobar no fue stisfactorio, y no obtuvimos un token
        if (!result.success){
            const errorMessage = Array.isArray(result.data) ? result.data[0].message : result.msg;
            return res.render('forget-pass', { err: errorMessage, session: req.session });
        }

        //Redireccionar al Login
        return res.render('forget-pass', {ok : result.msg, session: req.session });

    } catch (err) {
        return res.render('forget-pass', {err : "Error interno", session: req.session });
    }
};

export const getNewPass = async (req, res) => {
    //Token
    const token = req.params.token;

    //Error no hay valor del correo
    if (!token) return res.render('new-pass', { err: "Falta el token." });

    return res.render('new-pass', { token: token, session: req.session });
};

export const postNewPass = async (req, res) => {
    try {
        // Ahora `req.body` contendrá los datos enviados desde el formulario
        const { password, repeatpassword, token } = req.body;

        //Las contraseñás no son iguales
        if(password !== repeatpassword) {
            return res.render('new-pass', { err: "Las contraseñas no son iguales" })
        }

        //Error no hay valor del correo
        if (!token) return res.render('new-pass', { err: "Falta el token.", redir: '/forget-pass' });

        //Los valores de la Api
        const result = await Auth.newPassword({ password, token });

        //Comprobar no fue stisfactorio, y no obtuvimos un token
        if (!result.success){
            const errorMessage = Array.isArray(result.data) ? result.data[0].message : result.msg;
            return res.render('new-pass', { err: errorMessage, session: req.session });
        }

        // Renderizar la pantalla con un mensaje de éxito
        res.render('new-pass', { ok: "Contraseña actualizada exitosamente. Serás redirigido en unos segundos.", redir: '/login', session: req.session });

    } catch (err) {
        console.log(err);
        return res.render('new-pass', {err : "Error interno", session: req.session });
    }
};