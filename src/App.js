import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './redux/action';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  addClick=()=>{
    this.props.buttonAdd();
  }
  jianClick=()=>{
    this.props.buttonJian();
  }
  render() {
    const {number}= this.props;
    return (
      <div className="App">
         <button onClick={this.jianClick}>-</button>
         <button>{number}</button>
         <button onClick={this.addClick}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { number:state.number}
}

function mapDispatchToProps(dispatch) {
   return {
     ...bindActionCreators(action, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
