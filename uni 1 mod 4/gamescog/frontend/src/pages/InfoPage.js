import '../styles/components/pages/Info.css';

import React from 'react';

const InfoPage = (props) => {
    return (
        <main className="holder">
    <div className="info">
      <img src="img/vjest.jpg" width="960" height="250" alt="vjest" />
    </div>
    <div className="columnas">
      <div className="Videojuegos y estimulación cognitiva left">
           <h2>Videojuegos y estimulación cognitiva</h2>
           <p>Se describen aqui algunos de los muchos beneficios que puede generar la práctica de videojuegos.</p>
           <img src="img/benvj.jpg" width="800" height="600" alt="benvj" />
           <p>"La revista científica Nature publicó un estudio en abrir de 2015, en el que afirman que «un uso continúo y responsable de videojuegos sería capaz de incrementar la masa gris en nuestro cerebro, la cual nos ayuda a realizar procesos complejos a una mayor velocidad y eficacia».

El estudio realizado por doctores e investigadores de la Universidad China de Ciencia y Tecnología Electrónica en compañía de miembros de la Universidad Macquarie de Australia, puso en prueba a 27 jugadores expertos en videojuegos (algunos profesionales de los videojuegos «Dota 2» y «League of Legends») frente a 30 jugadores casuales en un periodo de varios meses.

El equipo de científicos se fijó en una región muy específica del cerebro, la llamada ínsula o córtex insular, una parte muy grande, que está relacionada con los procesos lingüísticos de la persona y de otros elementos muy importantes en nuestro día a día, como las emociones y sentimientos, y otros aspectos relacionados con el olor, el sabor o incluso la necesidad de comida y agua.

Gracias a este estudio, y a través de fotografías y escáneres en 3D, habrían probado que la ínsula de un jugador profesional tendría una conectividad neuronal más sólida y mejorada y un mayor índice de materia gris. Esta materia, es la que define y controla básicamente cualquier función de nuestro cerebro, sería mucho más densa y mayor en una persona aficionada a los videojuegos que una que no tiene un acercamiento constante a los mismos.

«Jugar de niño a videojuegos mejora las habilidades cognitivas, incluso años después»".
<li><a href="https://www.pantallasamigas.net/estudios-videojuegos-mejoran-habilidades-cognitivas/" TARGET="window">ESTUDIOS AFIRMAN QUE JUGAR A VIDEOJUEGOS MEJORA LAS HABILIDADES COGNITIVAS</a></li>
</p>
    </div>
    </div>
    </main>
    );
}

export default InfoPage;