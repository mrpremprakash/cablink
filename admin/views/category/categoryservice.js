(function() {
    angular.module('cablink').service('categoryService', function($http, $q, $location) {
        var categories = [];
        var resourceUrl = '../response/public/categories';
        return {
            updateCategories: updateCategories,
            addCategory: addCategory,
            fetchCategories: fetchCategories,
            resourceUrl: resourceUrl,
            deleteCategory: deleteCategory,
            saveCategory: saveCategory,
            refreshCategory: refreshCategory
        };
        function saveCategory(formData) {
            return $http({
                method: 'post',
                url: resourceUrl + '?action=add_category',
                data: formData
            }).then(function(response) {
                categories.push(response.data);
                return response.data;
            }, function(response) {
                console.error(response);
            });
        }
        function refreshCategory() {
            return categories;
        }
        function updateCategories(categories) {
            categories = categories;
        }
        function addCategory(category) {
            categories.push(category);
        }
        function fetchCategories(id) {
            if(typeof id != 'undefined') {
                return categories[id];
            }
            //console.log(resourceUrl);
            return $http.get(resourceUrl + '?action=get_categories')
            .then(function(response) {
                if(typeof response.data == 'object') {
                    categories = response.data;
                    return response.data;
                } else {
                    return $q.reject(response.data);
                }
            }, function(response){
                return $q.reject(response.data);
            });
        }
        function deleteCategory(id) {
            var url = resourceUrl + '?action=delete_category';
            
            $http({
                url: url,
                method: 'post',
                data: {id:id}
            })
            .then(function(response) {
                if(typeof response.data == 'object') {
                    if(response.data.status) {
                        delete categories[id];
                    }
                } else {
                    console.error(response);
                }
            }, function() {
                
            });
        }

    });
    
    
}());

