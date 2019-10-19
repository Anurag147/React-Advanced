import React, { Component } from 'react'; //Used for importing react components

const InputComponent = (props) => {
    return (
        <div>
        <input type="text" onChange={props.changed} value={props.value}></input>
        <p>{props.value}</p>
        </div>
    )
}
export default InputComponent;