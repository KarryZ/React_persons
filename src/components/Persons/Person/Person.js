import React from 'react';
import classes from './Person.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p  onClick={props.deletePerson}> I 'm a {props.age} {props.name}!</p>
            <p> {props.children} </p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
