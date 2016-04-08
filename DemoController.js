/**
 * Created by Zura on 4/8/2016.
 */
(function(){
    angular
        .module('jasny-bootstrap-angular')
        .controller('DemoController', ['$scope', DemoController]);

    function DemoController($scope){
        console.log($scope);
        $scope.showInput = function(){
            console.log($scope.file);
            console.log($('input[type=file]')[0].files);
        }
    }
})();