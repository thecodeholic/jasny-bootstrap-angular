/**
 * Created by Zura on 4/8/2016.
 */
(function(){
    angular
        .module('jasny-bootstrap-angular')
        .directive('jsFileInput', [function(){
            return {
                restrict: 'E',
                replace: true,
                template: [
                    '<div class="fileinput fileinput-new" data-provides="fileinput">',
                        '<div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px;"></div>',
                        '<div>',
                            '<span class="btn btn-default btn-file">',
                                '<span class="fileinput-new">Select image</span>',
                                '<span class="fileinput-exists">Change</span>',
                                '<input type="file" name="...">',
                            '</span>',
                            '<a href="#" class="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>',
                        '</div>',
                    '</div>'
                ].join(""),
                link: function (scope, elem, attrs, ngModelCtrl) {
                    elem.fileinput();
                    if (!ngModelCtrl) return;

                    scope.onChange = function () {
                        ngModelCtrl.$setViewValue(parseFloat(scope.value));
                    };

                    //ngModelCtrl.$render = function () {
                    //    scope.value = ngModelCtrl.$modelValue;
                    //    elem.rating('update', scope.value);
                    //};


                    //var model = $parse(attrs.fileModel);
                    //
                    //var modelSetter = model.assign;
                    //element.bind('change', function () {
                    //    scope.$apply(function () {
                    //        modelSetter(scope, element[0].files[0]);
                    //    });
                    //});
                    //scope.$watch(attrs.fileModel, function(value){
                    //    if (!value){
                    //        element.val(null);
                    //        //element.trigger('change')
                    //    }
                    //});
                }
            };
        }]);
})();