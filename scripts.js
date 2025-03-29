        // Function to show the selected section and hide others
        function showSection(section) {
            document.querySelectorAll('.content-section').forEach(el => el.style.display = 'none');
            document.getElementById(section).style.display = 'block';
    
            // Store the last visited section
            localStorage.setItem('lastSection', section);
    
            // Load additional content when needed
            if (section === 'quiz') startQuiz();
            if (section === 'profile') loadProfile();
            if (section === 'blog') loadBlog();
        }
    
        // Ensure the last visited section loads on page reload
        document.addEventListener("DOMContentLoaded", function () {
            let lastSection = localStorage.getItem('lastSection') || 'dashboard';
            showSection(lastSection);
        });
    
        // Placeholder logout function
        function logout() {
            alert('Logging out...');
            localStorage.removeItem('lastSection'); // Reset stored section
        }
    
        // Function to toggle between login and signup forms
        function toggleAuthForm() {
            let loginForm = document.getElementById("loginForm");
            let signupForm = document.getElementById("signupForm");
            let modalTitle = document.getElementById("modalTitle");
    
            if (loginForm.style.display === "none") {
                loginForm.style.display = "block";
                signupForm.style.display = "none";
                modalTitle.innerText = "Login";
            } else {
                loginForm.style.display = "none";
                signupForm.style.display = "block";
                modalTitle.innerText = "Sign Up";
            }
        }