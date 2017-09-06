angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      $scope.newListing = undefined;
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      $scope.newDetails = $scope.listings[index].address;
      $scope.index = index;
      console.log($scope.newDetails);
      console.log($scope.index);
    };
  }
]);
