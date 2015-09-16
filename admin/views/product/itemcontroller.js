(function() {
    
    
    angular.module('cablink').controller('ModalInstanceCtrl2', function ($scope, $modalInstance, $http, data, itemService) {
        $scope.ok = function () {
            $modalInstance.close(); 
            itemService.deleteItem(data.id);
        };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
}());