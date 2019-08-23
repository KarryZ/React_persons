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


    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 123},
                {name: "Nick1", age: 125},
                {name: "Alex1", age: 128}
            ]
        })
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
                           {this.state.persons.map((person,ind) => {
                                return (
                                    <Person
                                        key={ind}
                                        name={person.name}
                                        age={person.age}
                                        changed={this.onChangeNameHandler}/>
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

