import Event from '../Models/eventModel.js';
import File from '../Models/fileModel.js';

export const getFormEvent = async (req, res) => {
    
    return res.render('eventForm', { session: req.session  });
};

export const postFormEvent = async (req, res) => {
    try {
        const file = req.files.thumbnail;
        const formData = new FormData();
        // Agregar imagen como Blob al FormData
        const blob = new Blob([file.data], { type: file.mimetype });
        formData.append('token', req.session.token);
        formData.append('file', blob, file.name);

        //Subir Archivo
        const resultFile = await File.post(formData);
        //Comprobar no fue stisfactorio, y no obtuvimos un token
        if (!resultFile.success){
            const errorMessage = Array.isArray(resultFile.data) ? resultFile.data[0].message : resultFile.msg;
            return res.render('eventForm', { err: errorMessage, session: req.session });
        }

        //Get Id Featured Image
        const idFeaturedImage = resultFile.data._id;
        //TimeStamp
        const startDate = new Date(req.body.startDate);
        const startDateTimestamp = startDate.getTime();
        //TimeStamp
        const endDate = new Date(req.body.endDate);
        const endDateTimestamp = startDate.getTime();

        // Agregar campos de texto como JSON
        const eventData = {
            title: req.body.title,
            content: req.body.description,
            category: req.body.category,
            location: {
                longitude: req.body.longitude,
                latitude: req.body.latitude,
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
                price: req.body.price
            }],
            startDate: startDateTimestamp,
            endDate: endDateTimestamp,
            featuredImage: idFeaturedImage,
        };

        //Los valores de la Api
        const result = await Event.post(formData);
        console.log(result);

        //Comprobar no fue stisfactorio, y no obtuvimos un token
        if (!result.success){
            const errorMessage = Array.isArray(result.data) ? result.data[0].message : result.msg;
            return res.render('eventForm', { err: errorMessage, session: req.session });
        }

        //Redireccionar al Login
        return res.render('eventForm', {ok : result.msg, session: req.session });

    } catch (err) {
        console.error(err);
        return res.render('eventForm', {err : "Error interno", session: req.session });
    }
};