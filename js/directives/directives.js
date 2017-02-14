'use strict';

angular.module('MyComponents', [])
	.directive('selectAllOnFocus', function() {
		return	{
			restrict: 'A',
			link: function(scope, element) {
				element.mouseup(function(event) {
					event.preventDefault();
				});
				element.focus(function(){
					element.select();
				})
			}
		}
	})
	.directive('defaultButton', function() {
		return {
			restrict: 'E',
			transclude: true,
			template: "<button class='btn btn-primary' ng-click='cta()' ng-transclude>Click</button>"
		}
	})
	.directive('contactCard', function() {
		return {
			restrict: 'E',
			scope: {
				friend: '='
			},
			templateUrl: 'partials/directives/contact-card.html',
			controller: function($scope) {
				console.log($scope.friend);
			}
		}
	})
