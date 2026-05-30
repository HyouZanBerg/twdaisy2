const calcElements = {
    display: document.getElementById("display"),
    result: document.getElementById("result"),
    numbers: {},
    operators: {},
    specials: {}
    };

['zero','one','two','three','four','five','six','seven','eight','nine'].forEach(num => calcElements.numbers[num] = document.getElementById(num + "btn"));
['add','subtract','multiply','divide'].forEach(op => calcElements.operators[op] = document.getElementById(op + "btn"));
['clear','remove'].forEach(spe => calcElements.specials[spe] = document.getElementById(spe + "btn"));

const numlist = {zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9};
const oplist = {'add':'+', 'subtract':'-', 'multiply':'*', 'divide':'/'};

let container = "0";
calcElements.display.textContent = container;
calcElements.result.textContent = container;

function updateDisplay(){
    if(container === ""){
        container = "0"
    };
    calcElements.display.textContent = container;
    calcElements.result.textContent = eval(container);
};

calcElements.specials.clear.addEventListener("click", () => {
    container = "0";
    updateDisplay();
});

calcElements.specials.remove.addEventListener("click", () => {
    container = container.slice(0, -1);
    updateDisplay();
});

Object.entries(calcElements.numbers).forEach(([name, element]) => {
    element.addEventListener("click", () => {
        let value = numlist[name].toString();

        if (container === "0") {
            container = value;
        } else {
            container = container.concat(value); 
        }
        updateDisplay(); 
    });
});

Object.entries(calcElements.operators).forEach(([name, element]) => {
    element.addEventListener("click", () => {
        if(container != "0" && !['+','-','*','/'].includes(container.at(-1))){
            container = container.concat(oplist[name])
        }
        updateDisplay();
    });
});