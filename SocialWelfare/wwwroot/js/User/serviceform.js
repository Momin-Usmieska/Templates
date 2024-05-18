function oneStepComplete() {
  $(document)
    .find(".bg-success")
    .next(".border-primary")
    .removeClass("border-primary")
    .addClass("border-success")
    .next(".bg-primary")
    .removeClass("bg-primary")
    .addClass("bg-success");
}

$(document).ready(function () {
  let stepCount = 1;
  if (stepCount == 1) $("#previous").attr("disabled", true);

  $("#next").click(function () {
    if (stepCount < 4) {
      $("#form" + stepCount).hide();
      $("#form" + (stepCount + 1)).show();
      oneStepComplete();
      $("#previous").attr("disabled", false);
      stepCount++;
      stepCount == 4 ? $("#next").attr("disabled", true) : "";
    }
  });

  $("#previous").click(function () {
    if (stepCount > 1) {
      $("#form" + stepCount).hide();
      $("#form" + (stepCount - 1)).show();
      $("#next").attr("disabled", false);
      stepCount--;
      stepCount == 1 ? $("#previous").attr("disabled", true) : "";
    }
  });
});
