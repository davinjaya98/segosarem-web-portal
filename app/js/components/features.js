app.component('cFeatures', {
    //This is the HTML
    template:
        `<div class="c-features" ng-init="initFeaturesController()">
            <div class="custom-container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="c-features-title-wrapper">
                            <span class="section-title section-title-1">KUALITAS TERBAIK</span><br>
                            <span class="section-title section-title-2">UNTUK PELANGGAN</span>
                            <img class="underline" src="/assets/images/underline-red.svg" alt="underline" />
                        </div>
                    </div>
                </div>
                <div class="row c-features-list-wrapper">
                    <div class="col-xs-12 col-sm-4">
                        <div class="features">
                            <img src="/assets/images/star-review-icon.png" alt="Features One">
                            <h3>4,5 dari 5 Bintang</h3>
                            <span>Review kami di GoFood<br>& GrabFood</span>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="features">
                            <img src="/assets/images/like-quality-icon.png" alt="Features One">
                            <h3>Kualitas Terjaga</h3>
                            <span>Kebersihan dan qualitas bahan<br>adalah prioritas kami</span>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="features">
                            <img src="/assets/images/best-service-icon.png" alt="Features One">
                            <h3>Pelayanan Terbaik</h3>
                            <span>Selalu menyambut anda<br>dengan senyum</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
    //This is for props
    bindings: {

    },
    //This is for the controller
    controller: featuresController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
featuresController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function featuresController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    //This is the State
    $scope.contactUs = {};

    $scope.initFeaturesController = () => {
        console.log("Features component is loaded");
    }
}