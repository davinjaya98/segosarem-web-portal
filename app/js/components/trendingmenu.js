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
                    <h1>{{trendingMenu['homepage.trendingmenu.title'][0]['homepage.trendingmenu.title.text']}}</h1>
                    <!-- title string -->

                    <!-- underline -->
                    <img class="underline" src="/assets/images/underline-red.svg" alt="underline" />
                    <!-- underline -->
                </div>
                <!-- menu list title -->

                <!-- gallery row-->
                <div class="row">
                    <!-- card col -->
                    <div class="c-menu-card col-xs-12 col-sm-4" ng-repeat="menu in trendingMenu['gallery.menulist.menu'] | customOrderByKey: 'gallery.menulist.menu.sequence' | excludeNonTrending track by $index">
                        <!-- menu image -->
                        <div class="menu-image">
                            <img ng-src="{{menu['gallery.menulist.menu.image']}}" alt="{{menu['gallery.menulist.menu.title']}}" />
                        </div>
                        <!-- menu image -->

                        <!-- menu title -->
                        <div class="menu-title position-relative">
                            <!-- hot item badge -->
                            <div class="overlay-trending-logo">
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

                <div class="trending-menu-link position-relative">
                    <a href="/gallery/gallery.html" class="d-flex align-items-center trending-menu-target">
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
}).filter('excludeNonTrending', () => {
    return (obj) => {
        if(obj) {
            obj = obj.filter(x => x['gallery.menulist.menu.trending'] == 'true');
        }
        return obj;
    }
});
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
trendingMenuController.$inject = ['$scope', 'HTTPService'];
function trendingMenuController($scope, HTTPService) {
    //This is the State
    $scope.trendingMenu = {};

    $scope.initTrendingMenuController = () => {
        let request = {
            "pageKey": "homepage,gallery"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            //var res = {"returnCode":"000000","responseObject":{"pageSetting":{"title":"Homepage","description":"Segosarem Cak Boyo adalah brand ayam terenak di Jakarta","seoKeywords":"Sebuah Keywords"},"homepage":{"homepage.trendingmenu.title":[{"homepage.trendingmenu.title.text":"MENU ANDALAN KAMI"}],"homepage.trendingmenu.menu":[{"homepage.trendingmenu.menu.description":"Deskripsi Makanan seperti Ayam, bakwan jagung, daun singkong, sambel mantul","homepage.trendingmenu.menu.sequence":"2","homepage.trendingmenu.menu.image":"https://paparadam-assets.sgp1.digitaloceanspaces.com/images/menu/menu-2-lele-ningrat.png","homepage.trendingmenu.menu.title":"Lele Ningrat"},{"homepage.trendingmenu.menu.image":"https://paparadam-assets.sgp1.digitaloceanspaces.com/images/menu/menu-1-ayam-ningrat.png","homepage.trendingmenu.menu.sequence":"1","homepage.trendingmenu.menu.title":"Ayam Ningrat","homepage.trendingmenu.menu.description":"Deskripsi Makanan seperti Ayam, bakwan jagung, daun singkong, sambel mantul"},{"homepage.trendingmenu.menu.image":"https://paparadam-assets.sgp1.digitaloceanspaces.com/images/menu/menu-3-bakwan-jagung.png","homepage.trendingmenu.menu.sequence":"3","homepage.trendingmenu.menu.description":"Deskripsi Makanan seperti Adonan tepung dengan jagung-jagung manis","homepage.trendingmenu.menu.title":"Bakwan Jagung"}]}}};
            if(res.returnCode == "000000") {
                $scope.trendingMenu = res.responseObject.gallery;
                $scope.trendingMenu['homepage.trendingmenu.title'] = res.responseObject.homepage['homepage.trendingmenu.title'];
            }
        });

    }
}