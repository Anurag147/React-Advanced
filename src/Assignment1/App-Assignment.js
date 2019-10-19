import React, { Component } from 'react';
import UserInputComponent from './UserInput';
import UserOutputComponent from './UserOutput';

class AppAssignment extends Component {
      state = {
        userName:"Anurag"
      };
    
      switchNameHandler = (newName) => {
          this.setState({userName:"Anurag"});
      };
    
      nameChangedHandler = (event) => {
        this.setState({userName:event.target.value});
    };
    
      render() {
        return (
          <div className="App">
              <UserInputComponent name={this.state.userName} changed={this.nameChangedHandler}/>
              <UserOutputComponent name={this.state.userName}/>
              <button onClick={this.switchNameHandler}>Change Name</button>
          </div>
        );
      }
    }

    export default AppAssignment; 
    