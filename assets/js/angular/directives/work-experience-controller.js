var app = angular.module('Portifolio');

app.directive('workExperience', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/work-experience.html'

    };
  }
]);