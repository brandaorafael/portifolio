var app = angular.module('Portifolio');

app.directive('otherProjects', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/other-projects.html'

    };
  }
]);