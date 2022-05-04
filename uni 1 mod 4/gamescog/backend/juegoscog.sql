-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-05-2022 a las 23:41:16
-- Versión del servidor: 8.0.27
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `juegoscog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Los videojuegos “sandbox” y su potencial uso educativo', 'Minecraft y otros juegos parecidos podrían desarrollar las capacidades cognitivas de los jóvenes.', '\"Dentro del amplio abanico de géneros de videojuegos, los cuales todos pueden ofrecernos diferentes formas de aprender y potenciar habilidades cognitivas, existe un género que destaca entre todos debido a las innumerables posibilidades que puede llegar a ofrecer: los videojuegos tipo sandbox.\r\nEste género de videojuegos es conocido por ofrecer a sus jugadores un mundo abierto con grandes posibilidades de modificación y creación del entorno, además de seguir un argumento no lineal, donde muchas veces los objetivos los pone el propio jugador, posibilitándole así la oportunidad de potenciar su creatividad, fomentando la auto-narración y la construcción de historias y experiencias. Si a este cóctel se le suma la parte social que suelen incluir, este tipo de videojuegos se convierten en una gran herramienta para fomentar el aprendizaje, la creatividad y, claro está, la diversión\".\r\n\"El impacto de este videojuego sandbox es de tal magnitud que existe una extensa comunidad, tanto en España como fuera, que se dedica a estudiar y realizar la implementación de Minecraft en las aulas para favorecer la implicación de los alumnos en el aprendizaje de ciertos contenidos y en la fomentación de la creatividad y el aprendizaje autónomo.\r\nOtra gran ventaja que supone el uso de videojuegos de género sandbox es que la gran mayoría de ellos suelen ir acompañados de una extensa comunidad de jugadores en línea que promueven, mediante complejos códigos de conducta, la actividad prosocial y el sentimiento de inclusión sean cuales sean las diferencias socioeconómicas de los jugadores; de forma que acaban siendo, valga la expresión: \"simuladores del buen ciudadano\", aportando un valor extra a la experiencia educativa resultante de su uso\".\r\n\r\nhttps://psicologiaymente.com/psicologia/videojuegos-sandbox-uso-educativo', 'p8kfcwan1vejntn1dnv5'),
(2, 'Psicoterapia a través de los videojuegos: ¿es eficaz?', 'Tratar enfermedades psicológicas a través de los videojuegos... ¿futuro o presente?', 'El potencial terapéutico del videojuego:\r\n\r\n\"En un artículo anterior hablábamos sobre el uso educativo que podía tener un género de videojuegos, con gran proyección, llamado sandbox. Este género en especial posee grandes cualidades para ser utilizado, también, como herramienta para llevar a cabo terapias de diferentes tipos, como por ejemplo terapias de rehabilitación cognitiva.\r\nEl elemento clave que posee este género de videojuegos es la libertad de acción dentro de un mundo que, por lo general, simula el mundo real. Este elemento ve potenciada su acción si además le añadimos funcionalidades de juego social que, por el mero hecho de fomentar la relación social, ya supone en sí mismo un elemento terapéutico, tal y como vimos en un artículo anterior en el que analizábamos las posibilidades terapéuticas de Pokémon Go\".\r\n\r\nEl poder de los mundos virtuales en los videojuegos:\r\n\r\n\"La mente humana es capaz de realizar proezas asombrosas, y de entre todas ellas, la capacidad de establecer conexiones emocionales e intelectuales con mundos virtuales abre la posibilidad de realizar un sinfín de prácticas terapéuticas que no serían posibles hacer si la industria del videojuego no se encontrase en el punto en el que se encuentra\".\r\n\r\n\"La capacidad de empatía que poseemos como humanos nos permite adentrarnos en los mundos virtuales que ofrecen los videojuegos a un nivel muy alto, sobre todo si añadimos las novedosas técnicas de Realidad Virtual que potencian muchísimo la inmersión del jugador en el videojuego, haciendo que la sensación de estar dentro de él sea sorprendente. Esto abre una nueva vía de posibilidades para realizar psicoterapia, permitiendo al usuario adentrarse en un mundo en el que nosotros establecemos los parámetros deseados para que su experiencia sea enriquecedora y terapéutica en según qué contextos.\r\nComo muestra de esto, cada vez son más los experimentos llevados a cabo con esta temática, y los resultados en la gran mayoría de los estudios muestran un gran potencial por parte de los videojuegos en la metodología de terapia\".\r\n\r\n\"Un buen ejemplo de este tipo de estudios es el que llevaron a cabo Llorens et al. (2015), en el que realizaron una terapia grupal basada en videojuegos en individuos que sufrían algún tipo de lesión cerebral traumática. Una hora por semana durante seis meses, este grupo realizó un tipo de terapia diseñada por los autores, y los resultados mostraron que se trataba de una experiencia muy efectiva y motivadora, ya que mejoraron sustancialmente la conciencia sobre uno mismo, las habilidades sociales y sus comportamientos, teniendo en cuenta que se trataba de pacientes con lesiones cerebrales traumáticas\".\r\n\r\n\"Otro estudio interesante es el llevado a cabo por Fernandez-Aranda et al. (2015) en el que se pusieron a prueba los videojuegos como herramienta para realizar terapia cognitivo-conductual en pacientes con bulimia nerviosa. En este estudio se comprobó cómo la terapia cognitivo-conductual, junto con los llamados serious games, podía servir de gran ayuda en la desregulación emocional de los pacientes. Haciendo uso de ambos, observaron que los pacientes con bulimia nerviosa sufrieron menos abandonos y mayor remisión de los síntomas, tanto parcial como total, en comparación al grupo control que sólo realizaba la terapia cognitiva conductual sin el apoyo del videojuego\".\r\n\"Por otro lado, estudios como los de Krzywinska (2015), Younbo et al. (2015), Servais (2015) o Smethhurst (2015), nos muestran que los videojuegos pueden ser utilizados por los terapeutas para potenciar el insight de los pacientes y conseguir información más profunda sobre su persona, especialmente en videojuegos survival horror, first person shooters y role playing games, ya que tratan temas que en muchos casos son tabú, como por ejemplo funerales, muerte e incluso trauma. Bajo un contexto terapéutico, la inmersión del paciente dentro de estos mundos virtuales donde se tratan estos temas puede aportar información muy valiosa y que de otra forma podría ser mucho más dificultosa de conseguir\".\r\n\r\n\"Por último, recientemente se publicó un estudio llevado a cabo por Sevick et al. (2016) en el que realizaron un tipo de terapia de movimiento en las extremidades superiores en pacientes con parálisis cerebral, utilizando videojuegos y el sensor de movimiento Microsoft Kinect. En este estudio observaron que los niveles de motivación en la realización de los ejercicios eran considerablemente mayores cuando hacían uso de esta plataforma que integra videojuegos y movimiento, obteniendo así un mayor rendimiento y la posibilidad de trasladar la intervención al domicilio de los pacientes, debido al alto rendimiento en comparación a los ejercicios realizados en el centro clínico o laboratorio\".\r\n\r\nhttps://psicologiaymente.com/clinica/psicoterapia-videojuegos', 'aquaaidil83blygykrwn'),
(5, 'Juegos Shooter para desarrollo Cognitivo', 'El beneficio cognitivo de los juegos Shooter', 'Los Juegos Shooter son juegos que permiten el desarrollo cognitivo de la funciones de atención selectiva, atención dinámica, velocidad de procesamiento, resolución de problemas, coordinación viso-motora, memoria, memoria de trabajo, entre otras.    ', 'juxkp2yub4glaw052ln1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'esteban', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
