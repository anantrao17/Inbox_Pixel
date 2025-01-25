function toggleMenu() {
    const menu = document.querySelector('.nav-links-container');
    menu.classList.toggle('active');
  }
  
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
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
  
    // Toggle icon based on theme
    const toggleButton = document.querySelector(".toggle-theme");
    toggleButton.innerHTML = body.classList.contains("dark-theme") ? "🌙" : "🌞";
  }

// Get references to elements
const form = document.querySelector('form');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const submitButton = document.getElementById('submit-btn');

// Function to handle selection of Yes or No
function handleChoiceSelection(event) {
    // Remove the 'selected' class from both buttons
    yesButton.classList.remove('selected');
    noButton.classList.remove('selected');
    
    // Add the 'selected' class to the clicked button
    event.target.classList.add('selected');
}

// Attach event listeners to both buttons
yesButton.addEventListener('click', handleChoiceSelection);
noButton.addEventListener('click', handleChoiceSelection);

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the values from the form
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const company = document.getElementById('company');
    const businessScope = document.getElementById('business-scope');

    // Clear any previous error messages
    const inputFields = [name, email, company, businessScope];
    inputFields.forEach(field => {
        field.classList.remove('error'); // Remove error class
        const errorMessage = field.nextElementSibling;
        if (errorMessage) {
            errorMessage.textContent = ''; // Clear error message
        }
    });

    let isValid = true;

    // Check if any field is empty
    inputFields.forEach(field => {
        if (!field.value) {
            isValid = false;
            field.classList.add('error'); // Add error class to the field
            let errorMessage = field.nextElementSibling;

            if (!errorMessage) {
                errorMessage = document.createElement('span');
                field.parentNode.appendChild(errorMessage);
            }
            errorMessage.textContent = 'Please fill the field'; // Show error message
        }
    });

    // If all fields are filled, proceed with email sending
    if (isValid) {
        // Custom message to send in email
        const formData = {
            name: name.value,
            email: email.value,
            company: company.value,
            businessScope: businessScope.value,
            message: 'Hello, we will call on 10pm' // Custom message
        };

        emailjs.send('service_rr3zbcf', 'template_m9ygtli', formData) // Replace 'service_ID' and 'template_ID' with your actual service and template IDs
            .then(function(response) {
                console.log('Success:', response);
                alert('Your form has been submitted successfully! You will receive a call at 10pm.');
                form.reset(); // Reset the form
                submitButton.textContent = 'Book my call'; // Reset button text
            })
            .catch(function(error) {
                console.log('Error:', error);
                alert('There was an issue with your submission. Please try again later.');
            });
    }
});




