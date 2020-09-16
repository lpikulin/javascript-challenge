// from data.js
var tableData = data;
var tbody = d3.select("tbody");

//populate the data table
  data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
 
 // Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-input");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  //check to make sure we got the input value
  console.log(inputValue);
  

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
console.log(filteredData);
}