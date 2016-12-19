/**
 * Created by Zura on 4/8/2016.
 */
(function () {
  angular
    .module('jasny-bootstrap-angular')
    .controller('DemoController', ['$scope', DemoController]);

  function DemoController($scope) {

    $scope.showInput = function () {
      console.log($scope.file);
      console.log($('input[type=file]')[0].files);
    };

    $scope.removeFile = function () {
      $scope.file = null;
    };

    $scope.inputCleared = function () {
      console.log("DemoController:inputCleared");
    };

    $scope.inputChanged = function () {
      console.log("DemoController:inputChanged");
    };

    $scope.inputReset = function () {
      console.log("DemoController:inputReset");
    }
  }
})();