var app = angular.module('myApp', ['ui.router']);

app.run(function ($rootScope) {
    alert('myApp has started');

    $rootScope.getBaseUrl = function () {
      // return "http://localhost:1998/api/v1/";
      return "http://glic.azurewebsites.net/api/v1/";
    };
});
