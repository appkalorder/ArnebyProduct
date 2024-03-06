// Función para manejar errores de la API
const errorModel = (error) => {
    if (error.response) {
        return error.response.data;
    }
    return {
        status: 500,
        success: false,
        code: 'api-error',
        msg: 'API Error, temporarily not available',
        data: {}
    };
};

// Exportar la función como export default
export default errorModel;