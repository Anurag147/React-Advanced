import React,{Component} from 'react';
import Person from '../Persons/Person/Person';

class Persons extends Component{ 
  //We can use PureComponent extension to a component if we want a pre built ShouldComponentUpdate logic. 
  //It will render the component only when all the props are changes

//First method to execute in component lifecycle hooks
constructor(props){
  super(props) // This super call is needed to call constructor of component class
}
//Get Derived state from props is the second method to excute in class based component lifecycly hooks
/*static getDerivedStateFromProps(props,state){
  console.log("Persons.js get derived state from props",props);
  return state;
}*/

//Component update lifecycle gets called only when its props/state gets updated
//This method is called before the component attempts to update and if true only then the components gets update
shouldComponentUpdate(nextProps, nextState){
  console.log("Persons.js shouldComponentUpdate");
  //Donot update persons component if persons props are not updated
  if(nextProps.persons !== this.props.persons ||
    nextProps.changed !== this.props.changed||
    nextProps.clicked !== this.props.clicked){
    return true;
  }
  else
  {
    return false;
  }
}

//This method is called after shouldComponentUpdate to capture previous props and states
getSnapshotBeforeUpdate(prevProps, prevState){
  console.log("Persons.js getSnapshotBeforeUpdate");
  return {message:'snapshot'};
}

//This method is called after the component is updated and DOM is called
componentDidUpdate(prevProps,prevState,snapshot){
  console.log("Persons.js componentDidUpdate");
  console.log(snapshot);
}

//This method will be called when we unmount a component from DOM
componentWillUnmount(){
  console.log("Person.js componentWillUnmount");
}
//This method will be executed to render component on UI
render(){
    console.log("Rendering persons now..");
    return this.props.persons.map((p,i) =>{
      return <Person name= {p.name} age = {p.age} 
      click={()=>this.props.clicked(i)} key={p.id}
      changed={(event)=> this.props.changed(event,p.id)}/>
    });
  };
}   
export default Persons;