var app = angular.module('Portifolio');

app.directive('headerportifolio', ["$rootScope",
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