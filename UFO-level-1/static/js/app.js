// from data.js
var tableData = data;

// select the table 
var tbody = d3.select("tbody");

var count = 0;

// Building table function 
function buildTable(x) {
    x.forEach(ufoReport => {

        // Adding rows 
        var row = tbody.append("tr");
        count += 1;        

        // Gathering data and appending to cells
        Object.entries(ufoReport).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
})};

// build default table 
buildTable(tableData);

// Prepping search function 
var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

// Building filtered table 
function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    // Grab search date 
    var inputValue = inputElement.property("value");

    // Deleting original table 
    d3.selectAll("td").remove();

    function dateSearch(tableDates) {
        return tableDates.datetime == inputValue;
    }

    // Filtering the table 
    var searchedData = tableData.filter(dateSearch);

    buildTable(searchedData);
}