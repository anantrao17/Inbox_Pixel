function toggleMenu() {
  const menu = document.querySelector('.nav-links-container');
  menu.classList.toggle('active');
}
document.getElementById('backToTop').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
function navigateToContact() {
  window.location.href = "contact.html";
}

// Get the Back to Top button
const backToTop = document.getElementById('backToTop');

// Add scroll event listener
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});


// Close the menu when clicking outside
document.addEventListener('click', function (event) {
  const menu = document.querySelector('.nav-links-container');
  const hamburgerButton = document.querySelector('.hamburger');
  const menuContainer = document.querySelector('.header');

  // Check if the clicked area is outside of the menu or the hamburger button
  if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
    menu.classList.remove('active'); // Close the menu
  }
});
/////////////////
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if user is scrolling down
    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden'); // Add hidden class to hide the header
    } else {
        header.classList.remove('hidden'); // Remove hidden class to show the header
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll
});


function typeMessage(element, message, delay, callback) {
  let index = 0;

  function typeNextLetter() {
    if (index < message.length) {
      element.innerHTML += message[index];
      index++;
      setTimeout(typeNextLetter, delay);
    } else if (callback) {
      setTimeout(callback, 1000);
    }
  }

  typeNextLetter();
}

function changeMessage() {
  const messageElement = document.getElementById("dynamicMessage");
  const messages = [
    "Welcome to Inbox Pixel",
    "Crafting Exceptional Digital Experiences",
    "Your Partner in Innovation",
    "Building Solutions That Inspire"
  ];

  let currentMessageIndex = 0;

  function showNextMessage() {
    messageElement.innerHTML = ""; // Clear the current message
    typeMessage(messageElement, messages[currentMessageIndex], 100, () => {
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
      setTimeout(showNextMessage, 1000); // Wait before showing the next message
    });
  }

  showNextMessage();
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");

  // Toggle icon based on theme
  const toggleButton = document.querySelector(".toggle-theme");
  toggleButton.innerHTML = body.classList.contains("dark-theme") ? "🌞" : "🌙";
}

function createCircle() {
  // Select both `.animated-background` and `.animated-background-contact`
  const animatedBackground = document.querySelector(".animated-background, .animated-background-contact");

  if (animatedBackground) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    // Random size and position for the circle
    const size = Math.random() * 100 + 50; // Circle size between 50px and 150px
    const posX = Math.random() * animatedBackground.clientWidth; // Constrain to background width
    const posY = Math.random() * animatedBackground.clientHeight; // Constrain to background height

    // Apply size and position
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;

    // Add the circle to the background container
    animatedBackground.appendChild(circle);

    // Remove the circle after animation to avoid clutter
    setTimeout(() => {
      circle.remove();
    }, 4000); // Matches the fade-circle animation duration
  }
}

