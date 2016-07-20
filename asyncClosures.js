

for (var i = 0; i < 3; i++) {
  setTimeout(function(localI) { console.log(localI); }.bind(this, i), 1000 * i);
}

