app.component('cFeatures', {
    //This is the HTML
    template:
        `<div class="c-features" ng-init="initFeaturesController()">
            <div class="custom-container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="c-features-title-wrapper">
                            <span class="section-title section-title-1">{{features['aboutus.features.title1'][0]['aboutus.features.title1.text']}}</span><br>
                            <span class="section-title section-title-2">{{features['aboutus.features.title2'][0]['aboutus.features.title2.text']}}</span>
                            <img class="underline" src="/assets/images/underline-red.svg" alt="underline" />
                        </div>
                    </div>
                </div>
                <div class="row c-features-list-wrapper">
                    <div class="col-xs-12 col-sm-4" ng-repeat="feature in features['aboutus.features.card']">
                        <div class="features">
                            <img ng-src="{{feature['aboutus.features.card.imgpath']}}" alt="{{feature['aboutus.features.card.title']}}">
                            <h3>{{feature['aboutus.features.card.title']}}</h3>
                            <span ng-bind-html="feature['aboutus.features.card.desc']"></span>
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
    $scope.features = {};

    $scope.initFeaturesController = () => {
        let request = {
            "pageKey": "aboutus"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            if (res.returnCode == "000000") {
                $scope.features = res.responseObject.aboutus;
            }
        });
    }
}