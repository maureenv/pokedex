(function() {
  var app = angular.module('pokemonApp', ['ngRoute']);
    // $routeProvider is used to configure the routes. We use the ngRoute config() to configure the $routeProvider. The config() takes a function which takes the $routeProvide as a parameter and the routing configuration goes inside the function

    // $routeProvider has a simple API, accepting either the when() or otherwise() method.
  app.config(function($routeProvider){
    $routeProvider
    .when('/', {
      controller: 'pokemonController', // since controller is being passed into template through the route I no longer have to attach controller in template itself
      templateUrl: 'app/views/pokemon.html' // to see if page is working just create a route and a view for it. Don't need controller yet

    })

  })


}());
