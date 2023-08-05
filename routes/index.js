import express from 'express';
import { paginaDetalleViaje, 
         paginaInicio, 
         paginaNosotros, 
         paginaTestimoniales, 
         paginaViajes } from '../controllers/paginaController.js';
import {guardaTestimonial} from '../controllers/testimonialController.js'


const router = express.Router();

router.get('/', paginaInicio);


router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:viajeSlug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardaTestimonial);


router.get('/Contacto', (req, res) => {
   res.send('Contacto');
});

export default router;