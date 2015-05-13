app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.ready = false;
	FlashCardsFactory.getFlashCards().then(function(yah){
		$scope.flashCards = yah
		$scope.ready = true;
	});

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if(answer.correct)
				ScoreFactory.correct++;
			else
				ScoreFactory.incorrect++;
		}
	}
	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node',
		'All'
	];

	$scope.cat = 'All'

	$scope.getCategoryCards = function(category){
		$scope.cat = category
		$scope.flashCards = FlashCardsFactory.getFlashCards(category).then(function(yah){
			$scope.flashCards = yah
		});
	};
});

app.filter('cheat',function(){
	return function(collection){
		return collection.filter(function(element){
			return element.correct
		});
	}
})
