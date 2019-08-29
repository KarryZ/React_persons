import React, { Component} from 'react';
import Person from './Person/Person.js';

class Persons extends Component {
    render () {
            return (<div>
                           {this.props.persons.map((person, ind) => {
                                return (
                                    <Person
                                        key={person.id}
                                        name={person.name}
                                        age={person.age}
                                        changed={ (oEvent) => this.props.changed(oEvent, person.id)}
                                        deletePerson ={this.props.deletePerson.bind(this, ind)}/>
                                )

                           })}


                    </div>
                );
    }

}

export default Persons;
