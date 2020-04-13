import React, { Component } from 'react';
import {BrowserRouter as Router,Route, NavLink } from 'react-router-dom';


class pass extends Component{
   
    constructor()
    {
    super()
    this.state={
        availability:false,
        adhaar:null,
        date:null,
        place:null
        }

    }
     

     checkqr(e){
        e.preventDefault();
        
        if (this.state.adhaar!==null && this.state.place!==null)
        {  this.setState({
            availability:true
         })
        }
        else{
        this.setState({
            availability:false
         })
        }

         e.preventDefault();
     }
     handleChange(e){
       e.preventDefault();
       this.setState({
           adhaar:e.target.value,
           place:e.target.value,
           date:e.target.value
       })
     }


    render() {
        return(

            <div className="pass__wrapper">
            <div className="pass-block-1">
            <div className="pass-block-1-text"><span className="safron">E-</span><span className="green">Pass</span></div>
            <div className="pass-block-1-shape"></div>
            </div>
            <h2>Instruction</h2>
            <div className="pass-block-2">
            <div className="instruction" >
            <p><span className="num">1-</span>Only Issue E-Pass when it is urgent.</p>
            </div>
      <div className="instruction">
      <p><span className="num">2-</span>Adhaar Card is Mandatory for issueing E-Pass.
      </p></div>
      <div className="instruction">
      <p><span className="num">3-</span>Each day will be divided into 3 slot times. 9 A.M. to 11 A.M., 1 P.M. to 3 P.M. and 5 P.M. to 7 P.M.</p>
      </div>
      <div className="instruction">
      <p><span className="num">4-</span>Only 100 passes will be issued per slot each day.</p>
      </div>
      <div className="instruction">
      <p><span className="num">5-</span>Once pass issued , the person cannot issue another for 1 Week.
      </p></div>
      <div className="instruction">
      <p><span className="num">6-</span>Only one person is allowed for single pass.</p>
      </div>
      <div className="instruction">
      <p><span className="num">7-</span>Pass issue is subject to availability.</p>
      </div>
      <div className="instruction">
      <p><span className="num">8-</span>People with medical condition don't need to issue pass.</p>
      </div>
            </div>
             <h2>Enter Details below , to check for pass availability</h2>
         <div className="pass-block-3">
         <div className="pass-input">
         <form onSubmit={(e)=>this.checkqr(e)}>
         <label>Enter Adhaar Number</label>
         <input type="text" name="adhaar" placeholder="Enter Your Adhaar Number" onChange={(e)=>this.handleChange(e)}></input>
         <label>Enter Your City</label>
         <input type="text" name="place" placeholder="Enter City Name" onChange={(e)=>this.handleChange(e)}></input>
         <label>Select Date</label>
         <input type="date"></input>
         <label>Select Time Slot</label>
         <select placeholder="Select Time Slot" onChange={(e)=>this.handleChange(e)}>
         <option value="9 A.M. to 11 A.M." placeholder="9 A.M. to 11 A.M.">9 A.M. to 11 A.M.</option>
         <option value="1 P.M. to 3 P.M." placeholder="1 P.M. to 3 P.M.">1 P.M. to 3 P.M.</option>
         <option value="5 P.M. to 7 P.M." placeholder="5 P.M. to 7 P.M.">5 P.M. to 7 P.M.</option>
         </select>
        
         <button onClick={(e)=>this.checkqr(e)}>Get Pass</button>
         <div className="hidden">All Fields are Mandatory</div>
         </form>
         
         </div>
         {

            this.state.availability?

         <div className="pass-qr">
       
         
         </div>
         :null
         }
         </div>



            </div>
            
            
            
            
        )
   


    }
    


}
export default pass;