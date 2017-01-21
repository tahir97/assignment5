(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['InfoService','MenuService'];
    function SignupController(InfoService,MenuService) {
        var signupCtrl = this;
        signupCtrl.itemFound = true;
        signupCtrl.validInfo = false;

        signupCtrl.signUp = function () {
            var item = MenuService.getFavoriteItem(signupCtrl.user.dish);
            item.then(function (response) {
                signupCtrl.itemFound = true;
                signupCtrl.validInfo = true;
                signupCtrl.user.itemDetails = response.data;
                InfoService.setUserInfo(signupCtrl.user);

            }, function (error) {
                signupCtrl.itemFound = false;
                signupCtrl.validInfo = false;
            });
        };
    }


})();

