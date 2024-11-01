angular.module('myApp').component('mainApp', {
    template: `
      <nav>
        <a href="#!/home">Home</a> | <a href="#!/about">About</a>
      </nav>
      <div ng-view></div>
    `
  });
  