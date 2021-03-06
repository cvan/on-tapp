'use strict';

angular.module('nearby').factory('Brewery', ['$http',
  function($http) {
    // Public API
    return {
      getData: function(breweryId){
        return $http.get('/api/brewery/' + breweryId);
      },
      getBeersData: function(breweryId){
        return $http.get('/api/beers/' + breweryId);
      }
    };
  }
]);
