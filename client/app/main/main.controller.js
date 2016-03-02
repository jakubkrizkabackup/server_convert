'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.awesomeThings = [];


    $scope.labels = [];
    $scope.series = ['BitCoins'];
    $scope.data = [
      []
    ];

    console.log($scope.labels);
    console.log($scope.data);


    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;

      for (name in this.awesomeThings) {
        $scope.data[0].push(this.awesomeThings[name].name);

        var date = new Date(this.awesomeThings[name].createdAt);
        $scope.labels.push(date.getHours() + ":" + date.getMinutes());
      }



      socket.syncUpdates('thing', this.awesomeThings, function(event, item, object) {

        $scope.data[0].push(item.name);
        var date = new Date(item.createdAt);
        $scope.labels.push(date.getHours() + ":" + date.getMinutes());


      });
    });



    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('serverConvertApp')
  .controller('MainController', MainController);

})();
