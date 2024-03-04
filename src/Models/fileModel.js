import apiurl from '../services/apiEndpoints.js';
import axios from 'axios';
import fs from 'fs';

class fileModel{
    static async post({ file, token }) {
        // Obtener la URL de la API para registrar
        const url = apiurl.newFile({ version: 'v1' });

        const imageBuffer = fs.readFileSync(file.tempFilePath);
        const blob = new Blob([imageBuffer], { type: 'image/jpeg' });

        const formData = new FormData();
        formData.append('token', token);
        formData.append('file', blob, file.name );

        try {
            const response = await axios.post(url, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            return response.data;
        } catch (error) {
            console.error('Error en la solicitud:', error.response.data);
            throw error.response.date;
        }
    }
}

export default fileModel;