// from data.js
// assign data as variable tableData
let tableData = data;

let submit = d3.select("#filter-btn")

submit.on("click", function() {
    // remove auto refreshing
    d3.event.preventDefault();
    // select the input element and get HTML id
    // get the users input element
    let inputE1 = d3.select("#datetime");
    let inputV1 = inputE1.property("value");

    let inputE2 = d3.select("#city");
    let inputV2 = inputE2.property("value");

    
    let inputE3 = d3.select("#state");
    let inputV3 = inputE3.property("value");
    
    let inputE4 = d3.select("#shape");
    let inputV4 = inputE4.property("value");

    // test outputs
    console.log(inputV1);
    console.log(inputV2);
    console.log(inputV3);
    console.log(inputV4);

    let filteredData = tableData
   
    if (inputV1.length > 0 ) {
        filteredData = filteredData.filter(tableData => tableData.datetime === inputV1);
        } else {
        filteredData = filteredData;
    }

    if (inputV2.length > 0 ) {
        filteredData = filteredData.filter(tableData => tableData.city === inputV2);
        } else {
        filteredData = filteredData;
    }

    if (inputV3.length > 0 ) {
        filteredData = filteredData.filter(tableData => tableData.state === inputV3);
        } else {
        filteredData = filteredData;
    }

    if (inputV4.length > 0 ) {
        filteredData = filteredData.filter(tableData => tableData.shape === inputV4);
        } else {
        filteredData = filteredData;
    }


    // console.log(tableData);


    let tbody = d3.select("tbody");

//     // // // // Step 1: Loop Through `data` and console.log each data.js object
    filteredData.forEach(function(data) {
      console.log(data);
    });

// // // filteredData.forEach(data => console.log(data));

// // // Step 2:  Use d3 to append one table row `tr` for each data.js object
// // // Appending the `tr` elements.
        filteredData.forEach(data => {
            console.log(data);
            let row = tbody.append("tr");
        });
    
//     // // // Step 3:  Use `Object.entries` to console.log each data.js value
        filteredData.forEach(function(data) {
            console.log(data);
            let row = tbody.append("tr");
            Object.entries(data).forEach(([key, value]) => console.log(key, value))
        });
    
//     // // // Step 4: Use d3 to append 1 cell per data.js value (Date, City, State, Country, Shape, Duration, Comments)
        filteredData.forEach(function(data){
            console.log(data);
            let row = tbody.append("tr");
            Object.entries(data).forEach(function([key, value]) {
            console.log(key, value);
        // Append a cell to the row for each value
        // in the data.js object
            let cell = row.append("td");
            cell.text(value)
            });
        });

});