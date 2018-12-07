// from data.js


// YOUR CODE HERE!
var tbody = d3.select('tbody');


data.forEach(function(sightings){
  console.log(sightings);  
    var row = tbody.append('tr');
    Object.entries(sightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});




var inputText = d3.select("#datetime")
var button = d3.select("#filter-btn")

// filter data with desired date
function updateDate(){
    d3.event.preventDefault();
    tbody.html(" ");
    console.log(inputText.property("value"));
    var updatedTable = data.filter(sightings => sightings.datetime===inputText.property("value"));
updatedTable.forEach(function(sightings){
  console.log(sightings);  
    var row = tbody.append('tr');
    Object.entries(sightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
}

// event listener to handle change and click
// inputText.on("change", updateDate)
button.on("click", updateDate)
