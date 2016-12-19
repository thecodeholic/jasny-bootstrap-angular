/**
 * Created by Zura on 4/8/2016.
 */
(function () {
  angular
    .module('jasny-bootstrap-angular')
    .directive('jsFileInput', ['$parse', function ($parse) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          'file': '=ngModel',
          'instance': '=',
          'inputAttrs': '=',
          'previewAttrs': '=',
          'fileInputChange': '&',
          'fileInputClear': '&',
          'fileInputReset': '&'
        },
        template: [
          '<div class="fileinput fileinput-new" data-provides="fileinput">',
          '<div class="fileinput-preview thumbnail" data-trigger="fileinput"></div>',
          '<div>',
          '<span class="btn btn-default btn-file">',
          '<span class="fileinput-new">Select image</span>',
          '<span class="fileinput-exists">Change</span>',
          '<input type="file">',
          '</span>',
          '<a href="#" class="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>',
          '</div>',
          '</div>'
        ].join(""),
        link: function (scope, $element, attrs, ngModelCtrl) {
          var inputAttrs = JSON.parse(attrs.inputAttrs),
            previewAttrs = JSON.parse(attrs.previewAttrs),
            $preview = $element.find('.fileinput-preview'),
            $input = $element.find('input[type=file]'),
            model = $parse(attrs.ngModel),
            modelSetter = model.assign
            ;
          for (var i in inputAttrs) {
            $input.attr(i, inputAttrs[i]);
          }
          for (var i in previewAttrs) {
            $preview.attr(i, previewAttrs[i]);
          }

          $input.bind('change', function () {
            var me = this;
            scope.$apply(function () {
              if (me.files.length > 0) {
                modelSetter(scope, me.files[0]);
              } else {
                modelSetter(scope, null);
              }
            });
          });

          scope.$watch('file', function (value) {
            if (!value && $input.val()) {
              $element.fileinput('clear');
              $element.trigger('clear.bs.fileinput')
            }
          });

          $element
            .on('change.bs.fileinput', scope.fileInputChange)
            .on('clear.bs.fileinput', scope.fileInputClear)
            .on('reset.bs.fileinput', scope.fileInputReset)
            .fileinput()
          ;
        }
      };
    }]);
})();