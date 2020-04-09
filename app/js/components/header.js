app.component('cHeader', {
    //This is the HTML
    template:
        `<header>
            <div class="custom-container h-100 d-flex align-items-center justify-content-end positive-relative">
                <!-- Desktop -->
                <div class="d-none d-lg-flex desktop-menu">
                    <a ng-class="{'active': isActiveUrl(page.url)}" ng-repeat="page in header.pages" ng-href="{{page.url}}">{{page.label}}</a>
                    <a onclick="feLib.trigger_contact_us_modal()">Hubungi Kami</a>
                </div>
                <!-- Desktop -->
                <!-- Mobile -->
                <div class="d-block d-lg-none">
                    <div class="menu-icon" ng-click="toggleHeader(true)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path fill="#FFF" fill-rule="evenodd"
                                d="M29.333 24c0 .736-.597 1.333-1.333 1.333H8c-.736 0-1.333-.597-1.333-1.333S7.264 22.667 8 22.667h20c.736 0 1.333.597 1.333 1.333zm0-8c0 .736-.597 1.333-1.333 1.333H14.667c-.737 0-1.334-.597-1.334-1.333s.597-1.333 1.334-1.333H28c.736 0 1.333.597 1.333 1.333zm0-8c0 .736-.597 1.333-1.333 1.333H4c-.736 0-1.333-.597-1.333-1.333S3.264 6.667 4 6.667h24c.736 0 1.333.597 1.333 1.333z" />
                        </svg>
                    </div>
                </div>
                <!-- Mobile -->
            </div>
        </header>
        <!-- Mobile -->
        <div class="mobile-menu-overlay d-block d-lg-none" ng-class="{'show': open}">
            <div class="mobile-menu-overlay-links-wrapper">
                <div class="close-wrapper">
                    <a class="close" ng-click="toggleHeader(false)"><img src="/assets/images/close-white.svg" alt="Close Modal Image"></a>
                </div>
                <a ng-class="{'active': isActiveUrl(page.url)}" ng-repeat="page in header.pages" ng-href="{{page.url}}">{{page.label}}</a>
                <a onclick="feLib.trigger_contact_us_modal()">Hubungi Kami</a>
            </div>
        </div>
        <!-- Mobile -->
        <div ng-init="initHeaderController()"></div>`,
    //This is for props
    bindings: {

    },
    //This is for the controller
    controller: headerController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
headerController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function headerController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    //This is the State
    $scope.header = {
        pages: [{
            url: "/",
            label: "Home"
        },{
            url: "/gallery/gallery.html",
            label: "Galeri Makanan"
        },{
            url: "/outlet/outlet.html",
            label: "Gerai Kami"
        },{
            url: "/about-us/about-us.html",
            label: "Tentang Kami"
        }]
    };

    //To initialize various logic for the header
    $scope.initHeaderController = () => {
        console.log("Header is loaded");
        //Event listener to close mmobile header on click outside
        $(document).click(function (event) {
            //if you click on anything except the modal itself or the "open modal" link, close the modal
            if (!$(event.target).closest("c-header").length) {
                $timeout(() => {
                    $scope.toggleHeader(false)
                });
            }
        });

        //Watcher to disable or able body scroll
        $scope.$watch('open', function (newValue, oldValue, scope) {
            if (oldValue !== newValue) {
                console.log(newValue);
                //If open is true
                if (newValue) {
                    $("body").css("overflow", "hidden");
                }
                else {
                    $("body").css("overflow", "auto");
                }
            }
        });
        //Event listener to reset open scope when the screen size changes
        $(window).on("resize", () => {
            var screenSize = window.innerWidth;
            console.log(screenSize);
            if (screenSize > 991) {
                $timeout(() => {
                    $scope.open = false;
                });
            }
        });
    }
    //To check whether the link is under the current page
    $scope.isActiveUrl = (url) => {
        let currentUrl = window.location.href;
        return currentUrl.indexOf(url) > -1;
    }
    //To open the header
    $scope.toggleHeader = (open) => {
        $scope.open = open;
    }
}