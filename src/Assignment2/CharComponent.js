import React, { Component } from 'react'; //Used for importing react components

const CharComponent = (props) => {
    const style= {
        display: 'inline-block',
        padding: '16px',
        margin:'16px',
        border:'1px solid black',
        textAlign:'center',
        backgroundColor:'#b6f542'

    }
    return (
        <div style={style} onClick={props.click}>{props.name}</div>
    )
}

export default CharComponent;