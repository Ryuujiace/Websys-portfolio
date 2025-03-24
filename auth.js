// Simple Authentication (Local Storage)
function logout() {
    alert("Logged out successfully!");
    window.location.reload();
}

// Show Section based on Click
function showSection(section) {
    document.querySelectorAll('.content-section').forEach(el => el.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Update Profile
function updateProfile() {
    const username = document.getElementById('username').value;
    alert(`Profile updated: ${username}`);
}
