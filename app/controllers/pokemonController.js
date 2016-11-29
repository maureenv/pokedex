(function(){

var pokemonController = function($scope, pokemonInjectFactory){
  function init() {
    pokemonInjectFactory.getPokemon() // the getPokemon function is passing in the data from the factory
    .success(function(pokemonData){
      $scope.pokemon = pokemonData;
      console.log(pokemonData); // check if data is being passed through
    })
    .error(function(data, status, headers, config){

    })
  }
  init();
}

angular.module('pokemonApp')
  .controller('pokemonController', pokemonController);


}());
