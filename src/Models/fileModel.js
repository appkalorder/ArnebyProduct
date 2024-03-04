import apiurl from '../services/apiEndpoints.js';
import axios from 'axios';

class fileModel{
    static async post(obj){
        //Obtener la URL e la api para registrar
        const url = apiurl.newFile({ version: 'v1'});
        return await axios.post(url, obj, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        });
    }
}

export default fileModel;