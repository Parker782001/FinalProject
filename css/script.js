var request = new XMLHttpRequest();
request.open('GET', 'data.json');
request.responseType = 'json';
request.send();

// Display the JSON data on the HTML page
request.onload = function() {
  var jsonData = request.response;
  var dataContainer = document.getElementById('json-data');
  dataContainer.innerHTML = '<pre>' + JSON.stringify(jsonData, null, 2) + '</pre>';
};
