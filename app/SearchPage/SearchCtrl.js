/**
 * Created by erkanderon on 3/5/16.
 */


var app = angular.module('SearchPage', []);



app.controller('SearchCtrl', ['$scope', function($scope, $http){

    $scope.query = "";
    $scope.results = [];
    window.results = $scope.results;
    angular.callbacks.solrCallback = function(data) {
        console.log('Respone: ', data.response);
        console.log('--Result Count:', data.response.docs.length);
        $scope.results = data.response.docs;
        $scope.counter = $scope.results.length;
        $scope.$apply();
    }
    $scope.change = function() {
        console.log('Changing: ', $scope.query);
        $.getJSON('http://localhost:8983/solr/collection1/select?callback=?',
            { q : $scope.query,
                wt : 'json',
                'json.wrf':'angular.callbacks.solrCallback'
            });
    };
}]);
