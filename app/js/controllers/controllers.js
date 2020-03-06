app.run(globalFunction).controller("SampleController", sampleController)
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
globalFunction.$inject = ['HTTPService', 'NotificationService', 'LoadingService', 'AppConstant', '$rootScope'];
function globalFunction(HTTPService, NotificationService, LoadingService, AppConstant, $rootScope) {
    console.log("This is a global function that is run everytime the angular is loaded")
}
sampleController.$inject = ['$scope', 'HTTPService', 'NotificationService', 'LoadingService', 'AppConstant'];
function sampleController($scope, HTTPService, NotificationService, LoadingService, AppConstant) {
    $scope.initSampleController = () => {
        console.log("Sample is loaded")
    }
}