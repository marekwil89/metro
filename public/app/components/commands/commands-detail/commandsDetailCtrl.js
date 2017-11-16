angular.module("commandsDetailModule", [])

.controller('commandsDetailCtrl', function($scope, commandsOperation, redirect, $rootScope){
  redirect.ifLogout($rootScope.current_user)

  commandsOperation.getDetail().then(function(response){
    $scope.commandDetail = response.data
  })  
})