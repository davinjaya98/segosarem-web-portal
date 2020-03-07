app.run(globalFunction).controller("HomeController", homeController)
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
homeController.$inject = ['$scope', 'HTTPService', 'NotificationService', 'LoadingService', 'AppConstant'];
function homeController($scope, HTTPService, NotificationService, LoadingService, AppConstant) {
    $scope.initHomeController = () => {
        console.log("Home is loaded")
    }
}