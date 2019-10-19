import React from 'react';

//This is another way of creating higher order component.
//This accept a component as input and wraps it around a div or perform some other operations

const withClassFunctional = (WrappedComponent, className) => {
    return props=> (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
    );
};

export default withClassFunctional;