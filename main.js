var app = angular.module('myApp', []);

app.directive('optIn', function() {
	return {
		templateUrl: 'opt-in.html',
		restrict: 'AE',
		transclude: true,
		replace: true
	}
});
