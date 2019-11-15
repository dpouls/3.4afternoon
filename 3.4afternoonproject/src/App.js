import React from 'react';
import './App.css';
import Card from './components/Card'
import data from './data'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      people: data,
      i: 0
    }
    this.handleClickNext = this.handleClickNext.bind(this)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
  }
  handleClickNext = () => {
    if(this.state.i > 23){
      this.setState({i: 0})
    } else {
     this.setState({
      i:this.state.i+1
    })
    }
  } 
  handleClickPrevious = () => {
    if(this.state.i < 1){
      this.setState({i: 24})
    } else {
    this.setState({i: this.state.i - 1})
  }
}
  render(){
    return (
    <div className="App">
      <div className='headerBox'>
        <a id='home'><span>Home</span></a>
      </div>
      <div className="card-button-container">
        <div id='card-placeholder'> <Card 
        currentId={this.state.people[this.state.i].id} 
        person={this.state.people[this.state.i]}/></div>

         
        <div className='button-box'>
          <button onClick={this.handleClickPrevious} className='prev-next'><span>Previous</span></button>
            <div className='middle-button-container'>
              <button className='middle-buttons'><span>Edit</span></button>
              <button id='middle-button' className='middle-buttons'><span>Delete</span></button>
              <button className='middle-buttons'><span>New</span></button>
            </div>
          <button className='prev-next' onClick={this.handleClickNext}  ><span>Next</span></button>

        </div>
      </div>
     
    </div>
    );
  }
}

export default App;
