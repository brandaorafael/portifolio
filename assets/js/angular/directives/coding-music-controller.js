var app = angular.module('Portifolio');

app.directive('codingMusic', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',
      scope: {
        paragraphs: '@'
      },

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/coding-music.html'

    };
  }
]);