(function () {
'use strict';

angular.module('ShoppingList', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;
  toBuyCtrl.toBuy = ShoppingListCheckOffService.toBuy;
  toBuyCtrl.buyItem = function(item, index) {
    ShoppingListCheckOffService.buyItem(item, index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;
  boughtCtrl.bought = ShoppingListCheckOffService.bought;
}

ShoppingListCheckOffService.$inject = []
function ShoppingListCheckOffService() {
  var service = this;

  service.toBuy = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 2 },
    { name: "cokes", quantity: 5 },
    { name: "sausages", quantity: 3 },
    { name: "chicken filets", quantity: 4 },
  ];
  service.bought = [];

  service.buyItem = function (item, index) {
    service.bought.push(item);
    service.toBuy.splice(index, 1);
  };
}

})();
