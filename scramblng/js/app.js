var app = angular.module('scramblngApp',[]);

app.controller('gameController',['$scope',function($scope){
	// searcd
	$scope.validWords = [
		'sear',
		'ace',
		'are',
		'arc',
		'sea',
		'dear',
		'dears',
		'race',
		'races',
		'aces',
		'scar',
		'dare',
		'dares',
		'car',
		'cars',
		'care',
		'cares',
		'cared',
		'scare',
		'scared',
		'rad',
		'raced',
		'aced',
		'ear',
		'ears',
		'read',
		'reads'
	];
	$scope.wordList = [];
	$scope.numberOfTries = 0;
	$scope.numberCorrect = 0;
	$scope.percentageCorrect = 0;



	$scope.checkWord = function() {
		var validCounter = 0;
		angular.forEach($scope.validWords,function(value){
			
			if(value === $scope.wordEntry) {

				validCounter++;
				$scope.numberCorrect++;
			}

		});

		if(validCounter > 0) {
			$scope.wordList.push({word:this.wordEntry,valid:true});
		} else {

			$scope.wordList.push({word:this.wordEntry,valid:false});
		}
		$scope.wordEntry = '';
		$scope.numberOfTries++;
		$scope.percentageCorrect = $scope.numberCorrect / $scope.numberOfTries;
	}

}]);

