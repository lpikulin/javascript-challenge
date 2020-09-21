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
  var fltDate = d3.select("#datetime");
  // Get the value property of the input element
  var inputDate = fltDate.property("value");
  //check to make sure we got the input value
  
  var fltCity=d3.select("#city"); 
  var inputCity=fltCity.property("value"); 
  
  var fltState=d3.select("#state"); 
  var inputState=fltState.property("value"); 
  
  var fltCountry=d3.select("#country"); 
  var inputCountry=fltCountry.property("value"); 
  
  var fltShape=d3.select("#shape"); 
  var inputShape=fltShape.property("value"); 
  

  var filterInfo = {
    date:inputDate,
    city:inputCity,
    state:inputState,
    country:inputCountry,
    shape:inputShape
  };

console.info(filterInfo);
  //select table body
  var tbody_filtered = d3.select("tbody");
  //filter data based on input value
  var filteredData = tableData.keys(filterInfo).forEach(key => ufo.key==key);
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