import React from 'react';
import './UserOutput.css';

const UserOutputComponent = (props) =>
{
    return(
        <div className="UserOutput">
        <p>This is a {props.name}</p>
        </div>
    )
};
export default UserOutputComponent;