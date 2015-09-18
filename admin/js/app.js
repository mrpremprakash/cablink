(function() {
    var adminApp = angular.module('cablink', ['ngRoute', 'ui.bootstrap']);
    adminApp.config(function($routeProvider) {
        
        $routeProvider.when('/products', {
            templateUrl: 'views/product/main.html',
            controller: 'ItemListController'
        }).when('/additem', {
            templateUrl: 'views/product/add.html',
            controller: 'addItemController'
        }).when('/addcategory', {
            templateUrl: 'views/category/add.html',
            controller: 'addCategoryController'
        }).when('/', {
            templateUrl: 'views/dashboard/dashboard.html'
        }).when('/categories', {
            templateUrl: 'views/category/list.html',
            controller: 'CategoryListController'
        }).when('/edit-category/:id', {
            templateUrl: 'views/category/add.html',
            controller: 'CategoryEditController'
        }).when('/promo-item', {
            templateUrl: 'views/promo/list.html',
            controller: 'PromoController',
            controllerAs: 'PRCtrl'
        });
    });
}());