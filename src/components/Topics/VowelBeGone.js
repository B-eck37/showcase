import React, {Component} from 'react';

export default class VowelBeGone extends Component {
    constructor(){
        super()
        this.state = {
            userInput: "",
            vowelResult: '',
        }
    }
}

handleChange(val){
    this.setState({userInput: val})
}

removeV(userInput){
    var magic = userInput.replace(/aeiou/ig, '')
}




render(){
    return (
        <div className="puzzleBox vowelPB">
            <h4>Vowel Be Gone</h4>
        <input className="inputLine" onChange={event => this.handleChange(event.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.removeV(this.state.userInput)}> Abracadabra </button>
        <span className="resultsBox">Magic Result: {this.state.vowelResult}</span>
        </div>
    )
}