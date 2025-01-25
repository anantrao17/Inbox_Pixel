  function typeMessage(element, message, delay, callback) {
    let index = 0;
  
    function typeNextLetter() {
      if (index < message.length) {
        element.innerHTML += message[index];
        index++;
        setTimeout(typeNextLetter, delay);
      } else if (callback) {
        setTimeout(callback, 500);
      }
    }
  
    typeNextLetter();
  }
  
  function changeMessage() {
    const messageElement = document.getElementById("dynamicMessage");
    typeMessage(messageElement, "Welcome To Page", 100, () => {
      messageElement.classList.add("hidden");
  
      setTimeout(() => {
        messageElement.innerHTML = "All-in-one solution <span class='nowrap'>Unlimited design & development</span>";
        messageElement.classList.remove("hidden");
      }, 1000);
    });
  }
  window.onload = changeMessage;

  function createCircle() {
    const animatedBackground = document.querySelector(".animated-background");
    const circle = document.createElement("div");
    circle.classList.add("circle");
  
    // Random size and position for the circle
    const size = Math.random() * 100 + 50; // Circle size between 50px and 150px
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
  
    // Apply size and position
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;
  
    // Add the circle to the background container
    animatedBackground.appendChild(circle);
  
    // Remove the circle after animation to avoid too many elements
    setTimeout(() => {
      circle.remove();
    }, 4000); // Match this duration with the animation duration
  }
  
  // Continuously create circles every 500 ms
  setInterval(createCircle, 500);

  function toggleTheme() {
    const body = document.body;
    const toggleButton = document.querySelector(".toggle-theme");
  
    if (body.style.backgroundColor === "white") {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      toggleButton.innerHTML = "🌞";
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      toggleButton.innerHTML = "🌙";
    }
  } 
  
  
  