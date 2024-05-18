const formUI = {
  appendForm: function (containerId, formType) {
    const formTitle = formType === "login" ? "Login" : "Register";
    const buttonLabel = formType === "login" ? "Login" : "Register";
    const additionalFields =
      formType === "register"
        ? `
      <label for="Email">Email</label>
      <input type="email" name="Email" id="Email" placeholder="Email"
          class="form-control border-0 border-bottom rounded-0 mb-2">
      <label for="Confirm Password">Confirm Password</label>
      <input type="password" name="ConfirmPassword" id="ConfirmPassword"
          placeholder="Confirm Password" class="form-control border-0 border-bottom rounded-0 mb-2">
    `
        : "";

    $(`#${containerId}`).append(`
      <p class="form-heading text-center">${formTitle}</p>
      <div class="container d-flex flex-column">
          <label for="Username">Username</label>
          <input type="text" name="Username" id="Username" placeholder="Username"
              class="form-control border-0 border-bottom rounded-0 mb-2">
          <label for="Password">Password</label>
          <input type="password" name="Password" id="Password" placeholder="Password"
              class="form-control border-0 border-bottom rounded-0 mb-2">
          ${additionalFields}
          <div class="d-flex justify-content-between border rounded-pill mb-2">
              <span id="captchaCanvas"
                  class="captchaCanvas d-flex justify-content-center align-items-center w-75 p-0"></span>
              <i id="refreshCaptcha" class="btn bi bi-arrow-clockwise fs-4"></i>
          </div>
          <label for="Captcha">Captcha</label>
          <input type="text" class="form-control border-0 border-bottom rounded-0 mb-2" id="captchaInput"
              placeholder="Captcha">
          <p id="captchaError" class="fs-6 text-danger text-center"></p>
          <button class="btn btn-dark w-25 mx-auto">${buttonLabel}</button>
      </div>
      <p class="fs-5 text-center mt-4">OR</p>
      <p id="switchTo${
        formType === "login" ? "Register" : "Login"
      }" class="text-center" role="button">${
      formType === "login" ? "Register" : "Login"
    }</p>
    `);
  },
  switchForm: function (screenWidth, formType) {
    const oppositeFormType = formType === "login" ? "register" : "login";
    const formHeadingText =
      formType === "login" ? "Welcome Back" : "Welcome, Please Sign Up";
    const formImageUrl =
      formType === "login" ? "/resources/login.png" : "/resources/register.png";

    if (screenWidth < 768) {
      $(`#${oppositeFormType}Container`).hide();
      $(`#${formType}Container`).show();
    } else {
      $("#formOverlay")
        .removeClass(formType === "login" ? "right-to-left" : "left-to-right")
        .addClass(formType === "login" ? "left-to-right" : "right-to-left");
      $("#formHeading").text(formHeadingText);
      $("#formImage").attr("src", formImageUrl);
    }

    $(`#${oppositeFormType}Container`).empty();
    this.appendForm(`${formType}Container`, formType);
    drawCaptcha();
  },
};

$(document).ready(function () {
  $("#registerContainer").empty();

  const screenWidth = $(window).width();
  if (screenWidth < 768) {
    $("#registerContainer").hide();
  }

  $(document).on("click", "#switchToLogin", function () {
    formUI.switchForm(screenWidth, "login");
  });

  $(document).on("click", "#switchToRegister", function () {
    formUI.switchForm(screenWidth, "register");
  });
});
