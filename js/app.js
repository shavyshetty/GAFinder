var app = angular.module("myApp",[]);

app.controller('jsonFetcher',['$http',function($http){

  var controller = this;
  this.getdata  = 'json/data.json';
  

}]);
