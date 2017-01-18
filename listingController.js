angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      // use .unshift to push to array
        console.log("new entry " + $scope.newName);
      if($scope.newCode){

        $scope.listings.unshift({
            code: $scope.newCode,
            name: $scope.newName,
            coordinates: {
              latitude: $scope.newLatitude,
              longitude: $scope.newLongitude
            },
            address: $scope.newAddress
        })
        $scope.newCode = null;
        $scope.newName = null;
        $scope.newLongitude = null;
        $scope.newLatitude = null;
        $scope.newAddress = null;
      }
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
        console.log('clicked ' + index);
        var address = 'no address available';
        var lat = 'not available';
        var long = 'not available';
        if($scope.listings[index].address) {
          address = $scope.listings[index].address
        }
        var addressParts = address.split(',');

        if($scope.listings[index].coordinates){
          if($scope.listings[index].coordinates.longitude){
            long = $scope.listings[index].coordinates.longitude
          }
          if($scope.listings[index].coordinates.latitude){
            lat = $scope.listings[index].coordinates.latitude
          }
        }

        $scope.detailedInfo = {
          name: $scope.listings[index].name,
          latitude: lat,
          longitude: long,
          address: addressParts
        }
    };
  }
]);
