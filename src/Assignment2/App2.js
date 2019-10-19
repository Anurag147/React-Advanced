import React, { Component } from 'react'; //Used for importing react components
import InputComponent from './InputComponent';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App2 extends Component{
    state = {
        TextBoxValue: "",
    };

    inputChangedHandler = (event) => {
        this.setState(
            {
                TextBoxValue :event.target.value
            }
        );
    };

    deleteHandler = (index) => {
        const charArray=[...this.state.TextBoxValue]; 
        // This spread operator ... will create a copy of persons state as array are reference type immutable
        charArray.splice(index,1);
        this.setState({
            TextBoxValue: charArray.join('')
        });
    }
    //Render is called everytime there is change in state
    render(){     
        let charArrayCopy =this.state.TextBoxValue.split("");
        let allChars = null;
        allChars=(
            <div>
            {charArrayCopy.map((c,i)=>{
            return <CharComponent name = {c} 
            click={()=>this.deleteHandler(i)} key={i}/>}
        )}
        </div>
        );     

        return(
            <div>
                <InputComponent value = {this.state.TextBoxValue} 
                changed = {(event)=>this.inputChangedHandler(event)}/>
                <ValidationComponent value = {this.state.TextBoxValue}/>
                {allChars}
                
            </div>
        )
    }
}
export default App2;