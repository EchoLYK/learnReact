var React = require('react');
var ReactDOM = require('react-dom');
var TodolistController = require('./components/TodolistController');

ReactDOM.render(
  <TodolistController/>,
  document.querySelector('#example')
);