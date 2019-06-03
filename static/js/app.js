// from data.js
// assign data as variable tableData
let tableData = data;

let submit = d3.select("#filter-btn")

submit.on("click", function() {
    // remove auto refreshing
    d3.event.preventDefault();
    // select the input element and get HTML id
    let inputElement = d3.select("#datetime");
    // get the users input element
    let inputValue = inputElement.property("value");

    // let inputElement1 = d3.select("#city");
    // let inputValue1 = inputElement1.property("value");


    // test outputs
    // console.log(inputValue);
    // console.log(tableData);

    // Tag to rename label name - not needed.
    // d3.select("li>label").text(inputValue);

    let filteredData = tableData.filter(tableData => tableData.datetime === inputValue)

//****/ || tableData.city === inputValue1****



    console.log(filteredData);

    let tbody = d3.select("tbody");

    // // // // Step 1: Loop Through `data` and console.log each data.js object
// // filteredData.forEach(function(data) {
// // //   console.log(data);
// // });

// // filteredData.forEach(data => console.log(data));

// // Step 2:  Use d3 to append one table row `tr` for each data.js object
// // Appending the `tr` elements.
        filteredData.forEach(data => {
    //   console.log(data);
            let row = tbody.append("tr");
        });
    
    // // // Step 3:  Use `Object.entries` to console.log each data.js value
        filteredData.forEach(function(data) {
    // //   console.log(data);
            let row = tbody.append("tr");
            Object.entries(data).forEach(([key, value]) => console.log(key, value))
        });
    
    // // // Step 4: Use d3 to append 1 cell per data.js value (Date, City, State, Country, Shape, Duration, Comments)
        filteredData.forEach(function(data){
    //     // console.log(data);
            let row = tbody.append("tr");
            Object.entries(data).forEach(function([key, value]) {
    //     // console.log(key, value);
    //     // Append a cell to the row for each value
    //     // in the data.js object
            let cell = row.append("td");
            cell.text(value)
            });
        });

});