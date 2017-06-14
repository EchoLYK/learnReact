var React = require('react');

// 引入数据层 
var ListStore = require('../stores/ListStore');
// 引入动作层
var ButtonActions = require('../actions/ButtonActions');

var ButtonToAddItem = require('./ButtonToAddItem');


var TodolistController = React.createClass({
  // 初始状态，取store的所有值
  getInitialState: function () {
    return {
      items: ListStore.getAll()
    };
  },

  //让view监听Store的 change 事件
  componentDidMount: function() {
    ListStore.addChangeLisener(this._onChange);
  },

  componentWillUnmount: function() {
    ListStore.removeChangeListener(this._onChange);
  },

  // 更新组件状态，从而触发重新渲染
  _onChange: function () {
    this.setState({
      items: ListStore.getAll()
    });
  },

  // view把用户的动作传给action，新增一条item
  createNewItem: function (event) {
    var text = this.refs.myInput.value;
    if(text!=''){
      // actions里的函数，用户通过该点击事件，告诉action已经点击按钮
      ButtonActions.addNewItem(text);
      this.refs.myInput.value='';
    } else{
      alert('Please input something');
    }
  },

  deleteItem: function (id) {
    ButtonActions.destroy(id);
  },

  render: function() {
    // 将事件传递给子组件 ButtonToAddItem
    // ButtonToAddItem 一旦用户点击，就调用this.createNewItem方法，向Dispather发出一个Acition


    return (
      <div>
        <input type="text" ref="myInput" placeholder="Please input your todos" style={{"height":"25px","width":"200px","border":"1px solid #ccc"}}></input>

        <ButtonToAddItem items={this.state.items} onClick={this.createNewItem} delBtn={this.deleteItem}/>
      </div>
    )
    
  }
});

module.exports = TodolistController;