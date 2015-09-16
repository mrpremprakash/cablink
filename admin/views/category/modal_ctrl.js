(function() {
    angular.module('cablink').controller('ModalInstanceCtrl', function ($scope, $modalInstance, $http, data, categoryService) {
        $scope.ok = function () {
            $modalInstance.close(); 
            categoryService.deleteCategory(data.id);
        };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
}());