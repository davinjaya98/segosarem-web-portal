app.component('cTestimonies', {
    //This is the HTML
    template:
        `<div class="c-testimonies">
            <div class="custom-container">
                <div class="c-testimonies-image">
                    <div class="c-testimonies-image-wrapper">
                        <!-- ng-repeat image nya disini -->
                        <img ng-repeat="testimony in testimonies['aboutus.testimonies.slider']" ng-src="{{testimony['aboutus.testimonies.slider.imgpath']}}" alt="{{testimony['aboutus.testimonies.slider.nametext']}}">
                    </div>
                </div>
                <div class="c-testimonies-carousel">
                    <!-- ng-repeat lagi datanya disini -->
                    <div class="testimony" ng-repeat="testimony in testimonies['aboutus.testimonies.slider']">
                        <span class="section-title description">{{testimony['aboutus.testimonies.slider.testimonytext']}}</span>
                        <span class="section-title name">{{testimony['aboutus.testimonies.slider.nametext']}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div ng-init="initTestimoniesController()"></div>`,
    //This is for props
    bindings: {

    },
    //This is for the controller
    controller: testimoniesController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
testimoniesController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function testimoniesController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    //This is the State
    $scope.testimonies = {};

    $scope.initTestimoniesController = () => {
        let request = {
            "pageKey": "aboutus"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            console.log("Testimonies loaded with ", res);
            if (res.returnCode == "000000") {
                $scope.testimonies = res.responseObject.aboutus;
                $timeout(() => {
                    initializeSlick();
                });
            }
        });
    }

    function initializeSlick() {
        $('.c-testimonies-image-wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.c-testimonies-carousel'
        });
        $('.c-testimonies-carousel').slick({
            arrows: false,
            dots: true,
            asNavFor: '.c-testimonies-image-wrapper'
        });
    }
}