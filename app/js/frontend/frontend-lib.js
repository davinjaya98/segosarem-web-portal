//All code for fontend only
var feLib = "";

(function () {
    function trigger_contact_us_modal() {
        $(".c-contact-us-modal").modal({
            fadeDuration: 100,
            showClose: false
        });
    }

    feLib = {
        trigger_contact_us_modal: trigger_contact_us_modal
    }
})();