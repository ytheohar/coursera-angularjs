(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = [];
  $scope.msg = '';

  $scope.checkIfTooMuch = function() {
    var length = $scope.dishes.length;
    if (length === 0) {
      $scope.msg = 'Please enter data first';
    } else if (length <= 3) {
      $scope.msg = 'Enjoy!';
    } else {
      $scope.msg = 'Too much!';
    }
  };

}


})();
