mismarUiApp.factory('Masjid', function($resource, $http, ENV){

  $http.defaults.useXDomain = true;

  return $resource(ENV.apiEndpoint + "/masjids/:id");

});
