app.component('outletList', {
    //This is the HTML
    template:
        `<div class="c-outlet-list" ng-init="initOutletListController()">
            <div class="custom-container">
                <!-- outlet row -->
                <div class="row">
                    <!-- single outlet -->
                    <div class="col-xs-12 col-sm-6">
                        <div class="c-outlet-single">
                            <img class="outlet-image" src="/assets/images/cabang-01.png" />
                            <div class="position-relative">
                                <!-- new outlet badge -->
                                <img class="overlay-trending-logo" src="/assets/images/fire-new.png" alt="" />
                                <!-- new outlet badge -->

                                <h3>SEGOSAREM CAKBOYO cabang Ciledug</h3>
                            </div>

                            <p> RT.003/RW.013, Karang Tengah, Kec. Karang Tengah, Kota Tangerang, Banten 15157</p>
                            <a href="#" class="d-flex align-items-center outlet-target">
                                <span>Lihat di map</span>
                                <img src="/assets/images/arrow-red.svg" alt="Arrow" />
                            </a>
                        </div>
                    </div>
                    <!-- single outlet -->

                    <!-- single outlet -->
                    <div class="col-xs-12 col-sm-6">
                        <div class="c-outlet-single">
                            <img class="outlet-image" src="/assets/images/cabang-02.png" />
                            <div class="position-relative">
                                <!-- new outlet badge -->
                                <img class="overlay-trending-logo" src="/assets/images/fire-new.png" alt=""
                                    hidden />
                                <!-- new outlet badge -->

                                <h3>SEGOSAREM CAKBOYO cabang Ciledug</h3>
                            </div>

                            <p> RT.003/RW.013, Karang Tengah, Kec. Karang Tengah, Kota Tangerang, Banten 15157</p>
                            <a href="#" class="d-flex align-items-center outlet-target">
                                <span>Lihat di map</span>
                                <img src="/assets/images/arrow-red.svg" alt="Arrow" />
                            </a>
                        </div>
                    </div>
                    <!-- single outlet -->

                    <!-- single outlet -->
                    <div class="shadow-hover col-xs-12 col-sm-6">
                        <div class="c-outlet-single">
                            <img class="outlet-image" src="/assets/images/cabang-03.png" />
                            <div class="position-relative">
                                <!-- new outlet badge -->
                                <img class="overlay-trending-logo" src="/assets/images/fire-new.png" alt=""
                                    hidden />
                                <!-- new outlet badge -->

                                <h3>SEGOSAREM CAKBOYO cabang Ciledug</h3>
                            </div>

                            <p> RT.003/RW.013, Karang Tengah, Kec. Karang Tengah, Kota Tangerang, Banten 15157</p>
                            <a href="#" class="d-flex align-items-center outlet-target">
                                <span>Lihat di map</span>
                                <img src="/assets/images/arrow-red.svg" alt="Arrow" />
                            </a>
                        </div>
                    </div>
                    <!-- single outlet -->

                    <!-- single outlet -->
                    <div class="col-xs-12 col-sm-6">
                        <div class="c-outlet-single">
                            <img class="outlet-image" src="/assets/images/cabang-01.png" />
                            <div class="position-relative">
                                <!-- new outlet badge -->
                                <img class="overlay-trending-logo" src="/assets/images/fire-new.png" alt=""
                                    hidden />
                                <!-- new outlet badge -->

                                <h3>SEGOSAREM CAKBOYO cabang Ciledug</h3>
                            </div>

                            <p> RT.003/RW.013, Karang Tengah, Kec. Karang Tengah, Kota Tangerang, Banten 15157</p>
                            <a href="#" class="d-flex align-items-center outlet-target">
                                <span>Lihat di map</span>
                                <img src="/assets/images/arrow-red.svg" alt="Arrow" />
                            </a>
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
    $scope.contactUs = {};

    $scope.initOutletListController = () => {
        console.log("Outlet List is loaded");
    }
}