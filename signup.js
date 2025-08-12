document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const pass = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirm-password").value;

    if (pass !== confirmPass) {
        alert("Passwords do not match ❌");
        return;
    }

    alert("✅ Account Created! Redirecting to Login...");
    window.location.href = "ak.html";
});
