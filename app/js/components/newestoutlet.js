app.component('newestOutlet', {
    // HTML
    template:
        `<div class="c-newest-outlet" style="background-image: url(/assets/images/outlet-1-ciledug.png);" ng-init="initNewestOutletController()">
            <div class="custom-container">
                <div class="row">
                    <div class="c-newest-outlet-title-wrapper col-xs-12 col-sm-6">
                        <div class="title-text-wrapper">
                            <img class="quote-1" src="/assets/images/quote-red-01.svg" alt="Quote Red One">
                            <span class="section-title section-title-1">CABANG GERAI<br>TERBARU KAMI</span>
                            <img class="quote-2" src="/assets/images/quote-red-02.svg" alt="Quote Red Two">
                        </div>
                        <a href="#" class="d-flex align-items-center c-newest-outlet-target">
                            <span>Lihat Selengkapnya</span>
                            <img src="/assets/images/arrow-red.svg" alt="Arrow">
                        </a>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="c-newest-outlet-carousel-wrapper">
                            <div class="c-newest-outlet-carousel">
                                <img src="/assets/images/outlet-1-ciledug.png">
                            </div>
                            <span class="outlet-name">SEGOSAREM CAKBOYO cabang Ciledug</span>
                            <p class="outlet-address"> RT.003/RW.013, Karang Tengah,<br> Kec. Karang Tengah, Kota
                                <br> Tangerang, Banten 15157</p>
                            <a href="#" class="d-flex align-items-center outlet-target">
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
    $scope.newestOutlet = {};

    $scope.initNewestOutletController = () => {
        console.log("Newest outlet component is loaded");
    }
}