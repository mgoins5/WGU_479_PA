
function clearForm() {
    document.getElementById("contactForm").reset();
}

function submitContactForm(event) {
    if (document.getElementById("contactForm").reportValidity()) {
        event.preventDefault()
        document.getElementById("formMessage").textContent
        = "Form Submitted!";
        document.getElementById("formMessage").classList.
        add("formSuccess");


        setTimeout(() => {
            document.getElementById("contactForm").reset()
            document.getElementById("formMessage").textContent = "";
            document.getElementById("formMessage").classList.
            remove("formSuccess");
        }, 3200);
        return true;
    }
}