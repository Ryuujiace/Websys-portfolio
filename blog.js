// Blog data with image paths pointing to local folder
const blogData = [
    {
        title: "Introduction to JavaScript",
        content: "JavaScript is a powerful language used for web development...",
        image: "img/js.png" // Image inside /img folder
    },
    {
        title: "Bootstrap 5 Basics",
        content: "Bootstrap helps create responsive websites quickly.",
        image: "img/bs.png" // Image inside /img folder
    },
    {
        title: "Understanding HTML5: Building Blocks of the Web",
        content: "HTML5 is the latest version of HyperText Markup Language, the core language that structures web pages. It introduces semantic elements, multimedia support, and improved performance.",
        image: "img/html5.png"
    },
    {
        title: "CSS Flexbox and Grid: Modern Layout Techniques",
        content: "Flexbox and Grid are two powerful layout models in CSS that allow developers to create responsive and adaptive designs effortlessly.",
        image: "img/css-layout.png"
    },
    {
        title: "Getting Started with Git and GitHub",
        content: "Git and GitHub are essential tools for version control. Learn how to manage your projects and collaborate with others through effective branching, merging, and pull requests.",
        image: "img/git-github.png"
    },
    {
        title: "Introduction to REST APIs: Connecting Frontend and Backend",
        content: "REST APIs enable communication between the frontend and backend. Learn how to send requests, receive responses, and manage data effectively.",
        image: "img/api.png"
    },
    {
        title: "Mastering Bootstrap: Build Responsive Websites",
        content: "Bootstrap is a popular CSS framework that helps developers create modern, responsive designs quickly and efficiently.",
        image: "img/bootstrap5.png"
    },
    {
        title: "JavaScript DOM Manipulation: Interactivity Basics",
        content: "Learn how to manipulate the Document Object Model (DOM) using JavaScript to create interactive web experiences.",
        image: "img/dom.png"
    },
    {
        title: "Introduction to jQuery: Simplify JavaScript",
        content: "jQuery makes it easier to manipulate HTML, handle events, and perform AJAX requests. Discover how to enhance your web apps with jQuery.",
        image: "img/jquery.png"
    },
    {
        title: "Understanding PHP: Backend Essentials",
        content: "PHP is a server-side scripting language widely used to create dynamic web applications. Learn how it works with databases and processes user requests.",
        image: "img/php.png"
    },
    {
        title: "Creating Mobile-Responsive Designs",
        content: "Responsive web design ensures your website looks great on any device. Learn how to use media queries and flexible layouts to achieve this.",
        image: "img/responsive.png"
    },
    {
        title: "Exploring Node.js: JavaScript on the Server",
        content: "Node.js is a powerful JavaScript runtime that allows you to build scalable, fast server-side applications. Discover how it works and how to get started.",
        image: "img/nodejs.png"
    }
];

// Function to load blog articles dynamically
function loadBlog() {
    const blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = ""; // Clear previous content

    blogData.forEach((blog) => {
        // Create a blog card for each article
        const blogCard = `
            <div class="col-md-6 mb-4">
                <div class="card blog-card">
                    <img src="${blog.image}" class="card-img-top" alt="${blog.title}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${blog.title}</h5>
                        <p class="card-text">${blog.content}</p>
                    </div>
                </div>
            </div>
        `;

        // Add blog card to container
        blogContainer.innerHTML += blogCard;
    });
}

// Load blogs when the blog section is displayed
window.onload = () => {
    loadBlog(); // Display blog when page loads
};
