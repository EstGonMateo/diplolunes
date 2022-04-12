import '../styles/components/pages/Contacto.css';

import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">
  <div className="contacto">
    <img src="img/foto2.jpg" width="960" height="250" alt="foto contacto" />
    </div>
  <div className="columna left">
    <h1>Datos de contacto</h1>
  <ul>
<li>Cel:1165973882</li>
<li>Email: b.mateo.86@hotmail.com</li>
</ul>
 </div>

 <div className="columna right">
   <h1>Contacto Rápido</h1>
 <form action="" method="" class="formulario">
   <p>
   <label for="">Nombre</label>
   <input type="text" name="nombre" placeholder="nombre" />
   </p>
   <p>
   <label for="">Apellido</label>
   <input type="text" name="apellido" placeholder="apellido" />
   </p>
   <p>
     <label for="">Tel</label>
     <input type="tel" name="telefono" placeholder="número" />
   </p>
   <p>
     <label for="">Email</label>
     <input type="text" name="email" placeholder="email" />
   </p>
   <p>
     <label for="comentario">Comentario</label>
     <textarea id="comentario"></textarea>
   </p>
<p>
   <input type="submit" value="Enviar" />
   <input type="reset" value="Borrar" />
</p>
 </form>
</div>

</main>
    );
}

export default ContactoPage;