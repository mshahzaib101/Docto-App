import React from 'react';
import ReactDOM from 'react-dom';
import ChatDisplay from './HomePage/Components/HomePage-ChatDisplay/ChatDisplay';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ChatDisplay />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
