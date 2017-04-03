(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.dishes = "";

  $scope.checkLunch = function () {
    var dishCount = $scope.dishes.split(',');
    switch (true) {
      case (dishCount >= 1 && dishCount <= 3):
        $scope.message = "Enjoy!";
        break;
      case (dishCount > 3):
        $scope.message = "Too much!";
        break;
      default:
        $scope.message = 'Please enter data first';
    }
  }
};

})();
