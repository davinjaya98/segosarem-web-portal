app.component('menuList', {
    // This is the HTML
    template:
        `<div class="c-menu-list" ng-init="initMenuListController()">
            <div class="custom-container position-relative">
                <!-- chilli masala -->
                <img class="overlay-chilli" src="/assets/images/chilly-masala.png" alt="">
                <!-- chilli masala -->

                <!-- menu list title -->
                <div class="menu-list-title">
                    <!-- title string -->
                    <h1>SEMUA MENU MAKANAN</h1>
                    <!-- title string -->

                    <!-- underline -->
                    <img class="underline" src="/assets/images/underline-red.svg" alt="underline" />
                    <!-- underline -->
                </div>
                <!-- menu list title -->

                <!-- gallery row-->
                <div class="row">

                    <!-- card col -->
                    <div class="c-menu-card col-xs-12 col-sm-4" ng-repeat="menu in menuList['gallery.menulist.menu'] | customOrderByKey: 'gallery.menulist.menu.sequence' track by $index">
                        <!-- menu image -->
                        <div class="menu-image">
                            <img ng-src="{{menu['gallery.menulist.menu.image']}}" alt="{{menu['gallery.menulist.menu.title']}}" />
                        </div>
                        <!-- menu image -->

                        <!-- menu title -->
                        <div class="menu-title position-relative">
                            <!-- hot item badge -->
                            <div class="overlay-trending-logo" ng-if="menu['gallery.menulist.menu.trending'] == 'true'">
                                <div class="position-relative">
                                    <img class="" src="/assets/images/fire.png" alt="" />
                                    <span class="overlay-trending-order">{{$index + 1}}</span>
                                </div>
                            </div>
                            <!-- hot item badge -->

                            <h3>{{menu['gallery.menulist.menu.title']}}</h3>
                        </div>
                        <!-- menu title -->

                        <!-- menu desc -->
                        <p>{{menu['gallery.menulist.menu.description']}}</p>
                        <!-- menu desc -->
                    </div>
                    <!-- card col -->

                </div>
                <!-- gallery row -->
            </div>
        </div>`,

    // This is for props
    bindings: {

    },
    // This is for the controller
    controller: menuListController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
menuListController.$inject = ['$scope', 'HTTPService'];
function menuListController($scope, HTTPService) {
    //This is the state
    $scope.menuList = {};

    $scope.initMenuListController = () => {
        let request = {
            "pageKey": "gallery"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            if(res.returnCode == "000000") {
                $scope.menuList = res.responseObject.gallery;
            }
        });
    }
}