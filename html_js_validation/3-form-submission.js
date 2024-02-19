// form-submission.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var errorElement = document.getElementById("error");
    
    // Check if name and email fields are filled
    if (name.trim() === "" || email.trim() === "") {
        errorElement.textContent = "Please fill in all required fields.";
        return;
    }
    
    // Clear error message if all required fields are filled
    errorElement.textContent = "";
    
    // Display success message
    alert("Form submitted successfully!");
}

// Add event listener to the form element
document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);
