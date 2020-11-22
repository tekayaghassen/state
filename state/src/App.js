import './App.css';
import Profile from './profile.js'
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       Person: {
         fullname: "ghassen",
         bio: "Idk",
         imgSrc: "aze",
         proffession: "student",
         show: true
       },
       time: new Date()
    }
  }
  
  ToggleShow = () => {
    this.setState({
      Person: {
        show: !this.state.Person.show
      }
    });
    
    
  }
    
  componentDidMount(){
    this.mya = setInterval(() => { this.setState({time: new Date() }) }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.mya);
  }

  
  render() {
    return (
      <div>
        <button className="btn" onClick={this.ToggleShow}>Toggle</button>
        <h2>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h2>
        <Profile person={this.state.Person} />
      </div>
    )
  }
}

export default App;
