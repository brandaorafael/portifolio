var app = angular.module('Portifolio');

app.directive('basicInfo', ["$rootScope",
  function($rootScope) {
    return {
      restrict: 'E',

      link: function($scope){

        $scope.rootScope = $rootScope;

      },

      templateUrl: 'views/directives/basic_info.html'

    };
  }
]);