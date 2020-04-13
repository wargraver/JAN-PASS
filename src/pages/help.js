import React, { Component } from 'react';
import {BrowserRouter as Router,Route, NavLink } from 'react-router-dom';

class help extends Component{

  render(){

   return(

    <div className="pass__wrapper">
    <div className="pass-block-1">
    <div className="pass-block-1-text"><span className="safron">He</span><span className="green">lp</span></div>
    <div className="pass-block-1-shape"></div>
    </div>
    <h2>Watch For Symptoms</h2>
    <div className="help-block-2-image">
     <div className="help-image-1"></div>
     <div className="help-image-2"></div>
     <div className="help-image-3"></div>
    </div>
    <div className="help-text">
    <div className="help-text-inner">Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.<br/>These symptoms may appear 2-14 days after exposure (based on the incubation period of MERS-CoV viruses).
    <ul className="help-list">
    <li className="help-list-element">Fever</li>
    <li className="help-list-element">Cough</li>
    <li className="help-list-element">Shortness Of breath</li>
    </ul>
    <div className="help-highlight">
    <h4>When to seek medical attention ?</h4>
    <p>If you develop emergency warning signs for COVID-19 get medical attention immediately. Emergency warning signs include*:</p>
    <ul className="help-list">
    <li className="help-list-element">Trouble breathing</li>
    <li className="help-list-element">Persistent pain or pressure in the chest</li>
    <li className="help-list-element">New confusion or inability to arouse</li>
    <li className="help-list-element">Bluish lips or face</li>
    </ul>
    <p>*This list is not all inclusive. Please consult your medical provider for any other symptoms that are severe or concerning.</p>
    </div>
    </div>
    </div>
    <h2>Central Helpline</h2>
    <div className="helpline">
    <div>Helpline Number :+91-11-23978046  </div><div>Toll Free : 1075  </div><div>Helpline Email ID : ncov2019@gov.in</div>
     </div>
    </div>

   )

  }


}
export default help;