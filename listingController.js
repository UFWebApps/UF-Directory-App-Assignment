angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
     
     
     
     
     
     */
    $scope.addListing = function() {
      if ($scope.listing.code && $scope.listing.name){
          $scope.listing.code = $scope.listing.code.toUpperCase();
          $scope.listings.push($scope.listing);
          $scope.listing = "";
        }
    };
    $scope.deleteListing = function(index) {
        if($scope.listings[i].code == index.code) {
            $scope.listings.splice(i, 1);
        }
    };
    $scope.showDetails = function(index) {
    };
  }
]);
