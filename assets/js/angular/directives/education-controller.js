var app = angular.module('Portifolio');

app.directive('education', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/education.html'

    };
  }
]);