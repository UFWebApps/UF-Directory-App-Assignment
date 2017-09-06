angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.searchInput = undefined;
    $scope.newCodeInput = undefined;
    $scope.newNameInput = undefined;
    $scope.newAddressInput = undefined;
    $scope.newLatitudeInput = undefined;
    $scope.newLongitudeInput = undefined;
  
      
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
      
    //adding something to the list
    $scope.addListing = function() {
        
        //Create the new listing with the new coordinates
      var newCoordinates = {
        latitude:$scope.newLatitudeInput,
        longitude:$scope.newLongitudeInput
      }
      var newListing = {
        code:$scope.newCodeInput.toUpperCase(),
        name:$scope.newNameInput,
        address:$scope.newAddressInput,
        coordinates:newCoordinates
      };

       //Create the original list that is taken from the Listings 
      var originalList = Array.from(Listings);

      var inOriginal = false;
      for (var i = 0; i < originalList.length; i++) {
        if (originalList[i].code.toLowerCase() > newListing.code.toLowerCase()) {
            //Add the listing before the higher listing in the original
          originalList.splice(i, 0, newListing);
          inOriginal = true;
          break;
        }
      }
    
        //If you are at the end of the orginial list
      if (!inOriginal) {
        // Add the new listing to the end of the original
        originalList.push(newListing);
      }
      

      //Update the Listings and the scope
      Listings = originalList;
      $scope.listings = originalList;
      
      //Reset the variables
      $scope.newCodeInput = undefined;
      $scope.newNameInput = undefined;
      $scope.newAddressInput = undefined;
      $scope.newLatitudeInput = undefined;
      $scope.newLongitudeInput = undefined;
    }
    
    
    $scope.deleteListing = function(index) {
    
        //Create a array of the original and one for the searched listings. Delete the listings from both.
        var originalList = Array.from(Listings);
      var searchedList = Array.from($scope.listings);
        
        //define the deleted listing
      var deletedListing = searchedList[index];
        
        //Search for the listing oyu want deleted and then delete
      for (var i = 0; i < originalList.length; i++) {
        if (originalList[i].code.toLowerCase() === deletedListing.code.toLowerCase()) {
          originalList.splice(i, 1);
          break;
        }
      }
        //Remove the listing from the searched list
      searchedList.splice(index, 1);
        
        //Update the Listings and the scope
      Listings = originalList;
      $scope.listings = searchedList;
        
    };
      
      
    //show the details for a selected listing
    $scope.showDetails = function(index) {
        $scope.detailedInfo = $scope.listings[index];  
        
    };
      
    //search through the list when using the search bar
    $scope.searchData = function() {
        
        //Create an original list and an updated list
        var originalList = Array.from(Listings);
        var updatedList = [];

        //If the search bar is not being used just use the original list
        if ($scope.searchInput == null) {
            $scope.listings = originalList;
          }
      else {
          
        //For loop to search through the original list
        for (var i = 0; i < originalList.length; i++) {
            //If an element in the originalList contains the searchInput then push that building element into the updatedList
          if (originalList[i].name.toLowerCase().includes($scope.searchInput.toLowerCase())) {
            updatedList.push(originalList[i]);
          }
          else if (originalList[i].code.toLowerCase().includes($scope.searchInput.toLowerCase())) {
            updatedList.push(originalList[i]);
          }
        }
          //Update the listings variable with the new list
        $scope.listings = updatedList;
      }
    };
  }
]);