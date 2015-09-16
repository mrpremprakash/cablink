(function() {
    angular.module('cablink').controller('ItemListController', function($scope, itemService, $modal, $log) {
        $scope.view = 'views/product/list.html';
        itemService.fetchItems().then(function(data) {
            $scope.items = data;
        },function(data){
            console.log(' Unable to load items ');
        });
        $scope.openConfirmation1 = function (event, id) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl2',                
                resolve: {
                    data: function () {
                        return {event: event, id};
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
}());