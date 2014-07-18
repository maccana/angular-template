var app = angular.module('app', []);

app.controller('Ctrl1', function Ctrl1($scope, $http) {
	$http.get('js/items.json').success(function(data){
			$scope.todos = data;
			console.log($scope.todos);
			$scope.itemOrder = 'name';
	});

	$scope.addTodo = function () {
	 		console.log("hello");
	    	$scope.todos.push({name:$scope.formTodoText, done:false});
	    	$scope.formTodoText = '';
	 };

});