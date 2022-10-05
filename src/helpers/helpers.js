//enable/disable sign up button after checking that all fields are filled and no errors
const toggleButtonClasses = (isFilled, isNoWarning, element, feature) => {
  if (isFilled && isNoWarning) {
    element.className = `${feature}-button-after-validation`;
    element.removeAttribute("disabled");
  } else {
    element.className = `${feature}-button`;
    element.setAttribute("disabled", "true");
  }
};

//form validation
const validateSignupForm = (name, value) => {
  const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/;
  if (name === "name") {
    const isValidUsername = value.length >= 3 && value.length <= 15;
    return isValidUsername ? "" : "username must be between 3-15 characters";
  } else if (name === "email") {
    const isValidEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    return isValidEmail ? "" : "email is invalid";
  } else if (name === "password") {
    const isValidPassword =
      value.length >= 5 && /\d/.test(value) && specialChars.test(value);
    return isValidPassword
      ? ""
      : "password must contain at least 1 number, 1 special character and at least 5 characters";
  }
};

//check is there is any warning shown
const checkWarning = warnings => {
  const result = warnings.every(warning => warning.innerText === "");
  return result;
};

export { toggleButtonClasses, validateSignupForm, checkWarning };
