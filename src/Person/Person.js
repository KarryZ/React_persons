import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person' onClick={props.delete}>
            <p onClick={props.click}> I 'm a {props.age} {props.name}!</p>
            <p> {props.children} </p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
