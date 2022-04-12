import '../styles/components/pages/HomePage.css';

import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
    <div className="homeimg">
      <img src="img/tetrisbrain.jpg" width="960" height="250" alt="tetrisbrain" />
    </div>
    <div className="columnas">
      <div className="Descripción left">
           <h2>Descripción</h2>
           <p>Página que brinda información acerca de como los videojuegos pueden ser utilizados como herramienta para la estimulación del desarrollo cerebral, en base al entrenamiento de las distintas funciones cognitivas.</p>
    </div>
    </div>
    </main>    
    );
}

export default HomePage;