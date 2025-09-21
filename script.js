function checkPassword() {
    const userPassword = document.getElementById('password').value;
    const correctPassword = "DiplomaStudents2024"; // Set your password here

    if(userPassword === correctPassword) {
        window.location.href = "pdfs.html"; // Redirect to PDFs page
    } else {
        document.getElementById('error-msg').innerText = "Incorrect Password!";
    }
}

