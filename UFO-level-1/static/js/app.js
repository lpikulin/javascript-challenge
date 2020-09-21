// from data.js
var tableData = data;
var tbody = d3.select("tbody");

//populate the data table
  tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
 console.log(tbody);
 
 // Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-input");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

//This function clears the rows in the table
function clearTable() {
   //clear the table;
   d3.select("tbody").selectAll('tr').remove();
   console.log("I cleared the table");
 
}
//Function to update table based on event handler click or submit
function runEnter() {
  //do not refresh the page
  d3.event.preventDefault();
  //call the function to clear the table
  clearTable();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  //check to make sure we got the input value
  console.log(inputValue);
 
//select table body
  var tbody_filtered = d3.select("tbody");
  //filter data based on input value
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  //check to see if we have the right data
  console.log(filteredData);

  //write the filtered data to the table
  filteredData.forEach((ufoSighting) => {
    var row = tbody_filtered.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      });
    });
  
}