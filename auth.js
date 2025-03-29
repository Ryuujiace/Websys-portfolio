document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const modalTitle = document.getElementById("modalTitle");
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");
    const userDisplay = document.getElementById("userDisplay");

    // Check if user is already logged in
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        loginButton.style.display = "none";
        userDisplay.style.display = "inline";
        userDisplay.textContent = "Welcome, " + currentUser.fullName;
        logoutButton.style.display = "inline";
    } else {
        loginButton.style.display = "inline";
        userDisplay.style.display = "none";
        logoutButton.style.display = "none";
    }

    // Function to toggle between Login and Signup
    window.toggleAuthForm = function () {
        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
            modalTitle.innerText = "Login";
        } else {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
            modalTitle.innerText = "Sign Up";
        }
    };

    // Signup Form Submission
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let fullName = document.getElementById("signupName").value;
        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some(user => user.email === email)) {
            alert("Email already registered! Please login.");
            return;
        }

        users.push({ fullName, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created! Please login.");
        toggleAuthForm();
    });

    // Login Form Submission
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Login Successful! Welcome, " + user.fullName);
            localStorage.setItem("currentUser", JSON.stringify(user));

            // Update UI
            loginButton.style.display = "none";
            userDisplay.style.display = "inline";
            userDisplay.textContent = "Welcome, " + user.fullName;
            logoutButton.style.display = "inline";

            // Close modal
            var authModal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
            authModal.hide();
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });

    // Function to Logout
    window.logout = function () {
        alert("Logging out...");
        localStorage.removeItem("currentUser");

        // Reset UI
        loginButton.style.display = "inline";
        userDisplay.style.display = "none";
        logoutButton.style.display = "none";
    };
});
