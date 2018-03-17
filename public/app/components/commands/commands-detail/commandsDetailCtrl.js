angular.module("commandsDetailModule", [])

.controller('commandsDetailCtrl', function($scope, commandsOperation, redirect, $rootScope){
  if(redirect.ifLogout()){
    return;
  }

  commandsOperation.getDetail().then(function(response){
    $scope.commandDetail = response.data
  })  
})