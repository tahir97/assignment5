(function () {
    "use strict";

    angular.module('public')
        .component('userDetail', {
            templateUrl: 'src/public/user-detail/user-detail.html',
            bindings: {
                user: '<'
            },
            controller: UserDetailController
        });

    UserDetailController.$inject = ['ApiPath'];
    function UserDetailController(ApiPath) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
    }




})();
