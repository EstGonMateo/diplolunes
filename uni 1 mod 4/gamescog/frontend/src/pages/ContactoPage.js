import React, { useState } from 'react';
import axios from 'axios';

import '../styles/Contacto.css';
const ContactoPage = (props) => {

    const initialForm = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
               oldData,
            [name]: value //forma dinamica  
        }));
    } 

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
 axios.post('http://localhost:3000/api/contacto', formData);
         setSending(false);
         setMsg(response.data.message);
         if (response.data.error === false) {
             setFormData(initialForm)
         }
    }
   
   
   
    return (
        <main className="holder">
  <img src="images/foto2.jpg" width="960" height="250" alt="foto contacto" />
  <div className="Columna contacto">
    
  <h2>Contacto Rápido</h2>
<form action="/contacto" method="" className="formulario" onSubmit={handleSubmit} >
   <p>
    <label>Nombre</label>
    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
   </p>
   
   <p>
    <label>Teléfono</label>
    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
   </p>
   <p>
     <label>Email</label>
     <input type="text" name="email" value={formData.email} onChange={handleChange} />
   </p>
   <p>
     <label>Comentario</label>
     <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea></p>
   
   <p className="centrar"><input type="submit" value="Enviar"/></p>
   </form>
   {sending ? <p>Enviando...</p> : null}
   {msg ? <p>{msg}</p> : null}
   
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