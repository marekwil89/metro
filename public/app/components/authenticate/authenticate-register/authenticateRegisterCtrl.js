angular.module("authenticateRegisterModule", [])

.controller('authenticateRegisterCtrl', function($scope, $rootScope ,auth, $location, stations, model){

  $scope.user = model.register
  $scope.stations = stations.data

  $scope.register = function(user){
    auth.register(user).then(function(response){
      if(response.data.state === 'success'){
        $rootScope.getLogedUser()
        $location.path('/commands-active-list')
        $scope.user = model.register
      }
      else{
        $scope.errors = response.data
      } 
    })
  }
})