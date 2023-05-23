const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const ClickButton = button.textContent;
        
        if (button.id=== "c"){
            display.textContent = "0";
            return;
        }

        if (button.id === "del"){
            if(display.textContent.length === 1 || display.textContent === "Failed"){
                display.textContent="0";
            } else{
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }

        if(button.id === "same"){
            try{
                display.textContent = eval(display.textContent);
            } catch{
                display.textContent = "Failed";
            }
            return;
        }

        if(display.textContent==="0" || display.textContent === "Failed"){
            display.textContent = ClickButton;
        } else {
            display.textContent += ClickButton;
        }
    })
})