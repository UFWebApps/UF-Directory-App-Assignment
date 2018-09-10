angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      var submit = {
            "code": $scope.code_in.toUpperCase(), 
            "name": $scope.name_in, 
            "coordinates": {
                "latitude": $scope.latitude_in, 
                "longitude": $scope.longitude_in
            }, 
            "address": $scope.address_in
    };
      $scope.listings.push(submit);
      $scope.code_in = '';
      $scope.name_in = '';
      $scope.latitude_in = '';
      $scope.longitude_in = '';
      $scope.address_in = '';
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);