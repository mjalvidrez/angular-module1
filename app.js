(function () {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        // this is where we are giong to be doing the operations needed
        // you need to call the ng-function from the html page
        $scope.FeedMe = function () {
            // this list is meant to take in all the variables from the txt box
            var mylist = $scope.list;
            
            // need to account for null
            if (mylist === null){
                $scope.message = "please enter something"
                return;
            }

            mylist = $scope.list.split(',');

            // if the list has less than 3 and more than 0
            if(mylist.length <= 3 && mylist.length > 0 ){
                $scope.message = "Enjoy";
                return;
            }
            // and if there are to many inputs
            else{
                $scope.message = "To much! "
                return;
            }

            
        }


    }
})();