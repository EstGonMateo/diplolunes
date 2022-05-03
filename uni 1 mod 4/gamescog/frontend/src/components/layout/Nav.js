import '../../styles/Nav.css';
//import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return(
        <nav>
           <div className="holder">
                <ul>
                    <li><NavLink activeClassName='activo' exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/autor">Autor</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/info">Info</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/vjuegoscognitivos">Vjuegoscognitivos</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/bibliografía">Bibliografía</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/contacto">Contacto</NavLink></li>
                </ul>
           </div>
        </nav>
    );
 }   

 export default Nav;