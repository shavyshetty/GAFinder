var app = angular.module("myApp",[]);

app.controller('jsonFetcher',function($scope, $http){
  $http.get('json/gadetails.json').success(function(data){
      $scope.assistants = data;
  });
});
app.controller('ScheduleFetcher',function($scope, $http){
  var day = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var json_name = 'json/schedule'+days[day.getDay()]+'.json'
  $http.get(json_name).success(function(data){
      $scope.schedule = data;
  });
});
