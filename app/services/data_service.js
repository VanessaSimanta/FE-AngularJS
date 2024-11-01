angular.module('myApp').service('ItemService', function() {
  let items = [];

  this.getItems = function() {
    return items;
  };

  this.addItem = function(item) {
    items.push(item);
  };

  this.removeItem = function(index) {
    items.splice(index, 1);
  };
});
