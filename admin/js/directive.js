(function() {
    angular.module('cablink').directive('customButton', function() {
        return {
            restrict: 'A',
            replace: true,
            transclude: true,
            template: '<span class="widget-caption themesecondary pull-right" style="margin-right: 25px">\
                                                <a href="#/addcategory">Add Product</a>\
                                            </span>',
            line: function(scope, element, attrs) {
                
            }
        };
    });
}());