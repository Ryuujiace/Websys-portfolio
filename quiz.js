// Array of quiz questions with options and the correct answer index
const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        answer: 0 // Correct answer is the first option (index 0)
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets"],
        answer: 2 // Correct answer is the third option (index 2)
    },
    {
        question: "What does JS stand for?",
        options: ["JavaSyntax", "JavaScript", "JustScript"],
        answer: 1 // Correct answer is the second option (index 1)
    }
];

// Variables to track current question, score, and timer
let currentQuestion = 0; // Keeps track of which question is displayed
let score = 0; // Stores the number of correct answers
let timer; // Stores the reference for the countdown timer
let timeLeft = 10; // Time in seconds for each question

// Start the quiz when the page loads
window.onload = startQuiz;

// Function to initialize the quiz
function startQuiz() {
    loadQuestion(); // Load the first question
}

// Function to load a question
function loadQuestion() {
    // Check if we have reached the end of the quiz
    if (currentQuestion >= quizData.length) {
        document.getElementById("quiz-container").innerHTML = `
            <h3>Quiz Completed!</h3>
            <p>Your Score: ${score} / ${quizData.length}</p>
        `;
        // Store the score in local storage
        localStorage.setItem("quizScore", score);
        return; // Stop further execution
    }

    // Reset timer for the new question
    clearInterval(timer); // Clear any previous timer
    timeLeft = 10; // Reset time for the new question
    document.getElementById("timer").innerHTML = `Time Left: ${timeLeft}s`;

    // Start countdown timer
    timer = setInterval(() => {
        timeLeft--; // Reduce time by 1 second
        document.getElementById("timer").innerHTML = `Time Left: ${timeLeft}s`;
        
        // If time reaches zero, move to the next question
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion(); // Automatically load next question
        }
    }, 1000); // Runs every 1 second

    // Get the current question object
    let questionObj = quizData[currentQuestion];

    // Display the question in the HTML
    document.getElementById("question").innerText = questionObj.question;

    // Get the options container and clear previous options
    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    // Loop through all answer choices and create buttons for each
    questionObj.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.innerText = option; // Set button text
        button.classList.add("btn", "btn-outline-primary", "m-2"); // Add Bootstrap styling
        button.onclick = () => checkAnswer(index); // Set click event to check answer
        optionsContainer.appendChild(button); // Add button to the options container
    });
}

// Function to check the user's selected answer
function checkAnswer(selected) {
    let correct = quizData[currentQuestion].answer; // Get the correct answer index

    // If the selected answer is correct, increase the score
    if (selected === correct) {
        score++;
    }

    // Move to the next question
    nextQuestion();
}

// Function to move to the next question
function nextQuestion() {
    currentQuestion++; // Increment question index
    loadQuestion(); // Load the next question
}
