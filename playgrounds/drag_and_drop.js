const dragItems = document.querySelectorAll(".dragItem");
const boxes = document.querySelectorAll("#leftBox, #rightBox");

let selectedItem = null;

dragItems.forEach((item) => {
    item.addEventListener("dragstart", () => {
        selectedItem = item;
    });
});

boxes.forEach((box) => {
    box.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    box.addEventListener("drop", () => {
        if (selectedItem) {
            box.appendChild(selectedItem);
        }
    });
});