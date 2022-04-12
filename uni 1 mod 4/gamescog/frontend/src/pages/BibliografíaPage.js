import '../styles/components/pages/Bibliografía.css';

import React from 'react';

const BibliografíaPage = (props) => {
    return (
        <main className="holder">
      <h2>Bibliografía</h2>
    <div className="bibliografía">
      <img src="img/biblio.jpg" width="960" height="250" alt="biblio" />
    <h3>Desarrollo Cognitivo y Videojuegos</h3>
    <h4>Mejora de Habilidades Cognitivas mediante el uso de videojuegos</h4>
    <p><li><a href="https://www.pantallasamigas.net/estudios-videojuegos-mejoran-habilidades-cognitivas/" TARGET="window">ESTUDIOS AFIRMAN QUE JUGAR A VIDEOJUEGOS MEJORA LAS HABILIDADES COGNITIVAS</a></li></p>
    
</div>

<div className="bibliografía">
    <h3>PacMan Cognitivo</h3>
    <h4>Funciones Cognitivas en juego con el PacMan</h4>
    <p><li><a href="https://blog.neuronup.com/que-funciones-cognitivas-ponemos-en-juego-con-el-pac-man/" TARGET="window">¿Qué funciones cognitivas ponemos en juego con el Pac-man?</a></li></p>
    
</div>

<div className="bibliografía">
    <h3>Tetris Cognitivo</h3>
    <h4>Efecto cognitivo del Tetris</h4>
    <p><li><a href="https://www.psicologia-online.com/en-que-consiste-el-efecto-tetris-5548.html#anchor_0" TARGET="window">Qué es el efecto Tetris</a></li></p>
    
</div>

    </main>
    );
}

export default BibliografíaPage;