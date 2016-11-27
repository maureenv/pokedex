(function() {
  var pokemonFactory = function($http){
    // $http makes ajax calls to node
    var factory = {}; // the factory object will take on the pokekmons to it
    factory.getPokemon = function() {
      return $http.get('/pokemon'); // this is returning a promise that needs to be fixed with the controller. The /pokemon needs to match what is going on in server.js. Then the controller will return any errors and process the data. Now everything is hooked up correctly RESTful service wise but we don't have a way to tie into the promise that is returnd so rely on controller
    }
    return factory;
  }
  angular.module('pokemonApp').factory('pokemonInjectFactory', pokemonFactory); //First argument is the one that will be passed around in other files. Second argument is the function that will also be passed into other files
}());
