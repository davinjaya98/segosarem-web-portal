//All code for fontend only
var feLib = "";

(function () {
    function trigger_contact_us_modal() {
        $(".contact-us-popup").modal({
            fadeDuration: 100
        });
    }

    feLib = {
        trigger_contact_us_modal: trigger_contact_us_modal
    }
})();