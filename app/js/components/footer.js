app.component('cFooter', {
    // This is the HTML
    template:
        `<footer>
            <div class="main-footer">
                <div class="custom-container">
                    <div class="row">
                        <div class="footer-target-wrapper col-xs-12 col-sm-4 col-lg-5 col-xl-6">
                            <h2>Berminat untuk <br>kerja sama?</h2>
                            <span class="footer-target">Masukan data diri anda <a
                                    onclick="feLib.trigger_contact_us_modal()">di sini</a></span>
                        </div>
                        <div class="col-xs-12 col-sm-8 col-lg-7 col-xl-6">
                            <div class="d-flex align-items-center instagram-details">
                                <img class="logo" src="/assets/images/logo.png" alt="Segosarem Logo">
                                <div class="instagram-details-wrapper">
                                    <div class="d-flex align-items-center">
                                        <img class="instagram-logo" src="/assets/images/instagram-logo.png"
                                            alt="Instagram Logo">
                                        <span class="username">@segosaremcakboyo</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between instagram-follow">
                                        <span>Follow our instagram</span>
                                        <a href="#">Follow</a>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex instagram-post">
                                <div class="post">
                                    <img src="/assets/images/instagram-post-1.png">
                                </div>
                                <div class="post">
                                    <img src="/assets/images/instagram-post-2.png">
                                </div>
                                <div class="post">
                                    <img src="/assets/images/instagram-post-3.png">
                                </div>
                                <div class="d-none d-lg-block post">
                                    <img src="/assets/images/instagram-post-4.png">
                                </div>
                                <div class="d-none d-lg-block post">
                                    <img src="/assets/images/instagram-post-5.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sub-footer">
                <div class="custom-container">
                    <div class="company-sign">
                        PT. SEGO SAREM CAK BOYO © All Copy Rights Reserved, 2020
                    </div>
                </div>
            </div>
        </footer>`,
    // This is for props
    bindings: {

    },
    // This is for the controller
    controller: footerController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
footerController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function footerController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    // This is the state
    $scope.footer = {};

    $scope.initFooterController = () => {
        console.log("footer component is opened");
    }
}