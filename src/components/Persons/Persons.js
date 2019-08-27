import React from 'react';
import Person from './Person/Person.js';

const persons = (props) => {

    return (<div>
                           {props.persons.map((person, ind) => {
                                return (
                                    <Person
                                        key={person.id}
                                        name={person.name}
                                        age={person.age}
                                        changed={ (oEvent) => props.changed(oEvent, person.id)}
                                        deletePerson ={props.deletePerson.bind(this, ind)}/>
                                )

                           })}


                    </div>
                );
};

export default persons;
