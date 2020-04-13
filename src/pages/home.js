import React, { Component } from 'react';
import {BrowserRouter as Router,Route, NavLink } from 'react-router-dom';
import axios from 'axios';
class home extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      confirm:9205,
      recover:1080,
      death:331
    }
  }
  componentDidMount()
  {  
    
    var today = new Date();
    var date_v = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    


    axios.get('https://pomber.github.io/covid19/timeseries.json')
    .then(response => response.json())
  .then(data => {
    data["India"].forEach(({ date, confirmed, recovered, deaths }) =>{
      
     if({date}==date_v){
       this.setState({
         confirm:{confirmed},
         recover:{recovered},
         death:deaths
       })
     }
    }
  
    );
  })
    .catch(error=>{
      console.log(error)
    })
  } 
  

  
  






  render() 
    
    
{
  const {confirm,recover,death}=this.state;
        return(

            <div className="home__wrapper">
    
            <div className="home-block-1">
            <div className="home__block-1__shape">
            
            </div>
            <div className="home__block-1__text">
            <div>
            <span className="safron">जन </span><span className="green">पास</span>
            </div>
            </div>
            </div>
            <h2>Why LockDown?</h2>
              <div className="home-block-2">
              
                <div className="text-area">
                Prime Minister Narendra Modi announced the world’s largest lockdown on 24 March, asking 1.3 billion Indians to stay home for 21 days to slow the spread of COVID-19.
                The move was partly a response to apocalyptic projections. Fewer than 600 cases had been confirmed at the time of Modi’s announcement, although that number is widely believed to be an undercount. But without control measures, 300 million to 500 million Indians could be infected by the end of July and 30 million to 50 million could have severe disease, according to one model. And the world’s second most populous country has large numbers of poor living in crowded, unsanitary conditions and a weak public health infrastructure, with just 0.7 hospital beds per 1000 persons, compared with Italy’s 3.4 and the United States’s 2.9; India also has fewer than 50,000 ventilators.
                “A lot needs to be done in the next 3 weeks to make sure that we have built up a system to test and treat patients, and to support families of patients,” says Gagandeep Kang, a leading Indian infectious diseases researcher and the executive director of the Translational Health Science and Technology Institute.
                <div className="emphasis">We Cannot Waste The LockDown.</div>
                </div>            
                 
                <div className="image-area">
                </div>
              </div>   
             
                <h2>Numbers in India</h2>
              <div className="home-block-3">
              <div className="confirm"><h3>{this.state.confirm}</h3><div>Confirmed</div></div>
              <div className="recover"><h3>{this.state.recover} </h3><div>Recovered</div></div>
              <div className="death"><h3>{this.state.death} </h3><div>Deaths</div></div>
              </div>
              <div className="bottom-text">
               <h4>Help Us , Stay At Home</h4>
              </div>
            </div> 
            
            
            
            
            
            
        )
   


    }
}



export default home;