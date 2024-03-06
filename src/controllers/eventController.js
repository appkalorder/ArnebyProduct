import Event from '../Models/eventModel.js';
import File from '../Models/fileModel.js';
import fs from 'fs';
import Category from '../Models/categoryModel.js';


export const getFormEvent = async (req, res) => {
    const categories = await Category.get({});
    return res.render('eventForm', { categories: categories.data, session: req.session  });
};

export const postFormEvent = async (req, res) => {
    //Obtenemos las categorias
    const categories = await Category.get({});

    try {
        const file = req.files.thumbnail;
        const token = req.session.token;

        // Subir Archivo
        const resultFile = await File.post({ file, token });
        //Comprobar no fue stisfactorio, y no obtuvimos un token
        if (!resultFile.success){
            const errorMessage = Array.isArray(resultFile.data) ? resultFile.data[0].message : resultFile.msg;
            return res.render('eventForm', { err: errorMessage, categories: categories.data, session: req.session });
        }

        // Eliminar el archivo temporal después de subirlo
        fs.unlink(file.tempFilePath, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo temporal:', err);
            }
        });


        //Get Id Featured Image
        const idFeaturedImage = resultFile.data._id;
        //TimeStamp
        const startDate = new Date(req.body.startDate);
        const startDateTimestamp = startDate.getTime();
        //TimeStamp
        const endDate = new Date(req.body.endDate);
        const endDateTimestamp = endDate.getTime();

        // Agregar campos de texto como JSON
        const eventData = {
            token: req.session.token,
            title: req.body.title,
            content: req.body.description,
            category: req.body.category,
            location: {
                longitude: parseFloat(req.body.longitude),
                latitude: parseFloat(req.body.latitude),
                address: req.body.address,
            },
            virtual: req.body.presencial === 'on' ? true : false,
            links: [{
                title: "¡Me apunto!",
                url: req.body.url,
            }],
            prices: [{
                plan: "Entrada",
                benefits: [""],
                price: parseFloat(req.body.price)
            }],
            startDate: startDateTimestamp,
            endDate: endDateTimestamp,
            featuredImage: idFeaturedImage,
        };

        //Los valores de la Api
        const result = await Event.post(eventData);

        //Comprobar no fue stisfactorio, y no obtuvimos un token
        if (!result.success){
            const errorMessage = Array.isArray(result.data) ? result.data[0].message : result.msg;
            console.log(categories);
            return res.render('eventForm', { err: errorMessage, categories: categories.data, session: req.session });
        }

        //Redireccionar al Login
        return res.render('eventForm', {ok : result.msg, categories: categories.data, session: req.session });

    } catch (err) {
        console.log(categories);
        return res.render('eventForm', {err : "Error interno", categories: categories.data, session: req.session });
    }
};