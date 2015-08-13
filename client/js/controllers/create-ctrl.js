'use strict';

/**
 * Create Controller
 */

angular.module('RDash')
.controller('CreateCtrl', function CreateCtrl ($scope, $location, $q,Posts) {
  var anotherDeferred = $q.defer();
  $scope.title = '';
  $scope.content = '';
  $scope.tags = [];
  $scope.data = '';
  $scope.add = function() {
    var preview = document.getElementById('pic');
    var f = document.getElementById('file').files[0];
    var r = new FileReader();
    r.onloadend = function(e){
      preview.src = e.target.result;
      $scope.data = e.target.result;
    }
    r.readAsDataURL( f );
  }; //adds image data to
  $scope.createPost = function() {
    $scope.post = {
      title: $scope.title, 
      content: $scope.content, 
      tags: $scope.tags,
      data: $scope.data
      }; //keys: title, content and tags
    console.log('Inside createPost(), $scope.post = ', $scope.post);
    Posts.addPost($scope.post)
    .then(function(resp) {
      $location.path('/post/'+resp._id); //takes user to the post they created.
    })
    .catch(function(error) {
      console.log(error);
    });
  };
});
