app.directive('flashcard', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/flashcard/flashcard.html',
    controller: function($scope, $element, ScoreFactory){
      $scope.score = ScoreFactory

    },
    link: function(scope, el, attr) {
      scope.answerQuestion = function (answer, flashCard) {
    		if (!flashCard.answered) {
    			flashCard.answered = true;
    			flashCard.answeredCorrectly = answer.correct;
    			if(answer.correct)
    			   scope.score.correct++;
    			else
    			   scope.score.incorrect++;
    		}
    	}

    },
    scope:{
      card: '='
    }
  }
})
