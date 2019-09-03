    import React, { Component} from 'react';
    import classes from './App.css';
    import Persons from '../components/Persons/Persons';
    import Cockpit from '../components/Cockpit/Cockpit';
    import withClass from '../hoc/withClass';
    import Auxilliary from '../hoc/Auxilliary';
    import AuthContext from '../context/auth-context';


    class App extends Component {
        constructor(props) {
            super(props);
        }

        state = {
            persons: [
                {id: 'person1', name: "Max", age: 23},
                {id: 'person2', name: "Nick", age: 25},
                {id: 'person3', name: "Alex", age: 28, focus: true} ],
            showPersons: false,
            showCockpit: true,
            changeCounter: 0,
            authenticated: false
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

        this.setState( (prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };

        });
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

    loginHandler = () => {
        this.setState({authenticated: true});
    }

        render() {
            let persons = null;

            if(this.state.showPersons){
               persons = (<div>
                          <Persons
                            persons={this.state.persons}
                            changed={this.onChangeNameHandler}
                            deletePerson={this.deletePerson}
                            />
                          </div>)
            }



            return (

                     <Auxilliary>
                          <button onClick={this.toggleCockpit}>Remove Cockpit</button>
                          <AuthContext.Provider
                            value={{
                                authenticated: this.state.authenticated,
                                login: this.loginHandler
                          }}>
                          {this.state.showCockpit ?
                                <Cockpit
                                    appTitle={this.props.appTitle}
                                    togglePersonsHandler={this.togglePersonsHandler.bind(this, 'MaxC1')}
                                    showPersonsState={this.state.showPersons}
                                    personsLength={this.state.persons.length}
                                    /> : null}

                            {persons}
                            </AuthContext.Provider>
                        </Auxilliary>

                        // React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, i\'m a React App!!!') )
                    );
        }
    }
    export default withClass(App, classes.App);

