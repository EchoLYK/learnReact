var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore');

// 用于接收action, 并将其传递到store; 一个页面有且只有一个dispatcher, 且是全局的
AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
    case 'DELETE_ITEM':
      ListStore.deleteItem(action.id);
      ListStore.emitChange();
      break;
    default:
  }
})


module.exports = AppDispatcher;