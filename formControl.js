const usernameEl = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const phoneEl = document.querySelector("#phone");
const checkBoxEl = document.querySelector("#checkbox");
const submitBtn = document.querySelector("#bottom-from-submit-btn");
const form = document.querySelector(".footer-form");
const succesedForm = document.querySelector(".succesed-form");
console.log({ usernameEl, emailEl, checkBoxEl });

const checkUsername = () => {
  let valid = false;

  const min = 6,
    max = 25;

  const username = usernameEl.value.trim();

  if (!isBetween(username.length, min, max)) {
    valid = false;
  } else {
    valid = true;
  }
  return valid;
};

const checkPhone = () => {
  var isValidPhone =
    /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
      phoneEl.value
    );

  return isValidPhone;
};

const checkCheckBox = () => {
  let valid = checkBoxEl.checked;
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email) && !isEmailValid(email)) {
  } else {
    valid = true;
  }

  return valid;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

form.addEventListener("submit", function (e) {
  e.preventDefault();
alert(1)
  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPhoneValid = checkPhone(),
    isCheckBoxValid = checkCheckBox();

  let isFormValid =
    isUsernameValid && isEmailValid && isPhoneValid && isCheckBoxValid;

  if (isFormValid) {
    sendPostData({
      email: emailEl.value,
      phone: phoneEl.value,
      username: usernameEl.value,
    });
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce((e) => {
    console.log({ d: 2 });
    switch (e.target.id) {
      case "username":
        checkUsername();
        break;
      case "email":
        checkEmail();
        break;
      case "phone":
        checkPhone();
        break;
      case "checkbox":
        checkCheckBox();
        break;
      default:
        return;
    }
  })
);

async function sendPostData({ email, phone, username }) {
  try {
    console.log({ email, phone, username });
    const url =
      "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfRv2Kcbj6sGC5cBoBg1wrT5IeduFIeHSh8Lw9l2bRQ7LEVsw/formResponse";
    const formData = new FormData();
    formData.append("entry.724546656", username);
    formData.append("entry.369619181", email);
    formData.append("entry.1557246847", phone);
    console.log({ formData });
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });
    if (response) {
      form.remove();
      succesedForm.style.display = "flex";
    }
  } catch (err) {
    console.log("Виникла помилка при відправці!");
  }
}
