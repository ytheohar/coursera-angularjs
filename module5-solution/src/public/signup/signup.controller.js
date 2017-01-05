(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'PrefService'];
function SignupController(MenuService, PrefService) {
  var signupCtrl = this;

  signupCtrl.itemExists = true;
  signupCtrl.user = PrefService.user;

  signupCtrl.submit = function () {
    signupCtrl.saved = false;
    MenuService.getItem(signupCtrl.user.favMenuItem)
      .then(function (response) {
        signupCtrl.itemExists = true;
        signupCtrl.user.favMenuItemFromServer = response.data;
        signupCtrl.saved = true;
      })
      .catch(function (error) {
        signupCtrl.itemExists = false;
        console.log(error);
      });
  };

}

})();
