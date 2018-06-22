var app = angular.module('Portifolio');

app.directive('project', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/project.html'

    };
  }
]);