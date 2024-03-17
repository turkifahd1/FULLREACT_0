import React, { Component } from "react";
import Teamleader from "./Teamleader";
import memberinfo from './memberinfo'


class Team extends Component{
 
 constructor(){
  super()
  this.state= {memberinfo:memberinfo,


  }

 }

 

 mapping(x){
  const members=  x.map(function(member){
    return <Teamleader
          
    img={member.img}
    name={member.name}
    age={member.age}
    Telefon={member.Telefon}
    Address={member.Address}
  
    />

})
  return members
}

  render(){



  return(
    // <TeamItem/>
    <div className="row">
    
      {this.mapping(this.state.memberinfo)}
    
    </div>
  )}
}

export default Team ;