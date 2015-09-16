(function() {
    angular.module('cablink').controller('addCategoryController', function($scope, $http, $location, categoryService) {
        $scope.formData = {};
        $scope.resourceUrl = categoryService.resourceUrl;
        $scope.saveCategory = function() {
            categoryService.saveCategory($scope.formData)
            .then(function(data) {
                $scope.categories = categoryService.refreshCategory();                
                $scope.formData = {};
            },function(data) {
                console.log('Unable to add category !');
            });
        }
        
    });
}());