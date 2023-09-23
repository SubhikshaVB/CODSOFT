const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorText = document.getElementById('errorText');
const girlAnimation = document.getElementById('girl-animation');
const validTeacherUsername = 'teacher';
const validStudentUsername = 'student';
const validPassword = 'password';
usernameInput.addEventListener('focus', () => {
    girlAnimation.classList.add('closing-eyes');
});

passwordInput.addEventListener('focus', () => {
    girlAnimation.classList.remove('closing-eyes');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();
    if (document.getElementById('teacher').checked) {
        if (enteredUsername === validTeacherUsername && enteredPassword === validPassword) {
            window.location.href = 'dashboard_teacher.html';
        } else {
            errorText.textContent = 'Invalid username or password. Please try again.';
        }
    } else if (document.getElementById('student').checked) {
        if (enteredUsername === validStudentUsername && enteredPassword === validPassword) {
            window.location.href = 'dashboard_student.html';
        } else {
            errorText.textContent = 'Invalid username or password. Please try again.';
        }
    }
});
