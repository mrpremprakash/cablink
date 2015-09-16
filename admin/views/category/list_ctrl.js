(function() {
    angular.module('cablink').controller('CategoryListController', function($scope, $modal, $log, categoryService) {
        $scope.resourceUrl = categoryService.resourceUrl;
        categoryService.fetchCategories()
        .then(function(data) {
            $scope.categories = data;
        }, function() {
            console.error('unable to fetch categories');
        });
        $scope.openConfirmation = function (event, id) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',                
                resolve: {
                    data: function () {
                        return {event: event, id: id};
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
              $scope.selected = selectedItem;
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });
        };
    });
//    angular.module('cablink').controller('ListCategories', function($scope, $http, categoryService) {
//        $scope.categories = [];
//        $scope.resourceUrl = categoryService.resourceUrl;
//        $http({
//            url: categoryService.resourceUrl + '?action=get_categories'
//        }).success(function(response) {
//            
//            categoryService.updateCategories(response);
//            $scope.categories = response.data;
//            
//        });
//        
//    });
}());