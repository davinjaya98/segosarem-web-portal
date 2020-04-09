//Include it on your ng module as 'ServiceManager'
var serviceManager = angular.module("ServiceManager", []);
serviceManager.constant("AppConstant", {
    //Samples
    String: "Ten",
    Number: 10,
    Array: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ],
    Objects: {
        Primitive: "Ten",
        Primitive: 10
    }
});
//Requires the bootstrap-notify.min.js & jquery
serviceManager.service("NotificationService", function () {
    this.notification = (type, title, message) => {
        $.notify(
            {
                title: title,
                message: message,
                target: "_blank"
            },
            {
                element: "body",
                position: null,
                type: type,
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: "top",
                    align: "right"
                },
                offset: 20,
                spacing: 10,
                z_index: 1051,
                delay: 5000,
                timer: 5000,
                url_target: "_blank",
                mouse_over: null,
                animate: {
                    enter: "animated fadeInDown",
                    exit: "animated fadeOutUp"
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: "class",
                template:
                    '<div data-notify="container" class="col-11 col-sm-3 alert  alert-{0} " role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    "</div>" +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    "</div>"
            }
        );
    }
});
//Vanilla
serviceManager.service("QueryParamService", function () {
    this.getQueryParamByKey = (key) => {
        let search = window.location.search
        let value
        if (search) {
            let queryParams = search.split("?")
            if (queryParams && queryParams.length > 0) {
                let params = queryParams[1].split("&")

                params.forEach((param) => {
                    let splittedParam = param.split("=")

                    if (splittedParam && splittedParam.length > 0) {
                        if (splittedParam[0] == key)
                            value = splittedParam[1];
                    }

                })
            }
        }
        return value
    }
});
//AngularJs
serviceManager.service("HTTPService", ['$rootScope', '$q', '$http', 'AppConstant',
    function ($rootScope, $q, $http, AppConstant) {
        this.setting = {
            //Update this to turn on the authentication token
            authenticate: true,
            development: false
        }
        let FIELD_NAME = ':cq_csrf_token',
            HEADER_NAME = 'CSRF-Token',
            TOKEN_SERVLET = '/libs/granite/csrf/token.json';

        this.handleSuccess = (response) => {
            //TODO
        }

        this.handleError = (error) => {
            //TODO - Handle Failed ajax call
            // alert(AppConstant.ERROR_MSG.GENERAL)
        }

        this.getURLEncoded = (url) => {
            var defer = $q.defer();

            $http.get(url).then((response) => {
                this.handleSuccess(response);

                defer.resolve(response.data);
            }).catch((error) => {
                this.handleError(error);
            });

            return defer.promise;
        }

        this.postFormData = (url, formData) => {
            var defer = $q.defer();

            var headers = {
                'Content-Type': undefined
            }

            $http.post(url, formData, { headers }).then((response) => {
                this.handleSuccess(response);

                defer.resolve(response.data);
            }).catch((error) => {
                this.handleError(error);
            });

            return defer.promise;
        }

        this.postJson = (url, jsonData) => {
            var defer = $q.defer();

            var headers = {}

            $http.post(url, JSON.stringify(jsonData), { headers }).then((response) => {
                this.handleSuccess(response);

                defer.resolve(response.data);
            }).catch((error) => {
                this.handleError(error);
            })

            return defer.promise;
        }
    }
]);
serviceManager.service("LoadingService", function () {

    this.loadingTemplate =
        `<div id="loading" class="loading justify-content-center align-items-center" style="display: none">
                <img src="${loadingImage}" width="48" height="48">
            </div>`

    this.addLoading = (elem) => {
        if (!elem) {
            $("body").append(this.loadingTemplate)
            $("#loading").fadeIn(300)
        }
        else {
            $(elem).append(this.loadingTemplate)
            $(`${elem} #loading`).fadeIn(300)
        }
    }

    this.removeLoading = (elem) => {
        if (!elem) {
            $(`#loading`).fadeOut(300)
        }
        else {
            $(`${elem} #loading`).fadeOut(300)
        }
    }
});
//For Tooltips
serviceManager.directive("toolTip", function () {
    return {
        restrict: "A",
        scope: {},
        link: (scope, element, attr) => {
            $(element).tooltip()
        }
    }
});
//animation - css class for the animation
//iteration delay - ms 1000
serviceManager.directive("animateCss", function () {
    return {
        restrict: "A",
        scope: {
            animation: "@",
            iterationDelay: "@"
        },
        link: (scope, element, attr) => {
            var iterationDelay = 0;

            if(scope.iterationDelay) {
                try {
                    iterationDelay = Number.parseInt(scope.iterationDelay);
                    setInterval(() => {
                        triggerAnimation();
                    }, iterationDelay);
                }
                catch(e) {}
            }
            else {
                triggerAnimation();
            }

            function triggerAnimation() {
                $(element).toggleClass("animated");
                $(element).toggleClass(scope.animation);
            }
        }
    }
});
serviceManager.directive("input", ["$timeout", function ($timeout) {
    return {
        restrict: "E",
        scope: {
            indonesiaNumber: "=",
            ngModel: "="
        },
        link: (scope, element, attr) => {
            if(scope.indonesiaNumber) {
                scope.$watch("ngModel", function(newValue, oldValue) {
                    if(newValue) {
                        // Check leading zero first
                        newValue = newValue.replace(/^0*/g, '');
                        if(!(/^[1-9][0-9]*$/.test(newValue))) {
                            newValue = oldValue;
                        }
                        $timeout(function() {
                            scope.ngModel = newValue;
                        });
                    }
                })
            }
        }
    }
}]);
//Bound to Project
serviceManager.filter('customOrderByKey', function() {
    return function(obj, k) {
        if(obj) {
            obj.sort((a, b) => {
                if (a[k] > b[k]) return 1;
                if (b[k] > a[k]) return -1;
              
                return 0;
            });
        }

        return obj;
    }
});