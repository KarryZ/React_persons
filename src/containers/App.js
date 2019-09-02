    import React, { Component} from 'react';
    import classes from './App.css';
    import Persons from '../components/Persons/Persons';
    import Cockpit from '../components/Cockpit/Cockpit';
    import WithClass from '../hoc/WithClass';

    class App extends Component {
        constructor(props) {
            super(props);
        }

        state = {
            persons: [
                {id: 'person1', name: "Max", age: 23},
                {id: 'person2', name: "Nick", age: 25},
                {id: 'person3', name: "Alex", age: 28} ],
            showPersons: false,
            showCockpit: true
        }

    static getDerivedStateFromProps(props, state) { // chage states and props
        return state;
    }

    componentDidMount() { // there you can add http request
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) { //can be used for perfomance improvement
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() { // there you can add http request; not called after initiation
        console.log('[App.js] componentDidUpdate');
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

    toggleCockpit = () => {
        const bShowCockpit = this.state.showCockpit;
        this.setState({showCockpit: !bShowCockpit})
    }

        render() {
            let persons = null;

            if(this.state.showPersons){
               persons = (<div>
                          <Persons
                            persons={this.state.persons}
                            changed={this.onChangeNameHandler}
                            deletePerson={this.deletePerson}/>
                          </div>)
            }



            return (

                     <WithClass classes={classes.App}>
                          <button onClick={this.toggleCockpit}>Remove Cockpit</button>
                          {this.state.showCockpit ?
                                <Cockpit
                                    appTitle={this.props.appTitle}
                                    togglePersonsHandler={this.togglePersonsHandler.bind(this, 'MaxC1')}
                                    showPersonsState={this.state.showPersons}
                                    personsLength={this.state.persons.length}/> : null
                          }

                            {persons}
                        </WithClass>

                        // React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, i\'m a React App!!!') )
                    );
        }
    }
    export default App;

