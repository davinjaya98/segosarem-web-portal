app.component('mainBanner', {
    //This is the HTML
    template:
        `<div class="c-main-banner" ng-class="{'full-page': props.type == '1', 'half-page': props.type == '2'}">
            <div class="custom-container h-100">
                <div class="d-flex position-relative h-100" ng-class="{'align-items-end justify-content-end': props.type == '1', 'align-items-center justify-content-center': props.type == '2'}">
                    <div class="c-main-banner-wrapper">
                        <img class="logo" src="{{mainBanner['common.website.logo'][0]['common.website.logo.path']}}" alt="Segosarem Logo">
                        <div class="d-inline-flex align-items-center banner-text">
                            <div class="banner-text-wrapper position-relative">
                                <img class="dash" src="/assets/images/dash.svg" alt="Thunder" ng-if="props.type == '1'" animate-css animation="flash" iteration-delay="1000">
                                <span class="section-title section-title-1" ng-if="props.upperTitle">{{props.upperTitle}}</span><br>
                                <span class="section-title section-title-2" ng-if="props.lowerTitle">{{props.lowerTitle}}</span>
                                <img class="underline" src="/assets/images/underline-white.svg" alt="underline">
                            </div>
                        </div>
                        <div class="banner-menu-wrapper position-relative" ng-if="props.type == '1'" animate-css animation="bounce" iteration-delay="2000">
                            <img class="quote-1" src="/assets/images/quote-white-01.svg" alt="Quote One" animate-css animation="tada" iteration-delay="2000">
                            <img class="banner-menu" ng-src="{{props.bannerImage}}"
                                alt="Main Banner Menu">
                            <img class="quote-2" src="/assets/images/quote-white-02.svg" alt="Quote Two" animate-css animation="tada" iteration-delay="2000">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ng-init="initMainBannerController()"><div>`,
    //This is for props
    // @ Text binding
    // = Two-way binding
    // & Method binding (although some call it one-way binding)
    // < One-way binding
    bindings: {
        upperTitle:"=",
        lowerTitle:"=",
        bannerImage: "=",
        type: "@"
    },
    //This is for the controller
    controller: mainBannerController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
mainBannerController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function mainBannerController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    //This is the State
    $scope.mainBanner = {};

    //To initialize various logic for the Main Banner
    $scope.initMainBannerController = () => {
        $scope.props = $scope.$ctrl;
        
        let request = {
            "pageKey": "common"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            if(res.returnCode == "000000") {
                $scope.mainBanner = res.responseObject.common;
            }
        });
    }
}