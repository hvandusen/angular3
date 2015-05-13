app.controller('StatsController', function ($scope, ScoreFactory) {
    $scope.scores = ScoreFactory;
    console.dir($scope.scores)
});
