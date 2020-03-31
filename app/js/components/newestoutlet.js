app.component('newestOutlet', {
    // HTML
    template:
        `<div class="c-newest-outlet" style="background-image: url({{mainBanner['common.newestoutlet.image'][0]['common.newestoutlet.image.path']}});" ng-init="initNewestOutletController()">
            <div class="custom-container">
                <div class="row">
                    <div class="c-newest-outlet-title-wrapper col-xs-12 col-sm-6">
                        <div class="title-text-wrapper">
                            <img class="quote-1" src="/assets/images/quote-red-01.svg" alt="Quote Red One">
                            <span class="section-title section-title-1" ng-bind-html="mainBanner['common.newestoutlet.title'][0]['common.newestoutlet.title.text']"></span>
                            <img class="quote-2" src="/assets/images/quote-red-02.svg" alt="Quote Red Two">
                        </div>
                        <a href="/outlet/outlet.html" class="d-flex align-items-center c-newest-outlet-target">
                            <span>Lihat Selengkapnya</span>
                            <img src="/assets/images/arrow-red.svg" alt="Arrow">
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="c-newest-outlet-carousel-wrapper">
                            <div class="c-newest-outlet-carousel">
                                <img ng-src="{{mainBanner['common.newestoutlet.image'][0]['common.newestoutlet.image.path']}}">
                            </div>
                            <span class="outlet-name">{{mainBanner['common.newestoutlet.name'][0]['common.newestoutlet.name.text']}}</span>
                            <p class="outlet-address" ng-bind-html="mainBanner['common.newestoutlet.address'][0]['common.newestoutlet.address.text']"></p>
                            <a ng-href="{{mainBanner['common.newestoutlet.map'][0]['common.newestoutlet.map.link']}}" target="_blank" class="d-flex align-items-center outlet-target">
                                <span>Lihat di map</span>
                                <img src="/assets/images/arrow-red.svg" alt="Arrow">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
    // This is for props
    bindings: {

    },
    // This is for the controller
    controller: newestOutletController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
newestOutletController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function newestOutletController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    //This is the state
    $scope.mainBanner = {};

    $scope.initNewestOutletController = () => {
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