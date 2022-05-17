function confirmPassword() {
  const password = document.getElementById('user_password');
  const confirm_password = document.getElementById('confirm_password');
  const match_reminder = document.getElementById('no_match_error');
  const submit_button = document.getElementById('submit_button');
  const main_color = getComputedStyle(document.body).getPropertyValue('--main-color');

  console.log('pwd is ' + password.value, ', cpwd is ' + confirm_password.value)

  if (password.value == confirm_password.value) {
    password.style.borderColor = 'green';
    confirm_password.style.borderColor = 'green';
    match_reminder.innerText = '';
    submit_button.disabled = false;
    submit_button.style.backgroundColor = main_color;
  }
  else {
    password.style.borderColor = 'red';
    confirm_password.style.borderColor = 'red';
    match_reminder.innerText = '* Passwords do not match.';
    match_reminder.style.color = 'red';
    match_reminder.style.fontSize = 'smaller';
    submit_button.disabled = true;
    submit_button.style.backgroundColor = 'grey';
  }
}