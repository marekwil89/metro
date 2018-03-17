angular.module("configService", [])

.service('textAngularService', function($http){
  this.config = function () {
      return [
          ['h1', 'h2', 'h3', 'p', 'quote'],
          ['bold', 'italics', 'underline', 'ul', 'ol'],
          ['justifyLeft', 'justifyCenter', 'justifyRight'],
          ['insertLink']
      ];
  };
});
