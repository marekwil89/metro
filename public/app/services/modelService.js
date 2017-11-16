angular.module("modelService", [])

.factory('model', function($stateParams){
  return {
    login: {
      email: 'c09@email.pl',
      password: 'haslo123'
    },
    register: {
      email: 'm.fab@email.pl',
      password: 'haslo123',
      repeatPassword: 'haslo123',
      admin: true,
      station: null
    },
    command: {
      title: "Przykładowy tytuł",
      stations: [],
      descr: "<h1>To jest przykładowy naglowek</h1> <p>A to przykladowy paragraf</p>",
      startDate: null,
      endDate: null,
      priority: true
    }
  }
})