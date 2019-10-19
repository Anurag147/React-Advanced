import React, { useState } from 'react'; //Used for importing react components
import './App.css';
import Person from './Person/Person';

//Below is a react method component using react hooks for manaing states
const app = (props) => {
    //Use state method using React Hooks
    //Array destructuring
    const [personsState, setPersonsState] = useState({
      persons: [
        {name:"Anurag",age:28},
        {name:"Shruti", age:22}
      ]
    });
    console.log(personsState);

    //Additional State Slices
    const [otherState, setOtherState] = useState("This is a string state");
    console.log(otherState);

    //Event handler for button click, this method will help in changing states
    const switchNameHandler = () => {
      //console.log("Button Clicked !");
      setPersonsState({
        persons: [
          {name:"Shruti", age:22},
          {name:"Anurag",age:28}
        ]
      });
    };

    //The render method in a component is responsible for generating JSX which could then be appended to HTML DOM
    //Calling a custom component named Person
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/> 
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies : Snooker</Person> 
      </div>
    );
    //This way can also be used to create react elements, 
    //but this is not used as it becomes more cumbersome with larger number of objects
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is also a way to create elements !'));
  }

export default app; // Here you export the coponent so that it can be used in any other page

//State is used for managing the state of react component
//This can only be used in a react component (class based)


