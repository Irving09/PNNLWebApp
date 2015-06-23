
(function() {
	'use strict';

	angular
		.module('myApp', [])
		.controller('myController', MyController);

	function MyController() {
		var ctrl 		= this;
		var fizzbuzz 	= 'fizzbuzz';
		var fizz 		= 'fizz';
		var buzz 		= 'buzz';

		ctrl.divisibleBy = function(divisor) {
			return function(num) {
				return (num % divisor) === 0;
			};
		};

		ctrl.divisibleBy3 = ctrl.divisibleBy(3);
		ctrl.divisibleBy5 = ctrl.divisibleBy(5);

		ctrl.executeChallenge = function(start, end) {
			if (start == null || end == null) return;
			ctrl.printOutput = [];
			var isDivisibleBy3, isDivisibleBy5;

			for (var i = start; i <= end; i++) {
				isDivisibleBy3 = ctrl.divisibleBy3(i);
				isDivisibleBy5 = ctrl.divisibleBy5(i);

				if (isDivisibleBy3 && isDivisibleBy5) {
					ctrl.printOutput.push(fizzbuzz);
				} else if (isDivisibleBy3) {
					ctrl.printOutput.push(fizz);
				} else if (isDivisibleBy5) {
					ctrl.printOutput.push(buzz);
				} else {
					ctrl.printOutput.push(i);
				}
			}
		};
	}
})();