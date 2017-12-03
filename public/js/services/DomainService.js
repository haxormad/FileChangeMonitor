angular.module('Domain', []).service('Domain', ['$http', function($http) {

  this.create = function(object) {
    return $http.post('/api/domains', object);
  }

  this.fetchAll = function() {
    return $http.get('/api/domains');
  }

  this.fetchOne = function(id) {
    return $http.get('/api/domains/' + id);
  }

  this.fetchFileContents = function(id) {
    return $http.get('/api/domains/' + id + '/fileContents');
  }

  this.reloadFile = function(id) {
    return $http.post('/api/domains/' + id + '/reloadFile');
  }

  this.delete = function(id) {
    return $http.delete('/api/domains/' + id);
  }

}]);