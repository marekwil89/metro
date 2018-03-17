angular.module("runModule", [])

.run(function($rootScope, auth, $location, redirect) { 

  $rootScope.getLogedUser = function(){
    auth.getLogedUser().then(function(response){
      $rootScope.current_user = response.data
      // redirect.user($rootScope.current_user)
    })
  }


  $rootScope.getLogedUser()
  console.log($rootScope.current_user)

  $rootScope.logOut = function(){
    auth.logOut().then(function(){
      $rootScope.getLogedUser()
      $location.path('/login')
    })
  }
})
