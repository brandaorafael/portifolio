var app = angular.module('Portifolio');

app.directive('languages', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',
      scope: {
        paragraphs: '@'
      },

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/languages.html'

    };
  }
]);