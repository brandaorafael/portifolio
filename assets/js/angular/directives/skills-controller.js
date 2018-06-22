var app = angular.module('Portifolio');

app.directive('skills', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/skills.html'

    };
  }
]);