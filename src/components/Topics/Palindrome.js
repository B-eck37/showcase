import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor (){
        super();
        this.state = {
            userInput: "",
            palindrome: "",
        }
    }

handleChange(val){
    this.setState({userInput: val})
}

wordCheck(userInput){
    let lower = userInput.toLowerCase();
    var frontwards = lower;
    var backwards = lower;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if(frontwards === backwards){
        this.setState({palindrome: 'true'})
    } else {
        this.setState({palindrome: 'false'})
    }
}

render() {
    return (
        <div className="puzzleBox filterStringPB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.wordCheck(this.state.userInput)}> Test </button>
        <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
        </div>
     )
  }
}
