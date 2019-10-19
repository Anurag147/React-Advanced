import React, { Component } from 'react'; //Used for importing react components

const ValidationComponent = (props) => {
    if(props.value.length !=0 && props.value.length>10)
    {
        return (
            <div>
                  Text too long !
            </div>
        )
    }
    else if (props.value.length !=0 && props.value.length<=4)
    {
        return (
            <div>
                  Text too Short !
            </div>
        )
    }
    else
    {
        return (
            <div>
                  Text ok !
            </div>
        )
    }
}
export default ValidationComponent;