function TestCtrl(){
  var self = this;
  self.myString = "hello world";
  self.people = [
    {
      name:'Anu Shrestha',
      born: 'Boulder'
    },
    {
      name: 'Natalia Eguez',
      born: 'Boliva'
    },
    {
      name: 'Kevin Cowley',
      born: 'Denver'
    }
  ];
}

function CaptializeFilter(){
  return function (text) {
    return text.toUpperCase();
  }
}

angular.module('app', [])

.controller('TestCtrl', TestCtrl)

.filter('capitalize', CaptializeFilter);
