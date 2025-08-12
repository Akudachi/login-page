document.getElementById("resetForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmPassword").value;

    if (newPass !== confirmPass) {
        alert("Passwords do not match ❌");
        return;
    }

    alert("✅ Password Reset Successful! Redirecting to Login...");
    window.location.href = "ak.html";
});
