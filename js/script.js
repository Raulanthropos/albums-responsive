const parentList = document.querySelectorAll(".listofelements"); //All unordered lists hosting all list items with the delete button as the last item
const removeRowButtons = document.querySelectorAll(".row-btn-tbd"); //All delete buttons
const removeRow = () => {
for (let i=0; i<removeRowButtons.length; i++) { //Iterating through the buttons
    removeRowButtons[i].addEventListener('click', () => { //Event listener within the iteration
        parentList[i].remove(); //Same number of unordered lists and removebuttons - by clicking the button, on line 103, we ask the listener to delete the whole associated row
    })
}
}

removeRow();

