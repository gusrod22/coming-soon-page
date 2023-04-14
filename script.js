const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.createElement('div');
errorMessage.classList.add('error-message');
errorMessage.textContent = 'Please enter a valid email address.';

const emailIcon = document.getElementById('email-icon-container');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const inputContainer = emailInput.parentNode;

  if (!email) {
    // Add this block to check if the input field is empty
    errorMessage.textContent = 'Please enter your email address.';
    inputContainer.insertAdjacentElement('afterend', errorMessage);
    emailIcon.classList.add('error-icon');
    return;
  } else if (!emailRegex.test(email)) {
    // Add this block to check if the email address is formatted correctly
    inputContainer.insertAdjacentElement('afterend', errorMessage);
    emailIcon.classList.add('error-icon');
    return;
  }

  errorMessage.remove();
  emailIcon.classList.remove('error-icon');
  // Add your custom code here to submit the form or perform any other actions
});
