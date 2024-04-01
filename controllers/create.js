// app.controller('AddControler', function($scope, $http) {

// $scope.createTask = function() {
//     $http.post('/tasks/task', $scope.newTask).then(function(response) {
//       $scope.tasks.push(response.data);
//       $scope.newTask = {};
//     });
//   };

  
//   $scope.editTask = function(task) {
//     $scope.task = task;
//     $scope.editTaskModal = true;
//   };

  
//   $scope.updateTask = function() {
//     $http.put('/tasks/task/' + $scope.task.id, $scope.task).then(function(response) {
//       $scope.editTaskModal = false;
//       console.log('data actualizada', response)
//     });
//   };


// });


app.controller('AddControler', function($http, $scope) { 
    var self = this;
    const today = new Date().toISOString().split('T')[0]; 
    document.getElementById('start').min = today; 
    
    $scope.priorities = ['Baja', 'Media', 'Alta'];
    $scope.selectedPriority = $scope.priorities[0]; 

    self.saveTask = function(task) {
      var httpPromise;
      if (task.id) { 
        httpPromise = $http.put('/task/save/' + task.id, task); 
      } else { 
        httpPromise = $http.post('/task/save/', task); 
      }
  
      httpPromise.then(function(response) {
        
        $scope.$emit('taskSaved', response.data);
        self.closeForm(); 
      }, function(error) {
   
        console.error('Error saving task:', error);
      });
    };
  });
  