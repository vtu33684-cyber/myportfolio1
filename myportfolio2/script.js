function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            result.style.color = "red";
            result.innerHTML = "⚠ Please fill in all the fields.";
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            result.style.color = "red";
            result.innerHTML = "⚠ Please enter a valid email address.";
            return;
        }

        let phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            result.style.color = "red";
            result.innerHTML = "⚠ Please enter a valid 10-digit phone number.";
            return;
        }

        result.style.color = "lightgreen";
        result.innerHTML =
            "✅ Thank you, <strong>" +
            name +
            "</strong>! Your message has been submitted successfully.";

        
        form.reset();
    });

});