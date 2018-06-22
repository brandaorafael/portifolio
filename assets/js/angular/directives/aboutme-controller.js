var app = angular.module('Portifolio');

app.directive('aboutme', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/aboutme.html'

    };
  }
]);