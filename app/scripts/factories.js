mismarUiApp.factory('Masjid', ['$resource', '$http', 'ENV', function($resource, $http, ENV){

  $http.defaults.useXDomain = true;

  return $resource(ENV.apiEndpoint + "/masjids/:id");

}]);
