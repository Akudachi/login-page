// LOGIN FUNCTION
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Example hardcoded credentials
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        // Store login status in localStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password!");
    }
}
