angular.module("authServ", [])

.factory('auth', function($http){
  return {

    getLogedUser: function(){
      return $http.get('/auth/getLogedUser')
    },
    logOut: function(){
      return $http.get('/auth/logout')
    },
    login: function(user){
      return $http.post('/auth/login', user)
    },
    register: function(user){
      return $http.post('/auth/register', user)
    },
  };
})