import {Viaje} from '../models/viajes.js';
import { Testimonial } from '../models/testimoniales.js';

//INICIO
const paginaInicio = async(req, res) => {
   
   // Consultar 3 viajes del modelo Viaje

   const promiseDB = [];
   promiseDB.push(Viaje.findAll({limit: 3}));
   promiseDB.push(Testimonial.findAll({limit:3}));
   
   try {
      const resultado = await Promise.all(promiseDB);

         res.render('inicio',{
            pagina:'inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
         });

   } catch (error) {
      console.log(error);
   }

};

//NOSOTROS
const paginaNosotros = (req, res) => {
   
   res.render('Nosotros', {
        pagina: 'Nosotros'
   });
};

//VIAJES
const paginaViajes = async (req, res) => {
   
   //consultar base de datos;
   const viajes = await Viaje.findAll();
   console.log(viajes);
   
   res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes,
   });
}

//TESTIMONIALES
const paginaTestimoniales = async  (req, res) => {
   
   // const viajes = 'Viaje a Alemania';

   try {

      //consultar modelo de testimoniales
      const testimoniales = await Testimonial.findAll();

      res.render('Testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
         });
      
   } catch (error) {
      console.log(error);
   }
}


//Viaje por su slug
const paginaDetalleViaje = async (req, res) =>{
    
    const {viajeSlug} = req.params;

    try{
      const viajeResultado = await Viaje.findOne({where : {slug: viajeSlug}});

      res.render('viaje', {
         pagina : 'Informacion Viaje',
         viajeResultado
      })
    }catch(error){
      console.log(error);
    }
}



export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}