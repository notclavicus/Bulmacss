const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (loginPassword.type === 'password') {
            loginPassword.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            loginPassword.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });

    loginEmail.addEventListener('input', function() {
        if (this.value.length > 0) {
            emailError.style.display = 'none';
            this.classList.remove('is-danger');
        }
    });

    loginPassword.addEventListener('input', function() {
        if (this.value.length >= 8) {
            passwordError.style.display = 'none';
            this.classList.remove('is-danger');
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        if (!loginEmail.value.trim() || !isValidEmail(loginEmail.value)) {
            emailError.style.display = 'block';
            loginEmail.classList.add('is-danger');
            shakeField(loginEmail);
            isValid = false;
        } else {
            emailError.style.display = 'none';
            loginEmail.classList.remove('is-danger');
        }

        if (loginPassword.value.length < 8) {
            passwordError.style.display = 'block';
            loginPassword.classList.add('is-danger');
            shakeField(loginPassword);
            isValid = false;
        } else {
            passwordError.style.display = 'none';
            loginPassword.classList.remove('is-danger');
        }

        if (!isValid) {
            document.getElementById('loginError').style.display = 'flex';
        } else {
            alert('Login successful! (Demo only - no backend connected)');
        }
    });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
    const fullName = document.getElementById('fullName');
    const signupEmail = document.getElementById('signupEmail');
    const username = document.getElementById('username');
    const signupPassword = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const usernameError = document.getElementById('usernameError');
    const passError = document.getElementById('passError');
    const confirmError = document.getElementById('confirmError');
    const termsError = document.getElementById('termsError');
    
    const toggleSignupPassword = document.getElementById('toggleSignupPassword');
    const passwordStrength = document.getElementById('passwordStrength');
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    const termsCheck = document.getElementById('termsCheck');

    toggleSignupPassword.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (signupPassword.type === 'password') {
            signupPassword.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            signupPassword.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });

    signupPassword.addEventListener('input', function() {
        const password = this.value;
        
        if (password.length > 0) {
            passwordStrength.style.display = 'block';
        } else {
            passwordStrength.style.display = 'none';
            return;
        }

        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        strengthBar.className = 'strength-bar';
        
        if (strength <= 2) {
            strengthBar.classList.add('strength-weak');
            strengthText.textContent = 'Weak password';
            strengthText.style.color = '#ef4444';
        } else if (strength <= 3) {
            strengthBar.classList.add('strength-medium');
            strengthText.textContent = 'Medium strength';
            strengthText.style.color = '#a28089';
        } else {
            strengthBar.classList.add('strength-strong');
            strengthText.textContent = 'Strong password';
            strengthText.style.color = '#8458B3';
        }

        if (password.length >= 8) {
            passError.style.display = 'none';
            signupPassword.classList.remove('is-danger');
        }
    });

    fullName.addEventListener('input', function() {
        if (this.value.trim().length > 0) {
            nameError.style.display = 'none';
            this.classList.remove('is-danger');
        }
    });

    signupEmail.addEventListener('input', function() {
        if (isValidEmail(this.value)) {
            emailError.style.display = 'none';
            this.classList.remove('is-danger');
        }
    });

    username.addEventListener('input', function() {
        if (this.value.length >= 4) {
            usernameError.style.display = 'none';
            this.classList.remove('is-danger');
        }
    });

    confirmPassword.addEventListener('input', function() {
        if (this.value === signupPassword.value && this.value.length > 0) {
            confirmError.style.display = 'none';
            this.classList.remove('is-danger');
        }
    });

    termsCheck.addEventListener('change', function() {
        if (this.checked) {
            termsError.style.display = 'none';
        }
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        if (!fullName.value.trim()) {
            nameError.style.display = 'block';
            fullName.classList.add('is-danger');
            shakeField(fullName);
            isValid = false;
        } else {
            nameError.style.display = 'none';
            fullName.classList.remove('is-danger');
        }

        if (!isValidEmail(signupEmail.value)) {
            emailError.style.display = 'block';
            signupEmail.classList.add('is-danger');
            shakeField(signupEmail);
            isValid = false;
        } else {
            emailError.style.display = 'none';
            signupEmail.classList.remove('is-danger');
        }

        if (username.value.length < 4) {
            usernameError.style.display = 'block';
            username.classList.add('is-danger');
            shakeField(username);
            isValid = false;
        } else {
            usernameError.style.display = 'none';
            username.classList.remove('is-danger');
        }

        if (signupPassword.value.length < 8) {
            passError.style.display = 'block';
            signupPassword.classList.add('is-danger');
            shakeField(signupPassword);
            isValid = false;
        } else {
            passError.style.display = 'none';
            signupPassword.classList.remove('is-danger');
        }

        if (confirmPassword.value !== signupPassword.value || confirmPassword.value === '') {
            confirmError.style.display = 'block';
            confirmPassword.classList.add('is-danger');
            shakeField(confirmPassword);
            isValid = false;
        } else {
            confirmError.style.display = 'none';
            confirmPassword.classList.remove('is-danger');
        }

        if (!termsCheck.checked) {
            termsError.style.display = 'block';
            isValid = false;
        } else {
            termsError.style.display = 'none';
        }

        if (!isValid) {
            document.getElementById('signupSuccess').style.display = 'none';
        } else {
            document.getElementById('signupSuccess').style.display = 'flex';
            
            setTimeout(() => {
                signupForm.reset();
                passwordStrength.style.display = 'none';
                strengthBar.className = 'strength-bar';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }, 2000);
        }
    });
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function shakeField(element) {
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
}
