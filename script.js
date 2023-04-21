

const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.createElement("div");
errorMessage.classList.add("error-message");
errorMessage.textContent = "Please enter a valid email address.";
const inputContainer = emailInput.parentNode;
const emailIconContainer = document.querySelector('.error-icon-container');
emailIconContainer.classList.add('hidden');
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const existingErrorMessage = inputContainer.nextElementSibling;
  if (!email) {
    inputContainer.style.border = "1px solid red";
    errorMessage.textContent = "Please enter your email address.";
    if(!existingErrorMessage || existingErrorMessage.className !== 'error-message') {
      inputContainer.insertAdjacentElement("afterend", errorMessage);
    }
    emailIconContainer.classList.remove('hidden');
    return;
  } else if (!emailRegex.test(email)) {
    inputContainer.style.border = "1px solid red";
    errorMessage.textContent = "Please enter a valid email address.";
    if(!existingErrorMessage || existingErrorMessage.className !== 'error-message') {
      inputContainer.insertAdjacentElement("afterend", errorMessage);
    }
    emailIconContainer.classList.remove('hidden');
    return;
  }
  if(existingErrorMessage && existingErrorMessage.className === 'error-message') {
    existingErrorMessage.remove();
  }
  emailIconContainer.classList.add('hidden');
  inputContainer.style.border = '1px solid #ccc'; 
});