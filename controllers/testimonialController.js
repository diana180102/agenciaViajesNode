import { Testimonial } from "../models/testimoniales.js";

const guardaTestimonial = async (req, res) =>{
    // console.log(req.body);

    //validar

    const {nombre, correo , mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'});
    }

     if(correo.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    // console.log(errores);

    if(errores.length>0){
         
         //Consultar 
         const testimoniales = await Testimonial.findAll();

        //Mostrar vista con errores

        res.render('testimoniales', {
            pagina : 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }else{
        // Almacenarlo en la base de datos

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error);
        }

    }
}

export {
    guardaTestimonial
}