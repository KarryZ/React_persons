    import React, { Component} from 'react';
    import './App.css';
    import Person from './Person/Person.js';

    class App extends Component {
        state = {
            persons: [
                {name: "Max", age: 23},
                {name: "Nick", age: 25},
                {name: "Alex", age: 28} ],
            showPersons: false
        }

    onChangeNameHandler = (oEvent) => {
        this.setState({
            persons: [
                {name: oEvent.target.value, age: 23},
                {name: "Nick", age: 25},
                {name: "Alex", age: 28}
            ]
        })
    }

    togglePersonsHandler = () => {
        const bShowPersons = this.state.showPersons;
        this.setState({showPersons: !bShowPersons})
    }

    deletePerson = (indexPeson) => {
        const personsList = this.state.persons;
        personsList.splice(indexPeson, 1);
        this.setState({persons: personsList})
    }

        render() {
             const style = {
                    backgroundColor: 'white',
                    font: 'inherit',
                    border: '1px solid blue',
                    padding: '8px',
                    cursor: 'pointer'

                };

            let persons = null;
            if(this.state.showPersons){
                persons = (<div>
                           {this.state.persons.map((person, ind) => {
                                return (
                                    <Person
                                        key={ind}
                                        name={person.name}
                                        age={person.age}
                                        changed={this.onChangeNameHandler}
                                        delete={this.deletePerson.bind(this, ind)}/>
                                )

                           })}


                    </div>)

            }

            return (
                     <div className = "App">
                            <h1> Hi, I 'm React App!</h1>
                            <button style={style} onClick={this.togglePersonsHandler.bind(this, 'MaxC1')}> Show persons </button>
                            {persons}
                        </div>
                        // React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, i\'m a React App!!!') )
                    );
        }
    }
    export default App;

