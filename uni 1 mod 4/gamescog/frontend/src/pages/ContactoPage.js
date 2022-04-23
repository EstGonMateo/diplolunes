import '../styles/Contacto.css';
const ContactoPage = (props) => {
    return (
        <main className="holder">
  <img src="images/foto2.jpg" width="960" height="250" alt="foto contacto" />
  <div className="Columna contacto">
    
  <h2>Contacto Rápido</h2>
<form action="" method="" className="formulario">
   <p>
    <label>Nombre</label>
    <input type="text" name="nombre"/>
   </p>
   
   <p>
    <label>Teléfono</label>
    <input type="text" name="telefono"/>
   </p>
   <p>
     <label>Email</label>
     <input type="text" name="email"/>
   </p>
   <p>
     <label>Comentario</label>
     <textarea name="mensaje"></textarea></p>
   
   <p className="centrar"><input type="submit" value="Enviar"/></p>
   
 </form>
</div>

<div className="coluumna datos">
  <h2>Datos de contacto</h2>
   <ul>
    <li>Cel:1165973882</li>
    <li>Email: b.mateo.86@hotmail.com</li>
   </ul>
</div>
</main>
    )
}

export default ContactoPage;