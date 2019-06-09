// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// load table
tableData.forEach((tablerow) => {
  var row = tbody.append("tr");
  Object.entries(tablerow).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

//create filter button variable 
  var filterbutton = d3.select(".btn");

  //create event on button click
  filterbutton.on("click", function() {
    d3.event.preventDefault();
    
  //grab the value typed into the date field to filter
    var inputValue = d3.select("#datetime").property("value");
    
    //logging for debugging
    console.log(inputValue);
    console.log("button clicked");
    
    //filter the date
    var filteredDate = data.filter(data => data.datetime === inputValue);
      let response = 
          {
              filteredDate
          };
     
      console.log(filteredDate);
      
      //render a new table body
      tbody.html("");
   
      //if the response is contains rows, render the table based on the filtered results
    if (response.filteredDate.length !== 0) {
 
        filteredDate.forEach((fd) => {
          var row = tbody.append("tr");
          Object.entries(fd).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
        });

    }
  
    //if the response is null, print text and draw the entire table
    else {
        tbody.append("tr").append("td").text("Date Not Found. All Results Returned"); 
        tableData.forEach((tablerow) => {
          var row = tbody.append("tr");
          Object.entries(tablerow).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
        });
    }
      // inputValue = d3.select("#datetime").node().value = "";
  });
    
   
  // });

