(function() {
    /**
     * @name fileUpload
     * @desc <file-upload> Directive
     */

    function fileUpload() {
        /**
         * @name fileUploadCtrl
         * @desc File Upload Controller
         * @type {Function}
         */
        function fileUploadCtrl() {
            /**
             * @name files
             * @desc Contains all files passed in by the user
             * @type {Array}
             */
            var files = [];

            /**
             * @name uploadFiles
             * @desc Uploads our files
             * @type {Array}
             */
            function uploadFiles(files) {
                // hand off our files to a Service
                UploadService
                    .uploadFiles(files)
                    .then(function (response) {
                        // success, we could get our file Object back
                        // and render it in the View for the user
                        // maybe some ng-repeat with a list of files inside
                    }, function (reason) {
                        // error stuff if not handled globally
                    })
            };

            // exports
            this.files = files;
            this.uploadFiles = uploadFiles;
        }

        /**
         * @name link
         * @desc File Upload Link
         * @type {Function}
         */
        function link($scope, $element, $attrs) {
            /**
             * @name drop
             * @desc Drop zone element
             * @type {Element}
             */
            var drop = $element.find('.drop-zone')[0];
            console.log($element.find('.drop-zone'));

            /**
             * @name onDrop
             * @desc Callback on "drop" event
             * @type {Function}
             * @param {Event} e Event passed in to grab files from
             */
            function onDrop(e) {
                // do something on "drop"
            }

            drop.addEventListener('drop', onDrop, false);

            drop.addEventListener('dragenter', function(e) {
                // do something on "dragenter"
            }, false);
            drop.addEventListener("dragleave", function(e) {
                // do something on "dragleave"
            }, false);
            drop.addEventListener("dragover", function(e) {
                // do something on "dragover"
            }, false);

        }

        return {
            restrict: 'E',
            scope: {},
            replace: true,

            template: [
                '<div>',
                '<input type="file" ng-model="vm.files">',
                '<button type="button" >Upload</button>',
                '<div class="drop-zone">Drop your files here!</div>',
                '</div>'
            ].join(''),
            controllerAs: 'vm',
            controller: fileUploadCtrl,
            link:  link
        }
    }
    angular.module('cablink').directive('fileUpload', fileUpload);
}());
