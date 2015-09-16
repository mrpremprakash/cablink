(function() {
    angular.module('cablink').controller('addItemController', function($scope, $http, $location, itemService) {
        $scope.formData = {};
        $scope.saveProduct = function() {
            itemService.addItem($scope.formData).then(function(data) {                
                    $scope.items = itemService.getItems();
                //$location.path('/');
            }, function() {});
            
        };
    });
}());