angular.module("directivePractice").controller("lessonCtrl", function($scope){
  //$scope.test = "This is a test";

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.test = 'laskdjflkasdjf';

  $scope.announceDay = function(lesson, day){
    alert(lesson + ' is active on ' + day  + '.');
  }

})
