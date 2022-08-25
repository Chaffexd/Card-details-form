const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const cardNumberInput = document.getElementById("cardInput");
const cardHolderName = document.getElementById("name");
const monthInput = document.getElementById("month");
const cardExpiry = document.getElementById("fakeDate");
const cardCvv = document.getElementById("cardCvv");
const month = document.getElementById("expiryMonth");
const year = document.getElementById("expiryYear");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvcInput");
const nameError = document.getElementById("nameError");
const numberError = document.querySelector("#numberError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");
const cvcError = document.getElementById("cvcError");
const cardDetailsForm = document.getElementById("cardDetails");
const submitButton = document.getElementById("confirmButton");
const thankYouForm = document.getElementById("thankYou");
const cardForm = document.getElementById("cardForm");

cardNumberInput.addEventListener("input", () => {
    cardNumber.innerHTML = (cardNumberInput.value).replace(/\W/gi, '').replace(/(.{4})/g, '$1 '); 

    var string = cardNumberInput.value;

        for(let i=0; i<string.length; i++){
            var keyCode = string[i];
            var regex=/[^a-z]/g;
            var isValid = regex.test(keyCode);
            console.log(isValid);
            if (!isValid) {
                numberError.innerHTML = "Wrong format, numbers only.";
                cardNumberInput.style.border = "1px solid hsl(0, 100%, 66%)";
                return false;
            }else{
                numberError.innerHTML = "";
                cardNumberInput.style.border = "1px solid hsl(278, 68%, 11%)";
            }
        }
    if(cardNumberInput.value === ""){
        cardNumber.innerHTML = "0000 0000 0000 0000";
    }
}); 

cardHolderName.addEventListener("input", () => {
    cardName.innerHTML = cardHolderName.value;
    if(cardHolderName.value === ""){
        cardName.innerHTML = "Jane Appleseed";
    }
})

monthInput.addEventListener("input", () => {
    month.innerHTML = monthInput.value;
    if(monthInput.value === ""){
        month.innerHTML = "00";
        monthError.style.fontWeight = "bold";
        monthInput.style.border = "1px solid hsl(0, 100%, 66%)";
    }
    if(monthInput.value > 12){
        monthError.innerHTML = "Number cannot be more than 12";
        monthError.style.fontSize = "7px";
        monthError.style.fontWeight = "bold";
        monthInput.style.border = "1px solid hsl(0, 100%, 66%)"
    }else{
        monthError.innerHTML = "";
        monthInput.style.border = "1px solid hsl(278, 68%, 11%)";
    }
});

yearInput.addEventListener("input", () => {
    year.innerHTML = yearInput.value;
    if(yearInput.value === ""){
        year.innerHTML = "00";
        yearInput.style.border = "1px solid hsl(0, 100%, 66%)";
    }else{
        monthError.innerHTML = "";
        monthInput.style.border = "1px solid hsl(278, 68%, 11%)";
    }
})

cvcInput.addEventListener("input", () => {
    cardCvv.innerHTML = cvcInput.value;
    if(cvcInput.value === ""){
        cardCvv.innerHTML = "000";
    }
});

function validate(){
    if(
        cardHolderName.value !== "" && 
        cardNumberInput.value !== "" &&
        monthInput.value !== "" &&
        yearInput.value !== "" &&
        cvcInput.value !== ""
    ){ 
        cardForm.addEventListener("submit", () => {
            cardDetailsForm.style.display = "none";
            thankYouForm.style.display = "flex";
        })
        // cardHolderName.value === "";
        // cardNumberInput.value === "";
        // monthInput.value === "";
        // yearInput.value === "";
        // cvcInput.value === "";

    }else{
        if(cardHolderName.value === ""){
            nameError.innerHTML = "Can't be blank";
            cardHolderName.style.border = "1px solid hsl(0, 100%, 66%)";
        }else{
            nameError.innerHTML = "";
        }

        if(cardNumberInput.value === ""){
            numberError.innerHTML = "Can't be blank";
            cardNumberInput.style.border = "1px solid hsl(0, 100%, 66%)";
        }else{
            numberError.innerHTML = "";
        }

        if(monthInput.value === ""){
            monthError.innerHTML = "Can't be blank";
            monthInput.style.border = "1px solid hsl(0, 100%, 66%)";
        }else{
            monthError.innerHTML = "";
        }

        if(yearInput.value === ""){
            yearError.innerHTML = "Can't be blank";
            yearInput.style.border = "1px solid hsl(0, 100%, 66%)";
        }else{
            yearError.innerHTML = "";
        }

        if(cvcInput.value === ""){
            cvcError.innerHTML = "Can't be blank";
            cvcInput.style.border = "1px solid hsl(0, 100%, 66%)";
        }else{
            cvcError.innerHTML = "";
        }
        return false;
    }
}

submitButton.addEventListener("submit", (e) => {
   
})