function initializeAnimations() {
  // Run animation for both `.animated-background` and `.animated-background-contact`
  const animatedBackgrounds = document.querySelectorAll(".animated-background, .animated-background-contact");

  // Ensure animations are initialized for each background
  animatedBackgrounds.forEach((animatedBackground) => {
    setInterval(() => {
      const circle = document.createElement("div");
      circle.classList.add("circle");

      // Random size and position for the circle
      const size = Math.random() * 100 + 50;
      const posX = Math.random() * animatedBackground.clientWidth;
      const posY = Math.random() * animatedBackground.clientHeight;

      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${posX}px`;
      circle.style.top = `${posY}px`;

      animatedBackground.appendChild(circle);

      setTimeout(() => circle.remove(), 4000);
    }, 1500); // Creates a new circle every 1.5 seconds
  });
}

// Use `addEventListener` to attach multiple load handlers
window.addEventListener("load", changeMessage);
window.addEventListener("load", initializeAnimations);

// Function to create circle at the clicked position
function createCircleAtClick(event) {
  const animatedBackground = document.querySelector('.animated-background, .animated-background-contact');
  
  // Create a new circle element
  const circle = document.createElement('div');
  circle.classList.add('circle');
  
  // Calculate size and position
  const size = Math.random() * 100 + 50; // Random size between 50px and 150px
  const posX = event.clientX - size / 2; // Get the X position, centering the circle
  const posY = event.clientY - size / 2; // Get the Y position, centering the circle

  // Apply the size and position to the circle
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${posX}px`;
  circle.style.top = `${posY}px`;

  // Add the circle to the background container
  animatedBackground.appendChild(circle);

  // Remove the circle after the animation is complete to avoid clutter
  setTimeout(() => {
      circle.remove();
  }, 3000); // Duration should match the animation time (3s)
}

// Add event listener for click to create a circle
document.addEventListener('click', createCircleAtClick);



///Project Data

// Project Data
const projects = [
  {
    title: "InboxPixel_1",
    description: "InboxPixel1, a design and development agency, transforms ideas into stunning digital experiences.The talented team creates sleek websites and powerful apps with meticulous attention to detail. Known for capturing the essence of brands, has earned a reputation for quality and creativity. Today, they continue to innovate and push the boundaries of design and development.",
    tags: ["HTML", "CSS", "JavaScript"],
    mainImage: "pngtree-building-website-project-as-programming-homepage-process-tiny-person-vector-illustration-png-image_4658684.png",
    galleryImages: ["pngtree-building-website-project-as-programming-homepage-process-tiny-person-vector-illustration-png-image_4658684.png", "pngtree-building-website-project-as-programming-homepage-process-tiny-person-vector-illustration-png-image_4658684.png", "pngtree-building-website-project-as-programming-homepage-process-tiny-person-vector-illustration-png-image_4658684.png"],
    viewLink: "https://example.com/project1",
  },
  {
    title: "InboxPixel_2",
    description: "InboxPixel2, a design and development agency, transforms ideas into stunning digital experiences.The talented team creates sleek websites and powerful apps with meticulous attention to detail. Known for capturing the essence of brands, has earned a reputation for quality and creativity. Today, they continue to innovate and push the boundaries of design and development.",
    tags: ["React", "Node.js", "MongoDB"],
    mainImage: "logo with text1.svg",
    galleryImages: ["logo with text2.svg", "logo with text1.svg", "project2-3.jpg"],
    viewLink: "https://example.com/project2",
  },
  {
    title: "InboxPixel_3",
    description: "InboxPixel3, a design and development agency, transforms ideas into stunning digital experiences.The talented team creates sleek websites and powerful apps with meticulous attention to detail. Known for capturing the essence of brands, has earned a reputation for quality and creativity. Today, they continue to innovate and push the boundaries of design and development.",
    tags: ["Python", "Django", "PostgreSQL"],
    mainImage: "logo with text2.svg",
    galleryImages: ["Inbox Logo.svg", "project3-2.jpg", "project3-3.jpg"],
    viewLink: "https://example.com/project3",
  },
];

let currentProjectIndex = 0;

// DOM Elements
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectTags = document.getElementById("project-tags");
const mainImage = document.getElementById("main-image");
const galleryImages = document.querySelectorAll(".gallery-images img");
const viewProjectBtn = document.getElementById("view-project-btn");
const prevProjectBtn = document.getElementById("prev-project-btn");
const nextProjectBtn = document.getElementById("next-project-btn");

// Function to Update the Section Content
function updateProject(index) {
  const project = projects[index];

  // Update Title
  projectTitle.textContent = project.title;

  // Update Description
  projectDescription.textContent = project.description;

  // Update Tags
  projectTags.innerHTML = ""; // Clear previous tags
  project.tags.forEach((tag) => {
    const tagElement = document.createElement("div");
    tagElement.className = "tag";
    tagElement.textContent = tag;
    projectTags.appendChild(tagElement);
  });

  // Update Main Image
  mainImage.src = project.mainImage;
  mainImage.alt = project.title;

  // Update Gallery Images
  galleryImages.forEach((img, i) => {
    img.src = project.galleryImages[i];
    img.alt = `Gallery Image ${i + 1}`;
  });

  // Update View Project Button Link
  viewProjectBtn.onclick = () => {
    window.open(project.viewLink, "_blank");
  };
}

// Event Listeners for Navigation Buttons
prevProjectBtn.addEventListener("click", () => {
  currentProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  updateProject(currentProjectIndex);
});

nextProjectBtn.addEventListener("click", () => {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  updateProject(currentProjectIndex);
});

// Initialize the First Project
updateProject(currentProjectIndex);