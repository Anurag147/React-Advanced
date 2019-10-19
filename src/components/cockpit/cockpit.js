import React, {useEffect,useRef,useContext} from 'react';
import Classes from './cockpit.css';
import AuthContext from '../../context/auth-context';

//UseEffect is a react hook and not a lifecycle hook
//React hook can be used in functional components

//UseRef to create references in functional components 
//useContext used to access context

const cockpit = (props) =>
{
    //useEffect will be triggered for every render cycle
    //We can use multiple useEffect methods
    const toggleBtnRef=useRef(null);

    const authContext = useContext(AuthContext); //Used to access global context

    //UseEffect code is run after component is loaded on DOM

    useEffect(()=>{
        console.log("Cockpit.js useEffect");
        alert('Will be called only when persons state change');
        /*const timer= setTimeout(() => {
            alert('Timer Ticking');
        }, 1000);*/
        
        //Click the toggle button as soon as it is loaded on DOM
        //This is done by using refs
        toggleBtnRef.current.click(); 
        
        return (()=>{
            //clearTimeout(timer); //Remove this timer when component is unmounted
            console.log("This method will be executed on component unmount");
        });
    }, []); //[props.persons]

    //Without an input array this useEffect will be executed everytime this component is rendered
    useEffect(()=>{
        console.log("Cockpit.js 2nd useEffect");
        return (()=>{
            console.log("This method will be executed on component unmount 2nd useEffect");
        });
    }); //[props.persons]

    //[props.persons] array of props could be passed here which means the useEffect method should be called only when
    //There is any change in props value

    let btnClass='';
    if(props.showPersons){
        btnClass=Classes.red;
    }
    //Apply CSS classes conditionally
    let classesArr= [];
    if(props.personsLength > 1)
    {
      classesArr.push(Classes.red);
      classesArr.push(Classes.bold);
    }
    return(
        <div className={Classes.cck}>
            <h1>{props.title}</h1>
            <p className={classesArr.join(' ')}>This is really working</p>
            <button ref={toggleBtnRef} className={btnClass} onClick = {props.clicked}>Toggle Name</button> 
            <button onClick={authContext.login}>Log In</button>          
        </div>
    )
};

export default React.memo(cockpit);

//React.memo is used to render the functional component only 
//when there is any change in input props else return the previous