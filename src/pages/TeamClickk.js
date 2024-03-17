
import React, { Component } from "react";
import Teamleader from "./Teamleader";
import memberinfo from './memberinfo'

import Header from '../compont/Header';


class TeamClickk extends Component{
 
  constructor(){
   super()
   this.state= {memberinfo:memberinfo,
                           memberss:[],
                           counter:0       //counterيعني عداد عايدي يتغير الاسم 
 
   }
     this.clickEvents=this.clickEvents.bind(this)
  }
 
  clickEvents(){
   
     if(this.state.counter <this.state.memberinfo.length) 
     {
       this.state.memberss.push(this.state.memberinfo[this.state.counter]);
     this.setState(function(prevstate){
       return{
         counter:prevstate.counter +1
       }
     })
     this.newmembers= this.state.memberss.map(function(member){
       return <Teamleader
           
       img={member.img}
       name={member.name}
       age={member.age}
       Telefon={member.Telefon}
       Address={member.Address}
     
       />
     })
     }
 
  }
 
   render(){
 
   return(
   
     <div className="row">
      <Header/>
       <button className="bg-primary" onClick={this.clickEvents}>click me</button>
 
       {this.newmembers}
       
    
     </div>
   )}
 }
 
 export default TeamClickk ;