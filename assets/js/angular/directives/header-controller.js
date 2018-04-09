var app = angular.module('Portifolio');

app.directive('headerportifolio', ["$rootScope",
    function($rootScope) {
  return {
  	restrict: 'E',
    scope: {
      name: '=',
      surname: '=',
      role: '=',
      photo: '=?',
      twitter: '=?',
      gplus: '=?',
      linkedin: '=?',
      github: '=?',
      hackernews: '=?',
      email: '=?'
    },
  	link: function($scope){

      $scope.rootScope = $rootScope;

  	},
    templateUrl: 'views/directives/header.html'
  };
}]);