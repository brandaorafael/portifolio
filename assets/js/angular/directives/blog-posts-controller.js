var app = angular.module('Portifolio');

app.directive('blogPosts', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',
      scope: {
        paragraphs: '@'
      },

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/blog-posts.html'

    };
  }
]);