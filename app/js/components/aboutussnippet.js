app.component('aboutUsSnippet', {
    // This is the HTML
    template:
        `<div class="c-about-us" ng-init="initAboutUsSnippetController()">
            <div class="custom-container">
            <div class="row">
                <div class="c-about-us-target-wrapper col-xs-12 col-sm-6">
                <h3>{{aboutUsSnippet['common.aboutus.title'][0]['common.aboutus.title.text']}}</h3>
                <p>{{aboutUsSnippet['common.aboutus.description'][0]['common.aboutus.description.text']}}</p>
                <a href="/about-us/about-us.html" class="d-flex align-items-center c-about-us-target">
                    <span>Lihat Selengkapnya</span>
                    <img src="/assets/images/arrow-red.svg" alt="Arrow" />
                </a>
                </div>
                <div class="col-xs-12 col-sm-6">
                <div class="c-about-us-logo-wrapper">
                    <img class="logo" ng-src="{{aboutUsSnippet['common.website.logo'][0]['common.website.logo.path']}}" alt="{{aboutUsSnippet['common.website.name1.text'][0]['common.website.name1.text']}}" />
                    <div class="logo-text-wrapper">
                    <span class="section-title section-title-1">{{aboutUsSnippet['common.aboutus.name1'][0]['common.aboutus.name1.text']}}</span><br />
                    <span class="section-title section-title-2">{{aboutUsSnippet['common.aboutus.name2'][0]['common.aboutus.name2.text']}}</span>
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
        let request = {
            "pageKey": "common"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            if(res.returnCode == "000000") {
                $scope.aboutUsSnippet = res.responseObject.common;
            }
        });
    }
}