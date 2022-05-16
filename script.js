function confirmPassword() {
    const password = document.getElementById('user_password');
    const confirm_password = document.getElementById('confirm_password');

    if (password.value != confirm_password.value) {
        password.style.borderColor = 'red';
        confirm_password.style.borderColor = 'red';
    }
}