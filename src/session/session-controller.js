app.config(function ($stateProvider) {
    $stateProvider.state('session', {
    	//params defined in path using {param} or query sring using ?param
        url: "/session/{sessionId}",
        templateUrl: "/session/session.html",
        controller: "sessionController"
    });
});

app.controller('sessionController', function ($stateParams, $rootScope, $scope, $http) {
    var self = this;

    self.loadSessionDetails = function (sessionId) {
           
      var url = $rootScope.getBaseUrl() + "conference/1/session/" + sessionId;
    
      $http({ method: 'get', url: url })
        .success(function (data, status, headers, config) {
           $scope.session = data;
        })
        .error(function (data, status, headers, config) {
           $scope.errorMessage = "An error occured while loading the session details.";
          });
    };
          

    //alert('Session controller loaded with sessionId = ' + $stateParams.sessionId);
    self.loadSessionDetails($stateParams.sessionId);
});

app.filter('newlines', function ($sce) {
    return function(text) {
    	if(!angular.isUndefined(text)){
    		return $sce.trustAsHtml(text.replace(/\n/g, '<br/>'));
    	} else {
    		return text;
    	}
    }
})