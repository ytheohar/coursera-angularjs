(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['list'];
function CategoriesController(list) {
  var categories = this;
  categories.list = list;
}

})();
