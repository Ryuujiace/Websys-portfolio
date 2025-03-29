// Load profile data from local storage or set defaults
function loadProfile() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let profileSection = document.getElementById("profile");

    // Hide profile if the user is not logged in
    if (!currentUser) {
        profileSection.style.display = "none";
        return;
    }

    // Show profile section if user is logged in
    profileSection.style.display = "block";

    let profileData = JSON.parse(localStorage.getItem("userProfile")) || {
        fullName: "",
        username: "",
        email: "example@gmail.com",
        bio: "Web Developer",
        age: "18",
        birthdate: "January 1, 2002",
        education: "College Level",
        contact: "09*********",
        profilePic: "https://via.placeholder.com/150"
    };

    // Load data into display mode
    document.getElementById("display-fullName").innerText = profileData.fullName;
    document.getElementById("display-username").innerText = profileData.username;
    document.getElementById("display-email").innerText = profileData.email;
    document.getElementById("display-bio").innerText = profileData.bio;
    document.getElementById("display-age").innerText = profileData.age;
    document.getElementById("display-birthdate").innerText = profileData.birthdate;
    document.getElementById("display-education").innerText = profileData.education;
    document.getElementById("display-contact").innerText = profileData.contact;
    document.getElementById("profile-pic-display").src = profileData.profilePic;

    // Load data into edit mode
    document.getElementById("fullName").value = profileData.fullName;
    document.getElementById("username").value = profileData.username;
    document.getElementById("email").value = profileData.email;
    document.getElementById("bio").value = profileData.bio;
    document.getElementById("age").value = profileData.age;
    document.getElementById("birthdate").value = profileData.birthdate;
    document.getElementById("education").value = profileData.education;
    document.getElementById("contact").value = profileData.contact;
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
        age: document.getElementById("age").value,
        birthdate: document.getElementById("birthdate").value,
        education: document.getElementById("education").value,
        contact: document.getElementById("contact").value,
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
        document.getElementById("profile-pic-display").src = imageUrl; // Update displayed image
    };

    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// Load profile data on page load
window.onload = loadProfile;
