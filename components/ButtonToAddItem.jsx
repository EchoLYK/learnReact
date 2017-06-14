var React = require('react');

// 子组件为一个纯组件，不含有任何状态，为方便测试和复用
var ButtonToAddItem = function(props) {

  var items = props.items;
  var _this = this;
  if(items){
    var itemHtml = items.map(function (listItem, i) {
      return <li key={i}> ID:{listItem.id}: {listItem.text} <a href="#" onClick={props.delBtn.bind(null,listItem.id)}>Delete</a></li>;
    });
  }
  

  return <div>
    <ul>{itemHtml}</ul>
    <button onClick={props.onClick}> Add an item</button>
  </div>;
};

module.exports = ButtonToAddItem;