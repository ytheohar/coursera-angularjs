(function () {
"use strict";

angular.module('common')
.service('PrefService', PrefService);


function PrefService() {
  var service = this;

  service.user = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    favMenuItem: '',
    favMenuItemFromServer: {}
  };

}



})();
