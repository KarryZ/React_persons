import React  from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
}); // Global available JS object

export default authContext;
