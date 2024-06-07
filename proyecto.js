    const form = document.getElementById("registration-form");
    form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageTextarea = document.getElementById("message");
    const termsCheckbox = document.getElementById("terms");
    const genderRadio = document.querySelector('input[name="gender"]:checked');
    const countrySelect = document.getElementById("country");
    if (!nameInput.checkValidity() ||
    !emailInput.checkValidity() ||
    !messageTextarea.checkValidity() ||
    !termsCheckbox.checkValidity() ||
    genderRadio === null ||
    countrySelect.value === "")
    {
        return;
    
    }
});



