angular.module('myApp').controller('HomeController', function($scope, ItemService) {
    $scope.items = ItemService.getItems();
    $scope.newItem = '';
  
    $scope.addItem = function() {
      if ($scope.newItem) {
        ItemService.addItem($scope.newItem);
        $scope.newItem = '';
      }
    };
  
    $scope.removeItem = function(index) {
      ItemService.removeItem(index);
    };
  });
  