app.component('cFooter', {
    // This is the HTML
    template:
        `<footer ng-init="initFooterController()">
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
                                <img class="logo" src="{{footer['common.website.logo'][0]['common.website.logo.path']}}" alt="Segosarem Logo">
                                <div class="instagram-details-wrapper">
                                    <div class="d-flex align-items-center">
                                        <img class="instagram-logo" src="/assets/images/instagram-logo.png"
                                            alt="Instagram Logo">
                                        <span class="username">@{{footer.username}}</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between instagram-follow">
                                        <span>Follow our instagram</span>
                                        <a ng-href="https://www.instagram.com/{{footer.username}}" target="_blank">Follow</a>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex instagram-post">
                                <div class="post-wrapper" ng-class="{'d-none d-lg-block' : ($index + 1) > 3}" ng-repeat="igMedia in footer.media | limitTo:5 track by $index">
                                    <div class="post">
                                        <img ng-src="{{igMedia.media_url}}">
                                    </div>
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
    $scope.footer = {
        media: []
    };

    $scope.initFooterController = () => {
        //Get Instagram Token
        HTTPService.getURLEncoded("https://ig.instant-tokens.com/users/f3ef5a53-e977-4318-a70c-b4212f405fcb/instagram/17841401699539304/token?userSecret=29ob1zpedyx22pamix6iny").then((res) => {
            let apiToken = res.Token;
            //Get instagram User Details
            let userFields = "id,username";
            HTTPService.getURLEncoded(`https://graph.instagram.com/me?fields=${userFields}&access_token=${apiToken}`).then((userRes) => {
                $scope.footer = {...$scope.footer, ...userRes};
            });
            //Get instagram User Media
            let mediaFields = "media_url,caption";
            HTTPService.getURLEncoded(`https://graph.instagram.com/me/media?fields=${mediaFields}&access_token=${apiToken}`).then((mediaRes) => {
                $scope.footer.media = mediaRes.data;
            });
        });
        
        let request = {
            "pageKey": "common"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            if(res.returnCode == "000000") {
                $scope.footer = {...$scope.footer, ...res.responseObject.common};
            }
        });
    }
}