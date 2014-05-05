app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "/home/home.html",
        controller: 'homeController'

    });
});

app.controller('homeController', function ($http, $rootScope, $scope) {
    var self = this;

    self.loadSessions = function () {
        var url = $rootScope.getBaseUrl() + "conference/1/session";
        $http({ method: 'get', url: url })
          .success(function (data, status, headers, config) {
              $scope.sessions = data;
          })
          .error(function (data, status, headers, config) {
              $scope.errorMessage = "An error occured while attempting to register.";
          });
    };

    self.loadSessions();
});