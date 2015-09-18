(function() {
    angular.module('cablink')
        .controller('ProductDetailController', function($scope, $http, $routeParams) {
            $http.get('response/public/categories')
                .success(function(response) {
                    $scope.categories = response;
                });

            $http.get('response/public/products/'+$routeParams.id)
                .success(function(response) {
                    $scope.productDetail = response;
                });

        });
}());