(function() {

    angular.module('cablink')
        .service('HomeProductService', function($scope, $http) {
            var promoProducts = [];
            var products = [];
            var resourceUrl = 'resources/public/';
            return {
                fetchProducts: fetchProducts
            };
            function fetchProducts() {
                return $http.get(resourceUrl + 'products/');
            };
        });

    angular.module('cablink')
        .controller('HomeProductController', function($scope, $http) {
        $http.get('response/public/products')
            .success(function(response) {
                var promoProducts = [];
                var products = [];
                angular.forEach(response, function(value, key) {
                    if(value.is_promo) {
                        this.push(value);
                    } else {
                        products.push(value);
                    }
                }, promoProducts);
                $scope.products = products;
                $scope.promoProducts = promoProducts;
            });
    });
}());