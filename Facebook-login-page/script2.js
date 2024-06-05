
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    if (validateAge()) {
        
        window.location.href = 'home.html';
    }
});

function validateAge() {
    var dob = document.getElementById('dateOfBirth').value;
    if (dob) {
        var birthDate = new Date(dob);
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 15) {
            alert("User age should be above 15 to have an account on Facebook.");
            return false;
        } else {
            return true;
        }
    } else {
        alert("Please enter your date of birth.");
        return false;
    }
}

