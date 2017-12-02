import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [{
                Name: 'The Dude',
                Age: 47,
                Car: "Corvette"
            },{
                Name: "Donny",
                Age: 45,
                BowlingBall: "8lb, Black Diamond"
            },{
                Name: "Jesus",
                HairColor: "Black",
                Necklace: "7k, White Marble",
                Residence: "Malibu"
            }],
            userInput: "",
            filteredArray: [],
        }
    }

handleChange(val){
    this.setState({userInput: val});
}    

updateObject(prop) {
    var newArray = this.state.unFilteredArray;
    var filteredArray = [];
    for(var i = 0; i<newArray.length;i++) {
        if(newArray[i].hasOwnProperty(prop)){
            filteredArray.push(newArray[i]);
        }
    }
    this.setState({filteredArray: filteredArray})
}



render() {
    return (
         <div className="puzzleBox filterObjectPB">
             <h4>Filter Object</h4>
             <span className="puzzleText">UnFiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
             <input className="inputLine" onChange={event => this.handleChange(event.target.value)}></input>
             <button className="confirmationButton" onClick={() => this.updateObject(this.state.userInput)} >Filter</button>
             <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
         </div>    
     )
  }
}
