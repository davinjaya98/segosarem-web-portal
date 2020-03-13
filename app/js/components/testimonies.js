app.component('cTestimonies', {
    //This is the HTML
    template:
        `<div class="c-testimonies" ng-init="initTestimoniesController()">
            <div class="custom-container">
                <div class="c-testimonies-image">
                    <img src="/assets/images/testimony-sample.png" alt="Testimony Image">
                </div>
                <div class="c-testimonies-carousel">
                    <div class="testimony">
                        <span class="section-title description">“Pedesnya mantuuull... favorit gw deh!!! Apalagi
                            NASI Guyur Sambel, Hot Banget!”</span>
                        <span class="section-title name">ADAM MELER</span>
                    </div>
                </div>
            </div>
        </div>`,
    //This is for props
    bindings: {

    },
    //This is for the controller
    controller: testimoniesController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
testimoniesController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function testimoniesController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    //This is the State
    $scope.contactUs = {};

    $scope.initTestimoniesController = () => {
        console.log("Testimonies component is loaded");
    }
}