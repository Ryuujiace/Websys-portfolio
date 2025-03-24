// Load profile data from local storage or set defaults
function loadProfile() {
    let profileData = JSON.parse(localStorage.getItem("userProfile")) || {
        fullName: "John Doe",
        username: "JohnDoe123",
        email: "johndoe@example.com",
        bio: "Web Developer & Tech Enthusiast",
        profilePic: "https://via.placeholder.com/150"
    };

    // Load data into display mode
    document.getElementById("display-fullName").innerText = profileData.fullName;
    document.getElementById("display-username").innerText = profileData.username;
    document.getElementById("display-email").innerText = profileData.email;
    document.getElementById("display-bio").innerText = profileData.bio;
    document.getElementById("profile-pic-display").src = profileData.profilePic;

    // Load data into edit mode
    document.getElementById("fullName").value = profileData.fullName;
    document.getElementById("username").value = profileData.username;
    document.getElementById("email").value = profileData.email;
    document.getElementById("bio").value = profileData.bio;
    document.getElementById("profile-pic").src = profileData.profilePic;
}

// Switch to Edit Mode
function editProfile() {
    document.getElementById("profile-display").style.display = "none";
    document.getElementById("profile-edit").style.display = "block";
}

// Cancel Edit and Switch to Display Mode
function cancelEdit() {
    document.getElementById("profile-edit").style.display = "none";
    document.getElementById("profile-display").style.display = "block";
    loadProfile(); // Reload original data
}

// Save Updated Profile and Display Changes
function saveProfile() {
    let profileData = {
        fullName: document.getElementById("fullName").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        bio: document.getElementById("bio").value,
        profilePic: document.getElementById("profile-pic").src
    };

    // Store updated profile data in local storage
    localStorage.setItem("userProfile", JSON.stringify(profileData));

    // Show success message
    alert("Profile updated successfully!");

    // Reload profile display with updated data
    loadProfile();

    // Switch back to display mode
    document.getElementById("profile-edit").style.display = "none";
    document.getElementById("profile-display").style.display = "block";
}

// Update profile picture with preview
function updateProfilePic(event) {
    const reader = new FileReader();
    
    reader.onload = function () {
        const imageUrl = reader.result;
        document.getElementById("profile-pic").src = imageUrl;
    };

    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// Load profile data on page load
window.onload = loadProfile;
