var app = angular.module("myApp",[]);

app.controller('jsonFetcher',function($scope, $http){

  $http.get('json/gadetails.json').success(function(data){
      $scope.assistants = data;
  });

});
