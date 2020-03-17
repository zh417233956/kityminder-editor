angular.module('kityminderEditor')
    .directive('relLineBtn', function() {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/relLineBtn/relLineBtn.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                var minder = $scope.minder;

                $scope.editRelLine = function() {
                    var selectId = minder.getSelectedNode().data.id;
                    var selectLineIndex = -1;
                    minder._relLine.forEach(function(item, index) {
                        if (selectLineIndex == -1 && (item.startId == selectId || item.endId == selectId)) {
                            selectLineIndex = index;
                        }
                    });
                    if (selectLineIndex > -1) {
                        minder.circle.create(minder._relLine_obj[selectLineIndex]);
                    }
                };
                $scope.removeRelLine = function() {
                    var selectId = minder.getSelectedNode().data.id;
                    var selectLineIndex = -1;
                    minder._relLine.forEach(function(item, index) {
                        if (selectLineIndex == -1 && (item.startId == selectId || item.endId == selectId)) {
                            selectLineIndex = index;
                        }
                    });
                    if (selectLineIndex > -1) {
                        minder._relLine_obj[selectLineIndex].remove();
                        minder._relLine.pop(minder._relLine[selectLineIndex]);
                        minder._relLine_obj.pop(minder._relLine_obj[selectLineIndex]);
                    }
                };
            }
        }
    });