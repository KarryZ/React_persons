    import React, { Component} from 'react';
    import classes from './App.css';
    import Person from './Person/Person.js';

    class App extends Component {
        state = {
            persons: [
                {id: 'person1', name: "Max", age: 23},
                {id: 'person2', name: "Nick", age: 25},
                {id: 'person3', name: "Alex", age: 28} ],
            showPersons: false
        }

    onChangeNameHandler = (oEvent, id) => {
        const currentPersonIndex = this.state.persons.findIndex(person => person.id === id);

        const person = {...this.state.persons[currentPersonIndex]};
        person.name = oEvent.target.value;

        const persons = [...this.state.persons];
        persons[currentPersonIndex] = person;

        this.setState({
            persons: persons
        })
    }

    togglePersonsHandler = () => {
        const bShowPersons = this.state.showPersons;
        this.setState({showPersons: !bShowPersons})
    }

    deletePerson = (indexPeson) => {
        const personsList = [...this.state.persons];//slice(copy) array to new
        personsList.splice(indexPeson, 1);
        this.setState({persons: personsList})
    }

        render() {
            let persons = null;
            let btnClass = null; //or empty str
            if(this.state.showPersons){
                persons = (<div>
                           {this.state.persons.map((person, ind) => {
                                return (
                                    <Person
                                        key={person.id}
                                        name={person.name}
                                        age={person.age}
                                        changed={ (oEvent) => this.onChangeNameHandler(oEvent, person.id)}
                                        deletePerson ={this.deletePerson.bind(this, ind)}/>
                                )

                           })}


                    </div>
                );
                btnClass = classes.Red;
            }

            let assignedClasses = [];

            if(this.state.persons.length <= 2) {
                assignedClasses.push(classes.red)
            }
            if(this.state.persons.length <= 1) {
                assignedClasses.push(classes.bold)
            }

            return (

                     <div className={classes.App}>
                            <h1> Hi, I 'm React App!</h1>
                            <p className={assignedClasses.join(' ')}>it's working!</p>
                            <button className={btnClass} onClick={this.togglePersonsHandler.bind(this, 'MaxC1')}> Show persons </button>
                            {persons}
                        </div>

                        // React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, i\'m a React App!!!') )
                    );
        }
    }
    export default App;

