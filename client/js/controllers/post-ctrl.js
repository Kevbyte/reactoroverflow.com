'use strict';
/**
 * Post Controller
 */

angular.module('RDash')
.controller('PostCtrl', function PostCtrl($scope) {
  $scope.data = {
    posts: [
      {
        title: 'how to make a grown man cry',
        author: 'Andrew Koshinoko',
        content: 'first you need to push them onto the ground and then...',
        tags: ['#cry', '#cruelty']
      }
    ]
  };

});
