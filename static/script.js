// Function to validate the contact form before submission
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Name Validation (Only letters & spaces)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("Invalid Name: Use letters and spaces only.");
        return false;
    }

    // Phone Validation (Numbers Only)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Invalid Phone: Use a 10-digit number.");
        return false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid Email.");
        return false;
    }

    return true;
}


// Function to open user's email client
function sendEmail() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value || "Inquiry";
    var message = document.getElementById('message').value;

    if (!name || !phone || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create mailto link
    var mailtoLink = `mailto:admin@uasc.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nPhone: " + phone + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

    // Open email client
    window.location.href = mailtoLink;
}
