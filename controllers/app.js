angular.module('app', []);

angular.module('app').controller('MainCtrl', function(){
  var self = this;
  self.message = 'hola';

  self.updateMessage = function(message){
    self.message = message;
  };
});
