import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [{
                name: 'The Dude',
                age: 47,
                car: "Corvette"
            },{
                alias: "Donny",
                age: 45,
                bowlingBall: "8lb, Black Diamond"
            },{
                nombre: "Jesus",
                hairColor: "Black",
                necklace: "7k, White Marble",
                residence: "Malibu"
            }],
            userInput: "",
            filteredArray: [],
        }
    }

handleChange(val){
    this.setState({userInput: val});
}    

updateObject(prop) {
    console.log('clicked', prop)
    var newArray = this.state.unFilteredArray;
    var filteredArray = [];
    for(var i = 0; i<newArray.length;i++) {
        console.log(newArray[i].hasOwnProperty(prop))
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
             <span className="resultsBox filterObjectRB">Filtered: {this.state.filteredArray.length ? JSON.stringify(this.state.filteredArray) : null}</span>
         </div>    
     )
  }
}
