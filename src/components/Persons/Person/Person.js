import React, { Component }  from 'react';
import classes from './Person.css';
import Auxilliary from '../../../hoc/Auxilliary.js';
import withClass from '../../../hoc/withClass.js';
import PropTypes from 'prop-types';

class Person extends Component {

    componentDidUpdate() { // there you can add http request; not called after initiation
        console.log('[Person.js] componentDidUpdate');
    }

    render () {
        return (
            <Auxilliary>
                    <p  onClick={this.props.deletePerson}> I 'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p> {this.props.children} </p>
                    <input onChange={this.props.changed} value={this.props.name}/>
            </Auxilliary>
        )
    }

}
Person.propTypes = {
    deletePerson: PropTypes.func,
    age:  PropTypes.number,
    name:  PropTypes.string,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);
