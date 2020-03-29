var app = angular.module(projectName, ['ServiceManager', 'ngSanitize', 'ngPatternRestrict']);

app.run(globalFunction);

//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
globalFunction.$inject = ['HTTPService', 'NotificationService', 'LoadingService', 'AppConstant', '$rootScope'];
function globalFunction(HTTPService, NotificationService, LoadingService, AppConstant, $rootScope) {
    console.log("This is a global function that is run everytime the angular is loaded")
}

app.controller("HomepageController", homepageController);

homepageController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function homepageController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    // This is the state
    $scope.homepage = {};

    $scope.initHomepageController = () => {
        let request = {
            "pageKey": "homepage"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            console.log("Homepage is loaded with ", res);
            if(res.returnCode == "000000") {
                $scope.homepage = res.responseObject.pageSetting;
            }
        });
    }
}