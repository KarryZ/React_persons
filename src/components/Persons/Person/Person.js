import React, { Component }  from 'react';
import classes from './Person.css';
import Auxilliary from '../../../hoc/Auxilliary.js';
import withClass from '../../../hoc/withClass.js';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidUpdate() { // there you can add http request; not called after initiation
        console.log('[Person.js] componentDidUpdate');
    }

    componentDidMount() {
        //this.elInput.focus(); //Old version
        this.inputElementRef.current.focus();
    }

    render () {
        return (
            <Auxilliary>
                    <p onClick={this.props.deletePerson}> I 'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p key='i2'> {this.props.children} </p>
                    <input
                        key='i3'
                     //   ref={(elInput) => {this.elInput = elInput}} //Old version
                        ref={this.inputElementRef}
                        type='text'
                        onChange={this.props.changed}
                        value={this.props.name} />
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
