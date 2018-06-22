var app = angular.module('Portifolio');

app.directive('blogPosts', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/blog-posts.html'

    };
  }
]);