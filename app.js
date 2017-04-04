(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.dishes = "";

  $scope.checkLunch = function () {
    var dishCount = $scope.dishes.split(',');
    var dishh = dishCount.length;

    if (dishCount[0] == "")
      $scope.message = "Please enter data first";
    else if (dishh <= 3)
      $scope.message = "Enjoy!";
    else
      $scope.message = 'Too much!';
  }
};

})();
