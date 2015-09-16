(function() {
    
    angular.module('cablink').controller('NavigationController', function($scope, $location, menuService) {
        $scope.menues = menuService.getMenus();
        $scope.go = function( path ) {
            $location.path( path );
        }
    });
    
}());