import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => { //runs when component created and update; combine componentDidMount and componentDidUpdate
        console.log('[Cockpit.js] UseEffect');
        //Http request...
        const timer = setTimeout(() => {
            alert('Saved data to cloud')
        }, 1000)

        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] UseEffect cleanup work')
        }
    }, []);// should run whenever dependencies in arr changes; if add empty arr it execute only in init


    //useEffect(() => {}) use as many times as i want

    let btnClass = null; //or empty str

    if(props.showPersons){
        btnClass = classes.Red;
    }


    let assignedClasses = [];

    if(props.personsLength <= 2) {
        assignedClasses.push(classes.red)
    }
    if(props.personsLength <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>it's working!</p>
        <button className={btnClass} onClick={props.togglePersonsHandler}> Show persons </button>
        </div>
    )
}

export default React.memo(cockpit);
