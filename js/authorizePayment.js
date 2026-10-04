function clearForm() {
    document.getElementById("paymentForm").reset();
}

function submitPaymentForm(event) {
    if (document.getElementById("paymentForm").reportValidity()) {
        event.preventDefault()
        document.getElementById("formMessage").textContent
        = "Payment Submitted!";
        document.getElementById("formMessage").classList.
        add("formSuccess");


        setTimeout(() => {
            document.getElementById("paymentForm").reset()
            document.getElementById("formMessage").textContent = "";
            document.getElementById("formMessage").classList.
            remove("formSuccess");
        }, 3200);
        return true;
    }
}

const container = document.getElementById("paymentForm");
const totalLabel = document.getElementById("totalCost");

function updateTotal() {
    let total = 0;
    let transportationToIslandCost = 0;
    let transportationOnIslandCost = 0;
    let lodgingCost = 0;
    let numberOfGuests = 0;
    let lengthOfStay = 0;

    numberOfGuests = parseInt(document.getElementById("numberOfGuests").value) || 0;
    lengthOfStay = parseInt(document.getElementById("lengthOfStay").value) || 0;

    transportationToIslandCost = (parseFloat(document.getElementById("toIslandSelect").selectedOptions[0].dataset.price) || 0) * numberOfGuests;
    transportationOnIslandCost = parseFloat(document.getElementById("onIslandSelect").selectedOptions[0].dataset.price) || 0 ;
    lodgingCost = (parseFloat(document.getElementById("lodgingSelect").selectedOptions[0].dataset.price) || 0) * lengthOfStay;

    total = transportationToIslandCost + transportationOnIslandCost + lodgingCost;

    totalLabel.textContent = `$${total.toFixed(2)}`;
    
}

container.addEventListener('input', updateTotal);
container.addEventListener('change', updateTotal);