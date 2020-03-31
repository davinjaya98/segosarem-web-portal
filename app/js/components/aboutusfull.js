app.component('aboutUsFull', {
    // This is the HTML
    template:
        `<div class="c-about-us-full" ng-init="initAboutUsFullController()">
            <div class="custom-container">
                <div class="c-about-us-full-container">
                    <img ng-src="{{aboutUsFull['aboutus.aboutussfull.image'][0]['aboutus.aboutussfull.image.path']}}" alt="about us full image">
                    <div class="c-about-us-full-description-placeholder">
                        <p>{{aboutUsFull['aboutus.aboutussfull.desc'][0]['aboutus.aboutussfull.desc.text']}}</p>
                    </div>
                </div>
            </div>
        </div>`,
    // This is for props
    bindings: {

    },
    // This is for the controller
    controller: aboutUsFullController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
aboutUsFullController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function aboutUsFullController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    // This is the state
    $scope.aboutUsFull = {};

    $scope.initAboutUsFullController = () => {
        let request = {
            "pageKey": "aboutus"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            if (res.returnCode == "000000") {
                $scope.aboutUsFull = res.responseObject.aboutus;
            }
        });
    }
}