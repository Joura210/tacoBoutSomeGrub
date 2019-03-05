// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-tasted").on("click", function(event) {
      var id = $(this).data("id");
      var newTaste = $(this).data("newtaste");
  
      var tastedYum = {
        sleepy: newTaste
      };
  
      // Send the PUT request.
      $.ajax("/api/taco/" + id, {
        type: "PUT",
        data: tastedYum
      }).then(
        function() {
          console.log("changed taste to", newTaste);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newTaco = {
        name: $("#newTaco").val().trim(),
        tasted: $("[name=tasted]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/taco", {
        type: "POST",
        data: newTaco
      }).then(
        function() {
          console.log("created new taco");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-taco").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted taco", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  