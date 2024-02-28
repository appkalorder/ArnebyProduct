import apiurl from '../services/apiEndpoints.js';
import axios from 'axios';

class authModel{
    static async login({email, password}){
        // Obtener la URL de la API para iniciar sesión
        const loginUrl = apiurl.login({ version: 'v1' });

        return await axios.post(loginUrl, { email, password })
            .then(response => {
                // Si la solicitud se realiza con éxito, devuelve los datos de la API
                return response.data;
            })
            .catch(error => {
                // Si hay un error, devuelve los datos de error de la respuesta
                return error.response.data;
            });
    }
}

export default authModel;