TodoApp.controller('TodoController', function($scope, FirebaseService){
	$scope.todos = [];
    $scope.todosDone = 0;
    
    function sortTodos(){
        $scope.todos.sort(function(a, b){ return a.priority - b.priority });
    }

    $scope.allTodosDone = function(){
        // Korvaa tämä kutsumalla sopivaa FirebaseService-palvelun funktiota
        $scope.todos.forEach(function(todo){
           todo.done = true; 
        });
    };
    
    $scope.removeAllTodos = function(){
        // Korvaa tämä kutsumalla sopivaa FirebaseService-palvelun funktiota
        $scope.todos = [];
    };
    
    $scope.addTodo = function(){
        if($scope.newTodo !== ''){
            // Korvaa tämä kutsumalla sopivaa FirebaseService-palvelun funktiota
            $scope.todos.push({
                task: $scope.newTodo,
                done: false,
                priority: 1
            });

            $scope.newTodo = '';
            sortTodos();
        }
    };
    
    $scope.removeTodo = function(index){
        // Korvaa tämä kutsumalla sopivaa FirebaseService-palvelun funktiota
        $scope.todos.splice(index, 1);
    };

    $scope.setStatus = function(todo){
        // Tallenne tehtävään tehdyt muutokset Firebaseen
    }
    
    $scope.setPriority = function(todo){
        // Tallenne tehtävään tehdyt muutokset Firebaseen
        sortTodos();
    }
    
    $scope.$watch('todos', function(newTodos, oldTodos){
        $scope.todosDone = newTodos.filter(function(todo){ return todo.done }).length;
    }, true);
});