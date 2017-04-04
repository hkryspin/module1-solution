(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.dishes = "";

  $scope.checkLunch = function () {
    var lunchBox = $scope.dishes.split(',');
    var dishCount = dishCount.length;

    if (lunchBox[0] == "")
      $scope.message = "Please enter data first";
    else if (dishCount <= 3)
      $scope.message = "Enjoy!";
    else
      $scope.message = 'Too much!';
  }
};

})();
