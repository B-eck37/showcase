import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor (){
        super();
        this.state = {
            responses: ["Say What?", "Not a Chance", "Yeah Right!", "You Wish", "Say it ain't so, Joe", "No way","You got a problem"],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    stringUpdate(userInput){
        var responses = this.state.responses;
        var filteredArray = [];
        for(var i=0;i<responses.length;i++){
            if(responses[i].includes(userInput)){
                filteredArray.push(responses[i])
            }
        }
        this.setState({filteredArray: filteredArray})
    }

render() {
    return (
         <div className="puzzleBox filterStringPB">
         <h4> Filter String </h4>
         <span className="puzzleText">Responses: {JSON.stringify(this.state.responses)} </span>
         <input className="inputLine" onChange={event => this.handleChange(event.target.value)}></input>
         <button className="confirmationButton" onClick={() => this.stringUpdate(this.state.userInput)}> Filter </button>
         <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
         </div>
     )
  }
}
