describe('TodoController', function(){
	var controller, scope;

  	beforeEach(function(){
    	module('TodoApp');

	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      controller = $controller('TodoController', {
	        $scope: scope
	      });
	    });
  	});

  	/*
  	* Tutustu tarvittaessa TodoController-kontrollerin toteutukseen tiedostossa
  	* app/controllers/todo_controller.js
  	*/

	it('should not have any todos initially', function(){
		expect(true).toBe(false);
	});

	it('should be able to add a todo by calling the addTodo function', function(){
		expect(true).toBe(false);
	});

	it('should not be able to add a todo with an empty name by calling the addTodo function', function(){
		expect(true).toBe(false);
	});

	it('should be able to remove a todo by calling the removeTodo function', function(){
		expect(true).toBe(false);
	});

	it('should be able to remove a todo by calling the removeTodo function', function(){
		expect(true).toBe(false);
	});

	it('should be able to remove all todos by calling the removeAllTodos function', function(){
		expect(true).toBe(false);
	});

	it('should be able to mark all todos as done by calling the allTodosDone function', function(){
		expect(true).toBe(false);
	});

	it('should be able to order todos by priority by calling the order function', function(){
		expect(true).toBe(false);
	});

	it('should have correct amount of todos done (the value of the todosDone should be correct)', function(){
		/*
		* Huom! Testeissä watch-funktio ei huomaa muutosta muuttujassa, ellet kutsu sen 
		* asettamisen jälkeen scope.$apply()
		*/

		expect(true).toBe(false);
	});
});