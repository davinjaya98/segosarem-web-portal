app.component('trendingMenu', {
    // This is the HTML
    template:
        `<div class="c-trending-menu" ng-init="initTrendingMenuController()">
            <div class="custom-container position-relative">
                <!-- chilli masala -->
                <img class="overlay-chilli" src="/assets/images/chilly-masala.png" alt="">
                <!-- chilli masala -->

                <!-- menu list title -->
                <div class="menu-list-title">
                    <!-- title string -->
                    <h1>MENU ANDALAN KAMI</h1>
                    <!-- title string -->

                    <!-- underline -->
                    <img class="underline" src="/assets/images/underline-red.svg" alt="underline" />
                    <!-- underline -->
                </div>
                <!-- menu list title -->

                <!-- gallery row-->
                <div class="row">
                    <!-- card col -->
                    <div class="c-menu-card col-xs-12 col-sm-4">
                        <!-- menu image -->
                        <div class="menu-image">
                            <img src="/assets/images/img-01@2x.png" alt="" />
                        </div>
                        <!-- menu image -->

                        <!-- menu title -->
                        <div class="menu-title position-relative">
                            <!-- hot item badge -->
                            <img class="overlay-trending-logo" src="/assets/images/fire-01.png" alt="" />
                            <!-- hot item badge -->

                            <h3>Title Makanan</h3>
                        </div>
                        <!-- menu title -->

                        <!-- menu desc -->
                        <p>
                            Deskripsi Makanan seperti Ayam, bakwan jagung, daun singkong,
                            sambel mantul
                        </p>
                        <!-- menu desc -->
                    </div>
                    <!-- card col -->

                    <!-- card col -->
                    <div class="c-menu-card col-xs-12 col-sm-4">
                        <!-- menu image -->
                        <div class="menu-image">
                            <img src="/assets/images/img-01@2x.png" alt="" />
                        </div>
                        <!-- menu image -->

                        <!-- menu title -->
                        <div class="menu-title position-relative">
                            <!-- hot item badge -->
                            <img class="overlay-trending-logo" src="/assets/images/fire-02.png" alt="" />
                            <!-- hot item badge -->

                            <h3>Title Makanan</h3>
                        </div>
                        <!-- menu title -->

                        <!-- menu desc -->
                        <p>
                            Deskripsi Makanan seperti Ayam, bakwan jagung, daun singkong,
                            sambel mantul
                        </p>
                        <!-- menu desc -->
                    </div>
                    <!-- card col -->

                    <!-- card col -->
                    <div class="c-menu-card col-xs-12 col-sm-4">
                        <!-- menu image -->
                        <div class="menu-image">
                            <img src="/assets/images/img-01@2x.png" alt="" />
                        </div>
                        <!-- menu image -->

                        <!-- menu title -->
                        <div class="menu-title position-relative">
                            <!-- hot item badge -->
                            <img class="overlay-trending-logo" src="/assets/images/fire-03.png" alt="" />
                            <!-- hot item badge -->

                            <h3>Title Makanan</h3>
                        </div>
                        <!-- menu title -->

                        <!-- menu desc -->
                        <p>
                            Deskripsi Makanan seperti Ayam, bakwan jagung, daun singkong,
                            sambel mantul
                        </p>
                        <!-- menu desc -->
                    </div>
                    <!-- card col -->
                </div>
                <!-- gallery row -->

                <div class="trending-menu-link position-relative">
                    <a href="#" class="d-flex align-items-center trending-menu-target">
                        <span>Lihat Selengkapnya</span>
                        <img src="/assets/images/arrow-red.svg" alt="Arrow">
                    </a>
                </div>
            </div>
        </div>`,
    // This is for props
    bindings: {

    },
    // This is for the controller
    controller: trendingMenuController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
trendingMenuController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function trendingMenuController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    //This is the State
    $scope.contactUs = {};

    $scope.initTrendingMenuController = () => {
        console.log("Trending menu is loaded");
    }
}