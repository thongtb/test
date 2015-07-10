var app = angular.module("blog", ['firebase']);

app.controller("addComment",['$scope', '$firebaseArray', function($scope, $firebaseArray){
	var fbRef = new Firebase("https://fiery-fire-5500.firebaseio.com/comments");

	$scope.comments = $firebaseArray(fbRef);
	
	$scope.addComment = function (event) {
		if (event.keyCode===13 || event.type==="click") {
			var addedDate = Date.now();
			console.log(addedDate);
			$scope.comments.$add({comment: $scope.comment, date: addedDate});
			console.log(event.type);
		};

	}
}]);