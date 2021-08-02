// IMport the react and ReactDOM libraries
// create a react componet
//take the react component and show it on the screen

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div>Hi there!</div>
};


//take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);