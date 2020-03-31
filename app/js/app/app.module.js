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

app.controller("HomepageController", homepageController)
    .controller("GalleryController", galleryController);

homepageController.$inject = ['$scope', 'HTTPService'];
function homepageController($scope, HTTPService) {
    // This is the state
    $scope.homepage = {};
    $scope.pageSetting = {};

    $scope.initHomepageController = () => {
        let request = {
            "pageKey": "homepage"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            console.log("Homepage is loaded with ", res);
            if(res.returnCode == "000000") {
                $scope.homepage = res.responseObject.homepage;
                $scope.pageSetting = res.responseObject.pageSetting;
            }
        });
    }
}

galleryController.$inject = ['$scope', 'HTTPService'];
function galleryController($scope, HTTPService) {
    // This is the state
    $scope.gallery = {};
    $scope.pageSetting = {};

    $scope.initGalleryController = () => {
        let request = {
            "pageKey": "gallery"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            if(res.returnCode == "000000") {
                $scope.gallery = res.responseObject.gallery;
                $scope.pageSetting = res.responseObject.pageSetting;
            }
        });
    }
}