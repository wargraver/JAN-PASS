import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import home from './pages/home';
import './App.css';
import advisory from './pages/advisory';
import pass from './pages/pass';
import complain from './pages/complain';
import help from './pages/help';
import axios from 'axios';

class App extends Component {
 
 constructor(props){
    super(props);
    this.state={
      loggedIn:false,
      email:null,
      password:null
    }
  

 }
 handleChange(e){
   e.preventDefault();
   this.setState({
     email:e.target.value,
     password:e.target.value
   });
 }
 handleSubmit(e){
   e.preventDefault();
   if(this.state.email!=null && this.state.password!=null){
     this.setState({
       loggedIn:true
     })
   }

 }

  render() {
     var {loggedIn,email,password}=this.state;
    if(loggedIn!==true){
      return(
        <div className="login-page">
        <div className="login-page-head"><span className="safron">Jann</span><span className="green">Pass</span></div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
        <input type="email" placeholder="Enter Registered Adhaar verified email" name="email" onChange={(e)=>this.handleChange(e)}></input>
        <input type="password" placeholder="Enter your password" name="password" onChange={(e)=>this.handleChange(e)}></input>
        <button type="submit">Sign in </button>
        </form>
        </div>
      )
    }
   
   
   
   else{
    return(



      

    <Router>
    <div className="App">
    <header>
    <nav>
    <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/advisory">Advisory</Link></li>
    <li><Link to="/complain">Complain</Link></li>
    <li><Link to="/help">Help</Link></li>
   
    </ul>
    </nav>
    <Link className="nav-button" to="/pass"><button>Get Pass</button></Link>
    </header>
    <Route path="/" exact component={home}></Route>
    <Route path="/advisory" exact component={advisory}></Route>
    <Route path="/pass" exact component={pass}></Route>
    <Route path="/complain" exact component={complain}></Route>
    <Route path="/help" exact component={help}></Route>
   
        
        
    <footer>
    <div className="footer-text">
    Built in public interest.
    </div>
    </footer>
    </div>
      </Router>
    )

      }

}
}

export default App;
