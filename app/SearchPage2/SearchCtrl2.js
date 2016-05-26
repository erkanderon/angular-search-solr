/**
 * Created by erkanderon on 4/28/16.
 */
var app = angular.module('SearchPage2', []);



app.controller('SearchCtrl2', ['$scope', function($scope, $http){

    $scope.query = "";
    $scope.results = [];
    $scope.hello = {
        model:"",
        model2:"",
        model3:""
    };
    window.results = $scope.results;
    angular.callbacks.solrCallback = function(data) {
        //console.log('Respone: ', data.response);
        //console.log('--Result Count:', data.response.docs.length);
        for(i=0;i<data.response.docs.length;i++){
            if(data.response.docs[i].cat[0]== $scope.query){
                $scope.results.push(data.response.docs[i]);
            }
        }
        $scope.counter = $scope.results.length;
        $scope.$apply();
    }
    $scope.change = function(query) {
        $scope.results=[];
        $scope.query = query;
        console.log('Changing: ', $scope.query);
        $.getJSON('http://localhost:8983/solr/collection1/select?callback=?',
            { q : $scope.query,
                wt : 'json',
                'json.wrf':'angular.callbacks.solrCallback'
            });
    };
    $scope.searchSomething = function(param){
        $scope.resultset = [];
        console.log('Respone: ', $scope.results);
        for(k=0;k<$scope.results.length;k++){
            if($scope.results[k].content[0].search(param)!= -1){
                    $scope.resultset.push($scope.results[k]);
            };
        }
        $scope.results = $scope.resultset;
        console.log('--Result Count:', $scope.resultset);
        $scope.counter2=$scope.resultset.length;
    }
}]);