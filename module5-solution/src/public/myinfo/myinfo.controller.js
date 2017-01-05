(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['PrefService', 'ApiPath'];
function MyInfoController(PrefService, ApiPath) {
  var myinfoCtrl = this;
  myinfoCtrl.user = PrefService.user;
  myinfoCtrl.basePath = ApiPath;

  myinfoCtrl.isRegistered = function () {
    return myinfoCtrl.user.firstname !== '';
  }

}

})();
