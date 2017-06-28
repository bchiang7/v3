$(function() {

  const d = new Date();
  const hours = d.getHours();
  if (hours >= 19) {
    $("#switch").prop("checked", true);
    $("body").addClass("night");
  }

  $("#toggle").click(function() {
    const isChecked = $("#switch").is(":checked");
    if (isChecked) {
      $("body").removeClass("night");
    } else {
      $("body").addClass("night");
    }
  });

});