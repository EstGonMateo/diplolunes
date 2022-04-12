import '../../styles/components/layout/Header.css';

import React from 'react';

const Header = (props) => {
    return(
    <header>
         <div className="holder">
         <div className="logo">
          <img src="images/logo.png" width="100" 
               alt="GamesCog" />       
          <h1>GamesCog</h1>
         </div>
       </div>
    </header>   
    );
}

export default Header;