

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check username and password
    if (username === "admin" && password === "password") {
        // Set a cookie to remember the login state for 60 minutes
        var now = new Date();
        var expireTime = new Date(now.getTime() + 60 * 60 * 1000); // 60 minutes
        document.cookie = `username=${username};pass=${password}`; // Specify path as '/'
        
        // Redirect to dashboard or perform other actions
        window.location.href = "dashboard.html";
    } else {
        // Display error message
        document.getElementById("error-msg").innerText = "Invalid username or password";
    }
});

// Check if there's a valid cookie on page load
window.onload = function() {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (cookie[0] === "username" && cookie[1] === "admin") {
            // Redirect to dashboard if the cookie is valid
            window.location.href = "dashboard.html";
        }
    }
};
