$(document).ready(function () {
    $('#signupForm').submit(function (e) {
        e.preventDefault();
        const fullName = $('#fullname').val();
        const email = $('#email').val();
        const password = $('#password').val();
        if (fullName === '' || email === '' || password === '') {
            $('#errorText').text('All fields are required.');
            return;
        }
    });
});
