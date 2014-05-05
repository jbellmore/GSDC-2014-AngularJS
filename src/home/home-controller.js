app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "/home/home.html",
        controller: 'homeController'

    });
});

app.controller('homeController', function () {
    var self = this;

    alert('Home controller loaded');
});