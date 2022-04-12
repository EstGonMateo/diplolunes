import '../styles/components/pages/Autor.css';

import React from 'react';

const AutorPage = (props) => {
    return (
     <section className="holder">
<h2>Autor</h2>
    <div class="personas">
      <div class="persona">
      <img src="img/fotoperfil.jpg" alt="Esteban.G.Mateo"/>
       <h5>Esteban.G.Mateo</h5>
       <h6>Psicólogo y Escritor</h6>
       <p>Me llamo Esteban Gonzalo Mateo, soy Psicólogo Cognitivo y Escritor.</p>
    </div>
    </div>
     </section>   
        
    );
}

export default AutorPage;