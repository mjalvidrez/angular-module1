(function () {
    'use strict';

    angular.module('LunchCheck', []);

    .controller('MyFirstController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        // this is where we are giong to be doing the operations needed
        // 

    }
})();