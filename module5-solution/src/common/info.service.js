(function () {
    "use strict";

    angular.module('common')
        .service('InfoService', InfoService);

    function InfoService() {
        var service = this;
        service.user = null;

        service.setUserInfo = function (user) {
            service.user = user;
        };

        service.getUserInfo = function () {
            return service.user;
        };
    }



})();

