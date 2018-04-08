var app = angular.module('Portifolio');

app.directive('headerPortifolio', ["$rootScope",
    function($rootScope) {
  return {
  	restrict: 'E',
    scope: {
      name: '=',
      photo: '='
    },
  	link: function($scope){

      $scope.rootScope = $rootScope;

  	},
    templateUrl: 'views/directives/header.html'
  };
}]);