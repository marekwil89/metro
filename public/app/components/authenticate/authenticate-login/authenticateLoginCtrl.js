angular.module("authenticateLoginModule", [])

.controller('authenticateLoginCtrl', function($scope, $rootScope, auth, $location, model){
  $scope.user = model.login
  
  $scope.login = function(user){
    auth.login(user).then(function(response){
      console.log(response)
      if(response.data.state === 'success'){
        $rootScope.getLogedUser()
        $scope.user = model.login
      }
      else{
        $scope.errors = response.data
        console.log($scope.errors)
      } 
    })
  }
})