function storeRegistrationDetails(event) {
    event.preventDefault(); 


    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

  
    if (!name || !username || !password) {
        alert("Please fill out all fields.");
        return false;
    }

    var registrationDetails = {
        name: name,
        username: username,
        password: password
    };

    localStorage.setItem("registrationDetails", JSON.stringify(registrationDetails));
    window.location.href = "login.html";
}


document.getElementById("registrationForm").addEventListener("submit", storeRegistrationDetails);
