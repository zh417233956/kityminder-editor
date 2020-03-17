angular.module('kityminderEditor')
    .directive('flagBtn', ['valueTransfer', function(valueTransfer) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/flagBtn/flagBtn.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                var minder = $scope.minder;

                $scope.addFlag = function() {
                    valueTransfer.flagEditorOpen = true;
                };
            }
        }
    }]);