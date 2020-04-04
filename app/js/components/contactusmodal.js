app.component('contactUsModal', {
    //This is the HTML
    template:
        `<div class="c-contact-us-modal modal" ng-init="initContactUsModalController()">
            <!--Fill submit flow-->
            <div class="form-start" ng-if="!submitted">
                <div class="modal-title">
                    <div class="modal-title-wrapper">
                        <span class="title" ng-bind-html="contactUsModal['common.contactusmodal.formtitle'][0]['common.contactusmodal.formtitle.text']"></span>
                    </div>
                    <a class="close" rel="modal:close"><img src="/assets/images/close-white.svg" alt="Close Modal Image"></a>
                </div>
                <div class="modal-content">
                    <form name="contact-us-form" ng-submit="submitContactUs()" autocomplete="off">
                        <div class="form-group">
                            <div class="input-group">
                                <img class="prepend-position-1" src="/assets/images/mail.svg">
                                <input name="email" type="email" placeholder="example@gmail.com" ng-model="contactUs.email" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <img class="prepend-position-1" src="/assets/images/phone.svg">
                                <span class="prepend-position-2">+62</span>
                                <input name="phoneNumber" type="text" placeholder="81234567890" ng-model="contactUs.phoneNumber" numeric required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <img class="prepend-position-1" src="/assets/images/user.svg">
                                <input name="name" type="text" placeholder="Nama Lengkap" ng-model="contactUs.name" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div></div>
                            <button type="submit">Kirim <img src="/assets/images/arrow-forward-yellow.svg"></button>
                        </div>
                    </form>
                </div>
            </div>
            <!--Finished submit flow-->
            <div class="form-finish" ng-if="submitted">
                <div class="modal-title">
                    <div class="modal-title-wrapper">
                        <img src="/assets/images/sent.png" alt="Sent Image">
                        <span class="title">{{contactUsModal['common.contactusmodal.successtitle'][0]['common.contactusmodal.successtitle.text']}}</span>
                    </div>
                    <a class="close" rel="modal:close"><img src="/assets/images/close-white.svg" alt="Close Modal Image"></a>
                </div>
                <div class="modal-content">
                    <div class="contact-us-text">
                        <p>{{contactUsModal['common.contactusmodal.successmessage'][0]['common.contactusmodal.successmessage.text']}}</p>
                    </div>
                    <div class="modal-footer">
                        <div></div>
                        <a class="close-button" rel="modal:close">Tutup</a>
                    </div>
                </div>
            </div>
        </div>
        <div ng-init="registerCloseModalEvent()"></div>`,
    //This is for props
    bindings: {

    },
    //This is for the controller
    controller: contactUsModalController
})
//Please try to write in ES 9 version if possible
//Declaring main module functions in 'function' is easier to read than lambda expressions
//Try not to use too much nested loop or nested if/else statement, chances are the code logic have issues
//Try to revise the code logic. For else if statement, use switch case statement instead
//Endpoint is at header script
contactUsModalController.$inject = ['$scope', 'HTTPService', 'LoadingService', 'AppConstant', '$timeout'];
function contactUsModalController($scope, HTTPService, LoadingService, AppConstant, $timeout) {
    //This is the State
    $scope.contactUs = {
        email: "",
        phoneNumber: "",
        name: ""
    };

    $scope.contactUsModal = {};

    $scope.initContactUsModalController = () => {
        let request = {
            "pageKey": "common"
        }
        HTTPService.postJson("/segosarem-backend/getAllValueByPageSettingKey", request).then((res) => {
            if (res.returnCode == "000000") {
                $scope.contactUsModal = res.responseObject.common;
            }
        });
    }
    $scope.registerCloseModalEvent = () => {
        //Attach the event to close modal
        $(".c-contact-us-modal").on($.modal.AFTER_CLOSE, function (event, modal) {
            $timeout(() => {
                $scope.submitted = false;
            });
        });
    }
    $scope.submitContactUs = () => {
        let request = {
            "custEmail": $scope.contactUs.email,
            "custName": $scope.contactUs.name,
            "custPhoneNumber": $scope.contactUs.phoneNumber
        }
        HTTPService.postJson("/segosarem-backend/addQuotation", request).then((res) => {
            if (res.returnCode == "000000") {
                $scope.submitted = true;

                resetForm();
            }
        });
    }

    function resetForm() {
        //Reset form
        $timeout(() => {
            $scope.contactUs = {
                email: "",
                phoneNumber: "",
                name: ""
            };
        });
    }
}