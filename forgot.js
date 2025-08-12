const sendOtpBtn = document.getElementById('sendOtpBtn');
const verifyOtpBtn = document.getElementById('verifyOtpBtn');
const otpSection = document.getElementById('otpSection');
let generatedOtp = "";
let countdown;
let timeLeft = 60;

sendOtpBtn.addEventListener('click', function() {
    const phone = document.getElementById('phone').value.trim();
    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number");
        return;
    }

    generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    alert(`OTP sent to ${phone}: ${generatedOtp} (for testing)`);

    otpSection.style.display = "block";
    verifyOtpBtn.style.display = "inline-block";

    sendOtpBtn.disabled = true;
    startCountdown();
});

function startCountdown() {
    timeLeft = 60;
    sendOtpBtn.textContent = `Resend OTP in ${timeLeft}s`;
    countdown = setInterval(() => {
        timeLeft--;
        sendOtpBtn.textContent = `Resend OTP in ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            sendOtpBtn.disabled = false;
            sendOtpBtn.textContent = "Send OTP";
        }
    }, 1000);
}

document.getElementById('forgotForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const otp = document.getElementById('otp').value.trim();
    if (otp === generatedOtp) {
        alert("✅ OTP Verified! Redirecting to reset password page...");
        window.location.href = "reset-password.html";
    } else {
        alert("❌ Invalid OTP, please try again.");
    }
});
