TodoApp.controller('TodoController', function($scope){
	$scope.todos = [];
    $scope.todosDone = 0;
    
    /*
    *	Mark all todos as done
    */
    $scope.allTodosDone = function(){
        $scope.todos.forEach(function(todo){
           todo.done = true; 
        });
    };
    
    /*
    *	Remove all todos
    */
    $scope.removeAllTodos = function(){
        $scope.todos = [];
    };
    
    /*
    *	Add a todo. The task of the todo is the value of the newTodo variable
    */
    $scope.addTodo = function(){
        if($scope.newTodo !== ''){
            $scope.todos.push({
                task: $scope.newTodo,
                done: false,
                priority: 1
            });

            $scope.newTodo = '';
            $scope.order();
        }
    };
    
    /*
    *	Remove a todo from the given index
    */
    $scope.removeTodo = function(index){
       $scope.todos.splice(index, 1);
       $scope.order();
    };
    
    /*
    *	Sorts todos by the priority value
    */
    $scope.order = function(){
        $scope.todos.sort(function(a, b){ return a.priority - b.priority });
    }
    
    $scope.$watch('todos', function(newTodos, oldTodos){
        var todosDone = 0;

        newTodos.forEach(function(todo){
            if(todo.done){
                todosDone++;
            }
        });
        
        $scope.todosDone = todosDone;
    }, true);
});