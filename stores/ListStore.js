// 继承EventEmitter.prototype，就能使用ListStore.on()和ListStore.emit()来监听和触发事件
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
  // 用来保存条目
  items: [],

  getAll: function() {
  	return this.items;
  },

  // Store更新(即 this.addNewItemHandler() )后，发出事件(即 this.emitChange() ) 表明状态已经改变
  addNewItemHandler: function (text) {
    var id = (new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var obj = {
      id: id,
      text: text
    };
    this.items.push(obj);
  },

  deleteItem: function(id) {
    var myItems = this.items;
    for(var i=0; i<myItems.length; i++){
      var deleteId = myItems[i].id;
      if (id == deleteId) {
        this.items.splice(i,1);
      }
    }
  },

  // 发送一个change事件
  emitChange: function () {
  	this.emit('change');
  },

  // 由于Store需要在变动后向View发送 change 事件，因此他必须实现事件接口
  addChangeLisener: function(callback) {
    this.on('change', callback);
  },

  removeChangeLisener: function(callback) {
    this.removeListener('change', callback)
  }
});

module.exports = ListStore;