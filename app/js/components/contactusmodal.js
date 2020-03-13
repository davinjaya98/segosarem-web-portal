app.component('contactUsModal', {
    //This is the HTML
    template: 
        `<div class="c-contact-us-modal modal" ng-init="initContactUsModalController()">
            <!--Fill submit flow-->
            <div class="form-start" ng-if="!submitted">
                <div class="modal-title">
                    <div class="modal-title-wrapper">
                        <span class="title">Berminat untuk <br>kerja sama?</span>
                    </div>
                    <a class="close" rel="modal:close"><img src="/assets/images/close-white.svg" alt="Close Modal Image"></a>
                </div>
                <div class="modal-content">
                    <form name="contact-us-form" ng-submit="submitContactUs()" autocomplete="off">
                        <div class="form-group">
                            <div class="input-group">
                                <img class="prepend-position-1" src="/assets/images/mail.svg">
                                <input name="email" type="email" placeholder="example@gmail.com" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <img class="prepend-position-1" src="/assets/images/phone.svg">
                                <span class="prepend-position-2">+62</span>
                                <input name="phoneNumber" type="text" placeholder="81234567890" numeric required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <img class="prepend-position-1" src="/assets/images/user.svg">
                                <input name="name" type="text" placeholder="Nama Lengkap" required>
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
                        <span class="title">Okeh, Kami akan segera menghubungi anda.</span>
                    </div>
                    <a class="close" rel="modal:close"><img src="/assets/images/close-white.svg" alt="Close Modal Image"></a>
                </div>
                <div class="modal-content">
                    <div class="contact-us-text">
                        <p>Terima kasih atas kepercayaan anda (ɔ◔‿◔)ɔ ♥</p>
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
    $scope.contactUs = {};

    $scope.initContactUsModalController = () => {
        console.log("Modal is loaded");
    }
    $scope.registerCloseModalEvent = () => {
        console.log("Registering close modal event");
        //Attach the event to close modal
        $(".c-contact-us-modal").on($.modal.AFTER_CLOSE, function(event, modal) {
            console.log("Modal is closed");
            $timeout(function() {
                $scope.submitted = false;
            });
        });
    }
    $scope.submitContactUs = () => {
        console.log("Submitted");
        $scope.submitted = true;
    }
}