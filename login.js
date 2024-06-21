function checkLoginDetails(event) {
    event.preventDefault(); 

   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    var storedDetails = JSON.parse(localStorage.getItem("registrationDetails"));

    
    if (storedDetails && username === storedDetails.username && password === storedDetails.password) {
        alert("Login successful!");
        
        window.location.href = "job.html";
    } else {
        alert("Invalid username or password");
    }
}


document.getElementById("loginForm").addEventListener("submit", checkLoginDetails);
