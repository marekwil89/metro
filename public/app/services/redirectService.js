angular.module("redirectService", [])

.factory('redirect', function($location, $rootScope){
  return {
    ifLogout: function(current_user){    
      if(!current_user){
        $location.path('/login')
      }
    },
    user: function(current_user){
      if(current_user.admin === true){
        $location.path('/commands-active-list')
      }
      else if(current_user.admin === false){
        $location.path('/commands-active-list-current-station/' + current_user.station)
      }
      else{
        $location.path('/login')
      }
    }
  };
})