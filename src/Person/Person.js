import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className='Person'>
            <p  onClick={props.deletePerson}> I 'm a {props.age} {props.name}!</p>
            <p> {props.children} </p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);
