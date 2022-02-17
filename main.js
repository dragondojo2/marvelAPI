var app = angular.module('mainApp', [])
app.controller('HeroController', function ($http, $scope) {
  let hero = this;
  const HASH = "bd4b447a65ef5d6b174f87cf9db6d2db"
  const API_KEY = "5a237863b3cc2061003cbbc4fe20dc06"
  let url = `http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=${API_KEY}&hash=${HASH}`;

  $http({
    method: 'GET',
    url: url
  }).then(function successCallback(response) {
    hero.herosArray = response.data.data.results
    console.log(hero.herosArray)

    for (let i = 0; i < hero.herosArray.length; i++) {
      response.data.data.results[i].thumbnail.fullLink = `${response.data.data.results[i].thumbnail.path}.${response.data.data.results[i].thumbnail.extension} `
    }
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
});