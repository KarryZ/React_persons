import React from 'react';

const cockpit = (props) => {
    return (
        <div>
        <h1> Hi, I 'm React App!</h1>
        <p className={props.classNameParagraph.join(' ')}>it's working!</p>
        <button className={props.classNameButton} onClick={props.togglePersonsHandler}> Show persons </button>
        </div>
    )
}

export default cockpit;
