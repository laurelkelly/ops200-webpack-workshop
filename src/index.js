// import $ from 'jquery';
// // var $ = require('jquery');  --> used in Node

// $('div').text('Webpack is working!');

import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
const sampleComponent = <div>React and webpack are working!</div>;

ReactDOM.render(sampleComponent, rootElement);