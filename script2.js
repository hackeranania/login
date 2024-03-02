
function getCookie(name) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return "";
}

// Function to logout
function logout() {
    // Clear the cookie by setting its expiration time to a past date
    document.cookie = "username=; ;";
    // Redirect to the login page
    window.location.href = "index.html";
}

// On page load, check if there's a valid cookie and populate the username
window.onload = function() {
    var username = getCookie("username");
    console.log(username)
    if (username !== "") {
        document.getElementById("username").innerText = username;
    } else {
        // Redirect to the login page if there's no valid cookie
        window.location.href = "index.html";
    }
};

