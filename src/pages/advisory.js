import React, { Component } from 'react';
import {BrowserRouter as Router,Route, NavLink } from 'react-router-dom';


class advisory extends Component{

    render() {
        return(

            <div className="pass__wrapper">
        <div className="pass-block-1">
        <div className="pass-block-1-text"><span className="safron">Advi</span><span className="green">sory</span></div>
        <div className="pass-block-1-shape"></div>
        </div>
            
            <div className="advisory">
            
      
      <div className="adv">
      <p><span className="num">1-</span>Avoid contact with people. Atleast maintain a 2 feet gap with others.</p>
      </div>
      <div className="adv">
      <p><span className="num">2-</span>Stay at home. Other than essential services employee, no other employee is allowed to leave their home.
      </p></div>
      <div className="adv">
      <p><span className="num">3-</span>Wash/Sanitise your hand regularly specially before eating or touching face.</p>
      </div>
      <div className="adv">
      <p><span className="num">4-</span>Everyone is advised to not overfill their rashans as enough resources are available for everyone.</p>
      </div>
      <div className="adv">
      <p><span className="num">5-</span>It is request to everyone that do not stop payments of people working for your households/company. Together we will fight this disease. 
      </p></div>
      <div><p>For any health related query navigate to Help page.</p></div>
            
            
            </div>

            </div>
            
            
        )
   


    }
    


}
export default advisory;