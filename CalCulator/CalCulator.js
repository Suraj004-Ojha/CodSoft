let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = this.textContent;

        if (value === "C") {
            currentInput = "";
            display.value = "";
        } 
        else if (value === "=") {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        } 
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});