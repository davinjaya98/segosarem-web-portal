app.component('aboutUsSnippet', {
    // This is the HTML
    template:
        `<div class="c-about-us" ng-init="initAboutUsSnippetController()">
            <div class="custom-container">
            <div class="row">
                <div class="c-about-us-target-wrapper col-xs-12 col-sm-6">
                <h3>Kenali Tentang Kami</h3>
                <p>
                    PT. SEGO SAREM CAK BOYO adalah Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s,
                    when an unknown
                </p>
                <a href="#" class="d-flex align-items-center c-about-us-target">
                    <span>Lihat Selengkapnya</span>
                    <img src="/assets/images/arrow-red.svg" alt="Arrow" />
                </a>
                </div>
                <div class="col-xs-12 col-sm-6">
                <div class="c-about-us-logo-wrapper">
                    <img class="logo" src="/assets/images/logo.png" alt="Segosarem Logo" />
                    <div class="logo-text-wrapper">
                    <span class="section-title section-title-1">NASI SAMBEL</span><br />
                    <span class="section-title section-title-2">SIREM CAKBOYO</span>
                    <img class="underline" src="/assets/images/underline-red.svg" alt="underline" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>`,
    // This is for props
    bindings: {

    },
    // This is for the controller
    controller: aboutUsSnippetController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
aboutUsSnippetController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function aboutUsSnippetController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    // This is the state
    $scope.aboutUsSnippet = {};

    $scope.initAboutUsSnippetController = () => {
        console.log("About Us Snippet Loaded");
    }
}