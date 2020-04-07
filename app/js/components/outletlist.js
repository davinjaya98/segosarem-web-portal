app.component('outletList', {
    //This is the HTML
    template:
        `<div class="c-outlet-list" ng-init="initOutletListController()">
            <div class="custom-container">
                <!-- outlet row -->
                <div class="row">
                    
                    <!-- single outlet -->
                    <a href="#" class="col-xs-12 col-sm-6 no-underline" ng-repeat="outlet in outletlist['outlet.outletlist.card']">
                        <div class="c-outlet-single">
                            <img class="outlet-image" ng-src="{{outlet['outlet.outletlist.card.imgpath']}}" alt="{{outlet['outlet.outletlist.card.title']}}"/>
                            <div class="position-relative">
                                <!-- new outlet badge -->
                                <div class="overlay-trending-logo" ng-if="outlet['outlet.outletlist.card.newoutlet'] == 'true'">
                                    <div class="position-relative">
                                        <img class="overlay-trending-logo" src="/assets/images/fire-new.png" alt="" />
                                    </div>
                                </div>
                                <!-- new outlet badge -->

                                <h3>{{outlet['outlet.outletlist.card.title']}}</h3>
                            </div>

                            <p>{{outlet['outlet.outletlist.card.desc']}}</p>
                            
                            <div class="d-flex align-items-center outlet-target">
                                <span>Lihat di map</span>
                                <img src="/assets/images/arrow-red.svg" alt="Arrow" />            
                            </div>
                        </div>
                    </div>
                    <!-- single outlet -->

                    
                </div>
                <!-- outlet row -->
            </div>

        </div>`,
    //This is for props
    bindings: {

    },
    //This is for the controller
    controller: outletListController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
outletListController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function outletListController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    //This is the State
    $scope.outletlist = {};

    $scope.initOutletListController = () => {
        let request = {
            "pageKey": "outlet"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            if (res.returnCode == "000000") {
                $scope.outletlist = res.responseObject.outlet;
            }
        });
    }
}