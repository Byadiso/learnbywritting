document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelectorAll(".login");
  const registerButton = document.querySelectorAll(".register");
  const registerForm = document.querySelector("#register_form");
  const loginForm = document.querySelector("#login_form");
  const password = document.querySelector('[name="password"]');
  const email = document.querySelector('[name="email"]');
  const alert_message_login = document.querySelector("#alert_message_login");
  const alert_message_register = document.querySelector(
    "#alert_message_register"
  );

  console.log("yes we are on login page");

  registerButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log("let bring register form");

      // order matter here
      registerForm.classList.remove("hide");
      // loginForm.classList.add("hide");

      // toggleLogginRegister(loginForm, registerForm);

      // check for empty values

      checkMyValue(email, password, alert_message_register);
    });
  });

  loginButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log("let bring login form");

      // order matter here
      loginForm.classList.remove("hide");
      // registerForm.classList.add("hide");
      // toggleLogginRegister(loginForm, registerForm);

      checkMyValue(email, password, alert_message_login);
    });
  });

  // login logic

  // checking function

  const checkMyValue = (emailInput, passwordInput, messageBlock) => {
    if (!emailInput.value && !passwordInput.value) {     
        messageBlock.style.background = "red";
        messageBlock.innerHTML = "first add something";
        setTimeout(() => {
          messageBlock.style.display = "none";
        }, 3000);
      console.log("first add something");      
    } else if (!emailInput.value) {
      emailInput.style.border = "1px solid red";
      messageBlock.style.background = "red";
      messageBlock.innerHTML = "Your email is missing";

      setTimeout(() => {
        messageBlock.style.display = "none";
      }, 3000);
    } else if (!passwordInput.value) {
      passwordInput.style.border = "1px solid red";
      //   console.log((name.style.border = "1px solid red"));
      messageBlock.style.background = "red";
      messageBlock.innerHTML = "your password is missing";
      setTimeout(() => {
        messageBlock.style.display = "none";
      }, 3000);
    } 

    if (emailInput.value && passwordInput.value) {
      console.log("let do login");
      // window.location.href = "../html/dashboard.html";
    }
  };
 
});
