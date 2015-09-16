(function() {
    angular.module('cablink').directive('appView', function() {
        return {
          scope: {
            view: '=appView'
          },
          replace: true,
          template: '<nav class="navbar navbar-default">' +
                        '<div class="container">' +
                          '<ul class="nav navbar-nav navbar-right">' +
                            '<li ng-repeat="v in views" ng-bind="v.name" ng-class="v.icon" ng-click="switchView(v)"></li>' +
                          '</ul>' +
                        '</div>' +
                    '</nav>',
          link: function(scope, el, attr) {
            scope.views = [{
              name: 'List',
              template: 'views/product/list.html',
              icon: 'btn btn-default navbar-btn glyphicon glyphicon-th-list'
            }, {
              name: 'Grid',
              template: 'views/product/grid.html',
              icon: 'btn btn-default navbar-btn glyphicon glyphicon-th'
            }];
          },
          controller: ['$scope', function($scope){
            $scope.switchView = function(view) {
              $scope.view = view.template;
            }
          }]
        }
      });
}());