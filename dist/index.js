
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function () {
  'use strict';

  var readAll = {};
  var users = fetch('http://localhost:9000/.netlify/functions/users')
      .then(function (res) { return res.json(); })
      .then(function (res) {
      Object.assign(readAll, res);
      return readAll.data;
  });

  var getUsers;
  var getty = function () {
      return users;
  };
  var displayUsers = function (arr) {
      var strg = '';
      for (var i = 0; i < arr.length; i++) {
          strg = strg.concat('<p>Id: ' +
              arr[i]._id +
              ', Name: ' +
              arr[i].username +
              ', Age: ' +
              arr[i].age +
              '</p>');
      }
      return strg;
  };
  var havy = function () {
      getty().then(function (res) {
          getUsers = res.allUsers.data;
          var root = document.getElementById('root');
          root.innerHTML = "\n      <div>\n       " + displayUsers(getUsers) + "\n      </div>\n    ";
      });
  };
  havy();

}());
