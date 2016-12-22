(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowItDown = this;

  narrowItDown.found;

  narrowItDown.getMatchedMenuItems = function (searchTerm) {
    if (angular.isUndefined(searchTerm) || searchTerm === '') {
      narrowItDown.found = [];
      return;
    }
    MenuSearchService.getMatchedMenuItems(searchTerm).then(function(result) {
      narrowItDown.found = result;
    }).catch(function (error) {
        console.log(error);
     });
  }

  narrowItDown.removeItem = function (itemIndex) {
    narrowItDown.found.splice(itemIndex, 1);
  };

};

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var searchTermLowerCased = searchTerm.toLowerCase();
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {
        // process result and only keep items that match
        var foundItems = [];
        angular.forEach(result.data.menu_items, function(item) {
          if( item.description.toLowerCase().indexOf(searchTermLowerCased) >= 0 ) {
            foundItems.push(item);
          }
        });

        // return processed items
        return foundItems;
    });
  };
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundItemsCtrl',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var foundItemsCtrl = this;
}


})();
