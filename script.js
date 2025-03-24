// Example JavaScript for additional interactivity
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-secondary");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Details feature is coming soon!");
        });
    });
});
