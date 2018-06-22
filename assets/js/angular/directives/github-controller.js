var app = angular.module('Portifolio');

app.directive('github', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/github.html'

    };
  }
]);