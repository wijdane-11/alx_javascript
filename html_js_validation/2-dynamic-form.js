// dynamic-form.js

// Function to generate dynamic input fields based on the selected value from the dropdown
function generateInputFields(numFields) {
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previous input fields
    
    for (var i = 1; i <= numFields; i++) {
        var inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form before submission
function validateForm(event) {
    var inputFields = document.querySelectorAll("#inputContainer input[type=text]");
    var isEmpty = false;
    
    inputFields.forEach(function(field) {
        if (field.value.trim() === "") {
            isEmpty = true;
        }
    });
    
    if (isEmpty) {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission if any field is empty
    }
}

// Event listener to generate input fields when the dropdown value changes
document.getElementById("numFields").addEventListener("change", function() {
    var numFields = parseInt(this.value);
    generateInputFields(numFields);
});

// Event listener to validate the form when submitted
document.getElementById("dynamicForm").addEventListener("submit", validateForm);
