'use strict';

mismarUiApp
  .controller('MasjidCtrl', ['$scope','Masjid', function ($scope, Masjid) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Masjid.query(function(data) {
      console.log(data);
      $scope.masjids = data;
    });
  }]);

