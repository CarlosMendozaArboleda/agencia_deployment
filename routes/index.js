import express from 'express';
import { paginaInicio,
         paginaNosotros,
         paginaviajes,
         paginaTestimoniales,
         paginaDetalleViaje 
       } from '../controllers/paginascontroller.js';
       
import { guardarTestimonial } from '../controllers/testimonialcontroller.js';


const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros)
router.get('/viajes', paginaviajes)
router.get('/viajes/:slug', paginaDetalleViaje)
router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial)

export default router;