'use strict';

mismarUiApp
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.masajids = masajids_data;

  });
//mismarUiApp
//  .controller('MasjidCtrl', function($scope) {
//    $scope.masajids = "test";
//  });

var masajids_data = [
  {"name":"WEI Centre","full_address":"3355 The Collegeway #19-21, Mississauga, Canada","latlon":[43.5245426,-79.7046579],"api_uri":"/masjids/1","salah_times":[{"salah":"isha","time":"2000-01-01T20:30:00.000Z"},{"salah":"maghrib","time":"2000-01-01T18:30:00.000Z"},{"salah":"asr","time":"2000-01-01T16:30:00.000Z"},{"salah":"dhuhr","time":"2000-01-01T13:50:00.000Z"},{"salah":"fajr","time":"2000-01-01T04:50:00.000Z"}]},{"name":"Anatolia Islamic Centre","full_address":"5280 Maingate Dr, Mississauga, Canada","latlon":[43.6336122,-79.6320336],"api_uri":"/masjids/2","salah_times":[{"salah":"isha","time":"2000-01-01T20:30:00.000Z"},{"salah":"maghrib","time":"2000-01-01T18:30:00.000Z"},{"salah":"asr","time":"2000-01-01T16:30:00.000Z"},{"salah":"dhuhr","time":"2000-01-01T13:50:00.000Z"},{"salah":"fajr","time":"2000-01-01T04:50:00.000Z"}]}]
