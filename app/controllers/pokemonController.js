(function(){

var pokemonController = function($scope, pokemonInjectFactory){
  function init() {
    pokemonInjectFactory.getPokemon()
    .success(function(pokemon){
      $scope.pokemon = pokemon;
      console.log(pokemon);
    })
    .error(function(data, status, headers, config){

    })
  }
  init();
}

angular.module('pokemonApp')
  .controller('pokemonController', pokemonController);


}());
