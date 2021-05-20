import { Testimonial } from '../models/Testimonial.js';

const guardarTestimonial = async (req,res) => {

     //Validar formulario
     const  { nombre, correo, mensaje } = req.body;

     const errores = [];

     if (nombre.trim() === '') {
          errores.push('El nombre esta vacio');
     }
     if ( correo.trim() === '') {
          errores.push('El correo esta vacio');
     }
     if (mensaje.trim() === ''){
          errores.push('El mensaje esta vacio');
     }
     
     
      if (errores.length > 0) {

          //Consultar Testimonilaes
          const testimoniales = await Testimonial.findAll();

          //Mostrar la vista con errores
          res.render('testimoniales', {
               pagina: 'Testimoniales',
               errores,
               nombre,
               correo,
               mensaje,
               testimoniales
          })
     } else {

          //Guardar en base de Datos
          try {
               await Testimonial.create({
                    nombre,
                    correo,
                    mensaje
               })

               res.redirect('/testimoniales')
          } catch (error) {
               console.log(error)
          }

     }
}

export {
     guardarTestimonial
}