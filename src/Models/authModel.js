import apiurl from '../services/apiEndpoints.js';
import errorCatch from '../Models/errorModel.js';
import axios from 'axios';

class authModel{
    static async login({email, password}){
        // Obtener la URL de la API para iniciar sesión
        const url = apiurl.login({ version: 'v1' });

        return await axios.post(url, { email, password })
            .then(response => {
                // Si la solicitud se realiza con éxito, devuelve los datos de la API
                return response.data;
            })
            .catch(error => {
                return errorCatch(error);
            });
    }

    static async register({name, lastname, email, password}){
        //Obtener la URL e la api para registrar
        const url = apiurl.register({ version: 'v1'});

        return await axios.post(url, {name, lastname, email, password})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return errorCatch(error);
            });
    }

    static async lostPassword({email}){
        //Obtener la URL e la api para registrar
        const url = apiurl.lostPassword({ version: 'v1'});

        return await axios.post(url, { email })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return errorCatch(error);
            });
    }

    static async newPassword({ password, token }) {
        //Obtener la URL e la api para registrar
        const url = apiurl.newPassword({ version: 'v1'});

        return await axios.post(url, { token, password })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return errorCatch(error);
            });
    }
}

export default authModel;