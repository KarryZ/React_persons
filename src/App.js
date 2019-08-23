    import React, { Component} from 'react';
    import './App.css';
    import Person from './Person/Person.js';

    class App extends Component {
        state = {
            person: [
                {name: "Max", age: 23},
                {name: "Nick", age: 25},
                {name: "Alex", age: 28} ]
        }


    switchNameHandler = (newName) => {
        this.setState({
            person: [
                {name: newName, age: 123},
                {name: "Nick1", age: 125},
                {name: "Alex1", age: 128}
            ]
        })
    }

    onChangeNameHandler = (oEvent) => {
        this.setState({
            person: [
                {name: oEvent.target.value, age: 23},
                {name: "Nick", age: 25},
                {name: "Alex", age: 28}
            ]
        })
    }

        render() {
             const style = {
                    backgroundColor: 'white',
                    font: 'inherit',
                    border: '1px solid blue',
                    padding: '8px',
                    cursor: 'pointer'

                };

            return (
                     <div className = "App">
                            <h1> Hi, I 'm React App!</h1>
                            <button style={style} onClick={this.switchNameHandler.bind(this, 'MaxC1')}> Switch name </button>

                            <Person
                                name={this.state.person[0].name}
                                age={this.state.person[0].age}
                                changed={this.onChangeNameHandler}/>

                            <Person
                                name={this.state.person[1].name}
                                age={this.state.person[1].age}>
                                My Hobbies: Racing </Person>

                            <Person
                                name={this.state.person[2].name}
                                age={this.state.person[2].age}
                                click={this.switchNameHandler.bind(this, 'MaxC2')}/>

                        </div>
                        // React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, i\'m a React App!!!') )
                    );
        }
    }
    export default App;

