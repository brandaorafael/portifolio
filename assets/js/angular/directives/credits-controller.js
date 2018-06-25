var app = angular.module('Portifolio');

app.directive('credits', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/credits.html'

    };
  }
]);