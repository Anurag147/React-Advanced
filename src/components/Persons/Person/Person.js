import React, {Component} from 'react';
import Classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClassFunctional from '../../../hoc/withClassFunctional';
import PropTypes from 'prop-types'; //use this for using prop types
import AuthContext from '../../../context/auth-context';

class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef(); 
        //Used to create ar reference to an element only in class based components
    }

    static contextType = AuthContext;
    //The render method should have only one return method and it should have a root level element 
    //In case you want to return adjacent JSX element and do not want to use a root div you can use an array
    
    //Below example without array
    /*render(){
        return (
            <div className={Classes.Person}>
                <p onClick={this.props.click}>I am <strong>{this.props.name}</strong> and i am <strong>{this.props.age}</strong> years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        );
    }*/

    //Below example with array
    /*render(){
        return (
            [
                <p onClick={this.props.click}>I am <strong>{this.props.name}</strong> and i am <strong>{this.props.age}</strong> years old</p>,
                <p>{this.props.children}</p>,
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>,
            ]
        );
    }*/

    //Below example with HOC
    //We can also use React.Fragment similar to Auxiliary Tag

    componentDidMount(){
        this.inputElementRef.current.focus(); //Focusing the last input element by using reference element
    }
//<AuthContext.Consumer> is used to handle global properties
    render(){
        return (
                //HOC component - Empty Wrapper 
                <Auxiliary>
                             {this.context.authenticated?
                             <p>Authentic Call</p>:
                             <p>Not Authentic Call</p>}
                    <p onClick={this.props.click}>I am <strong>{this.props.name}</strong> and i am <strong>{this.props.age}</strong> years old</p>
                    <p>{this.props.children}</p>
                    <input type="text" ref={this.inputElementRef} onChange={this.props.changed} value={this.props.name}></input>
                </Auxiliary>
            
        );
    }
}

//Below code is used to apply type constraint to input props
Person.propTypes = {
    click:PropTypes.func,
    changed:PropTypes.func,
    name:PropTypes.string,
    age: PropTypes.number
}

//This is using higher order component
//This will wrap the entire App component withing a Div and apply some styling
export default withClassFunctional(Person,Classes.Person);