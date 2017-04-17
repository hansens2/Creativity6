angular.module("myApp", ['ui.router'])
  .controller('myController', ['$scope', '$http', 
                              function($scope, $http) {
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    })
    .error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }])
  .factory('entriesFactory', [function(){
    var o = {
      entries: [
    {
      "Day" : "Feb 25",
      "Drink" : true,
      "Brkfst" : true,
      "Lunch" : false,
      "Dinner" : false,
      "Stress" : true,
      "Affirm" : true,
      "Think" : false,
      "Sleep" : true,
      "Weigh" : true,
      "Snacks" : false,
      "Lemon" : true,
      "Exercise" : true
    },{
      "Day" : "Feb 26",
      "Drink" : false,
      "Brkfst" : true,
      "Lunch" : false,
      "Dinner" : true,
      "Stress" : false,
      "Affirm" : true,
      "Think" : false,
      "Sleep" : false,
      "Weigh" : true,
      "Snacks" : true,
      "Lemon" : true,
      "Exercise" : true
    },{
      "Day" : "Feb 27",
      "Drink" : false,
      "Brkfst" : true,
      "Lunch" : true,
      "Dinner" : false,
      "Stress" : true,
      "Affirm" : false,
      "Think" : false,
      "Sleep" : true,
      "Weigh" : true,
      "Snacks" : true,
      "Lemon" : true,
      "Exercise" : false
    },{
      "Day" : "Feb 28",
      "Drink" : false,
      "Brkfst" : true,
      "Lunch" : true,
      "Dinner" : false,
      "Stress" : true,
      "Affirm" : false,
      "Think" : false,
      "Sleep" : true,
      "Weigh" : true,
      "Snacks" : true,
      "Lemon" : true,
      "Exercise" : false
    },{
      "Day" : "March 1",
      "Drink" : true,
      "Brkfst" : true,
      "Lunch" : false,
      "Dinner" : false,
      "Stress" : false,
      "Affirm" : false,
      "Think" : true,
      "Sleep" : true,
      "Weigh" : false,
      "Snacks" : true,
      "Lemon" : false,
      "Exercise" : true
    },{
      "Day" : "April 13",
      "Drink" : true,
      "Brkfst" : false,
      "Lunch" : false,
      "Dinner" : false,
      "Stress" : false,
      "Affirm" : true,
      "Think" : true,
      "Sleep" : true,
      "Weigh" : true,
      "Snacks" : true,
      "Lemon" : true,
      "Exercise" : true
    },{
      "Day" : "April 17",
      "Drink" : true,
      "Brkfst" : false,
      "Lunch" : false,
      "Dinner" : true,
      "Stress" : false,
      "Affirm" : true,
      "Think" : true,
      "Sleep" : true,
      "Weigh" : false,
      "Snacks" : false,
      "Lemon" : false,
      "Exercise" : false
    },{
      "Day" : "April 18"}]
    };
    return o;
  }])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'myCtrl'
        });
      $stateProvider
        .state('table', {
          url: '/table',
          templateUrl: '/table.html',
          controller: 'tableCtrl'
        });
      $urlRouterProvider.otherwise('home');
  }])

  .controller("myCtrl", function($scope,entriesFactory) {
     $scope.entries = entriesFactory.entries; 
     $scope.tiles = [
        { src: "greenDrink.png", tileName: "Drink", caption: "Green Drink" },
        { src: "breakfast.png", tileName: "Brkfst", caption: "Healthy Breakfast" },
        { src: "lunch.png", tileName: "Lunch", caption: "Balanced Lunch" },
        { src: "dinner.png", tileName: "Dinner", caption: "Light Dinner" },
        { src: "weight.png", tileName: "Weigh", caption: "Weight"  },
        { src: "exercise.png", tileName: "Exercise", caption: "Exercise" },
        { src: "snacks.png", tileName: "Snacks", caption:  "Good Snacks" },
        { src: "lemonJuice.png", tileName: "Lemon", caption: "Lemon Water" },
        { src: "stressLess.png", tileName: "Stress", caption: "Reduce Stress" },
        { src: "affirmation.png", tileName: "Affirm", caption: "Affirmations" },
        { src: "visualize.png", tileName: "Think", caption: "Think Thin" },
        { src: "sleep.png", tileName: "Sleep", caption: "Good Night's Sleep" }
];
     $scope.setTile = function(tile){
       var len = $scope.entries.length;
       var theEntry = $scope.entries[len-1];
       theEntry[tile.tileName] = true;
     };
  })

  .controller("tableCtrl", function($scope,entriesFactory) {
     $scope.entries = entriesFactory.entries; 
  });



