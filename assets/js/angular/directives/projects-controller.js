var app = angular.module('Portifolio');

app.directive('projects', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/projects.html'

    };
  }
]);