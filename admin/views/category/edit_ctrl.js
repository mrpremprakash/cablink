(function() { 
    
    
    angular.module('cablink').controller('CategoryEditController', function($scope, $routeParams, $http, categoryService) {
        
        $scope.formData = categoryService.fetchCategories($routeParams.id);
    });
    
    
    
}());