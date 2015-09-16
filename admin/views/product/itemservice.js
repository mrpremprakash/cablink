(function() {
    angular.module('cablink').service('itemService', function($http, $q, $location) {
        var items = [];

        var resourceUrl = '../response/public/products';
        return {
            getItems: getItems,
            addItem: addItem,
            fetchItems: fetchItems,
            deleteItem: deleteItem
        };
        
        function getItems() {
            return items;
        }
        function addItem(item) {
            return $http({
                method: 'post',
                url: resourceUrl + '/new',
                data: item
            }).then(function(response) {                
                return response;
            }, function() {
                
            });
        }
        function fetchItems() {

            return $http.get(resourceUrl)
            .then(function(response){
                if (typeof response.data === 'object') {
                    items = response.data;
                    return response.data;
                } else {
                    return $q.reject(response.data);
                }
            }, function(response){
                return $q.reject(response.data);
            });
        };
        function deleteItem(id) {
            var url = resourceUrl + '?action=delete_item';            
            $http({
                url: url,
                method: 'post',
                data: {id:id}
            })
            .then(function(response) {
                if(typeof response.data == 'object') {
                    if(response.data.status) {
                        delete items[id];
                    }
                } else {
                    console.error(response);
                }
            }, function() {
                
            });
        }
        
        
    });  
}());

