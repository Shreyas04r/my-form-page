document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Name Validation
    let name = document.getElementById("name").value.trim();
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email Validation
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email address.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Gender Validation
    let gender = document.getElementById("gender").value;
    if (gender === "") {
        document.getElementById("genderError").textContent = "Please select a gender.";
        isValid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    // Plan Selection Validation
    let planSelected = document.querySelector('input[name="plan"]:checked');
    if (!planSelected) {
        document.getElementById("planError").textContent = "Please choose a plan.";
        isValid = false;
    } else {
        document.getElementById("planError").textContent = "";
    }

    if (isValid) {
        document.getElementById("successMessage").textContent = "Form submitted successfully!";
    }
});
