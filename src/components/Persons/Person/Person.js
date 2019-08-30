import React, { Component }  from 'react';
import classes from './Person.css';
import Auxilliary from '../../../hoc/Auxilliary.js'

class Person extends Component {

    componentDidUpdate() { // there you can add http request; not called after initiation
        console.log('[Person.js] componentDidUpdate');
    }

    render () {
        return (
            <Auxilliary>
                <div className={classes.Person}>
                    <p  onClick={this.props.deletePerson}> I 'm a {this.props.age} {this.props.name}!</p>
                    <p> {this.props.children} </p>
                    <input onChange={this.props.changed} value={this.props.name}/>
                </div>
            </Auxilliary>
        )
    }

}

export default Person;
