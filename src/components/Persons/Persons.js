import React, { PureComponent} from 'react';
import Person from './Person/Person.js';

class Persons extends PureComponent {  //PureComponent use for check changes in all props instead of check all props in shouldComponentUpdate

//    shouldComponentUpdate(nextProps, nextState) { //can be used for perfomance improvement
//        console.log('[Persons.js] shouldComponentUpdate');
//        if(
//            nextProps.persons !== this.props.persons ||
//            nextProps.changed !== this.props.changed ||
//            nextProps.clicked !== this.props.clicked
//        ){
//            return true; //if false component won't update
//        } else {
//            return false;
//        }
//
//    }

    componentWillUnmount () { //will execute before component is removed from DOM
        console.log('[Persons.js] componentWillUnmount');
    }

    render () {
             console.log('[Persons.js] render');

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
