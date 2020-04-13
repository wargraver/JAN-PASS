import React, { Component } from 'react';
import {BrowserRouter as Router,Route, NavLink } from 'react-router-dom';

class complain extends Component{

    constructor(){
     super()
     this.state={
         entry:false,
         query:null
     }
    
    }
    handleCompChange(e){
        e.preventDefault();
        this.setState({
            query: e.target.value,
            entry:true
        })
      }
      submitcomp(e){

            e.preventDefault();
            
            if (this.state.query!==null)
            {  this.setState({
                entry:true
             })
            }
            else{
            this.setState({
                entry:false
             })
            }
    if(this.state.entry!==false){
        alert("Complain Submitted Successfully!");

    }
    else{
        alert("Complain Field Vaccant")
    }
             e.preventDefault();
        
      }





    render(){
    return(

        <div className="pass__wrapper">
        <div className="pass-block-1">
        <div className="pass-block-1-text"><span className="safron">Comp</span><span className="green">lain</span></div>
        <div className="pass-block-1-shape"></div>
        </div>

        <h2>Be Our Eyes!</h2>
        <div className="comp-block-2">
        <div className="instruction" >
            <p><span className="num">1-</span>Help us to keep you safe.</p>
            </div>
      <div className="instruction">
      <p><span className="num">2-</span>If you find any gathering near your home, report to us. 
      </p></div>
      <div className="instruction">
      <p><span className="num">3-</span>You can also attach images/videos to your complain.</p>
      </div>
      <div className="instruction">
      <p><span className="num">4-</span>If your area is isolated from daily rashan needs, complain below.</p>
      </div>
      <div className="instruction">
      <p><span className="num">5-</span>Specify your area below and immediate help will be provided as soon as possible.
      </p></div>
      <div className="instruction">
      <p><span className="num">6-</span>Together , We Will Fight COVID-19.</p>
      </div>
        </div>
        <h2>Complain below</h2>
        <div className="comp-block-3">
        
        <form onSubmit={(e)=>this.submitcomp(e)}>
        <textarea cols="80" rows="15" placeholder="Type Here(Specifiy Your Address For Us To Track You Easily)" onChange={(e)=>this.handleCompChange(e)}></textarea>
        <button className="complain-button">Attach Files</button><button type="submit" className="complain-button">Submit</button>
        </form>
        </div>
</div>
    )

    
    }
}
export default complain;