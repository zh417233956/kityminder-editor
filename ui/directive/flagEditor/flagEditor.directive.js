angular.module('kityminderEditor')

.directive('flagEditor', ['valueTransfer', function(valueTransfer) {
    return {
        restrict: 'A',
        templateUrl: 'ui/directive/flagEditor/flagEditor.html',
        scope: {
            minder: '='
        },
        replace: true,
        controller: function($scope) {
            var minder = $scope.minder;
            var isInteracting = false;
            $scope.flagEditorOpen = valueTransfer.flagEditorOpen;

            function updateNote() {
                var enabled = $scope.flagEnabled = minder.queryCommandState('flag') != -1;
                var noteValue = minder.queryCommandValue('flag') || '';

                if (enabled) {
                    $scope.noteContent = noteValue;
                }

                isInteracting = true;
                $scope.$apply();
                isInteracting = false;
            }


            $scope.$watch('flagContent', function(content) {
                var enabled = minder.queryCommandState('flag') != -1;

                if (content && enabled && !isInteracting) {
                    minder.execCommand('flag', content);
                }
            });


            var flagEditorOpen = function() {
                return valueTransfer.flagEditorOpen;
            };

            // 监听面板状态变量的改变
            $scope.$watch(flagEditorOpen, function(newVal, oldVal) {
                // if (newVal) {
                //     setTimeout(function() {
                //         cmEditor.refresh();
                //         cmEditor.focus();
                //     });
                // }
                $scope.flagEditorOpen = valueTransfer.flagEditorOpen;
            }, true);


            $scope.closeFlagEditor = function() {
                valueTransfer.flagEditorOpen = false;
            };



            minder.on('interactchange', updateNote);
        }
    }
}]);