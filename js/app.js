(function() {
    var adminApp = angular.module('cablink', ['ngRoute']);
    adminApp.config(function($routeProvider) {

        $routeProvider
            .when('/', {
            templateUrl: 'views/promo_box_with_products.html',
            controller: 'HomeProductController'
        }).when('/:id', {
                templateUrl: 'views/product_detail.html',
                controller: 'ProductDetailController'
            });
    });
}());