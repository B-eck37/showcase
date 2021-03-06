import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state ={
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

handleChange(val){
    this.setState({userInput: val});
}

updateArrays(userInput){
    var arr =userInput.split('');
    var evens = [];
    var odds = [];

    for(var i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evens.push(parseInt(arr[i], 10));
        } else {
            odds.push(parseInt(arr[i], 10));
        }
    }
    this.setState({evenArray: evens, oddArray: odds})
}


render() {
    return (
       <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>

            <input className="inputLine" onChange={event => this.handleChange(event.target.value)}></input>
            <button className="confirmationButton" onClick={() => {this.updateArrays(this.state.userInput)}}> Split </button>
            <span className="resultsBox">Evens: {this.state.evenArray.length ?JSON.stringify(this.state.evenArray) : null} </span>
            <span className="resultsBox">Odds: {this.state.evenArray.length ? JSON.stringify(this.state.oddArray) : null} </span>
       </div>   
     )
  }
}
