//business logic

function List(task, details) {
  this.task = task;
  this.details = details;
}



console.log("boop")




// User Interface Logicv
//
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var inputtedDetails = $("input#new-details").val();

    var newList = new List(inputtedTask, inputtedDetails);
    console.log(newList);

    $("ul#avoidList").append("<li><span class='new-item'>" + newList.task + "</span></li>");

    $("input#new-task").val("");
    $("input#new-details").val("");


    $(".new-item").last().click(function() {
      $("#show-items").show();
      $("#show-items h2").text(newList.task);
      $(".details").text(newList.details);
    });


  });
});


// Specifications
// user fills out input form and and can see list.
// user can click on list item and view any additional d33ts.
// user checks that a list item is complete and moves to different section of page.
