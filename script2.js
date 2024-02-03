 function showMessage(response) {
    if (response === "Nej") {
      const NejButton = document.getElementById("Nej-button");
      const container = document.querySelector(".container");
      const maxWidth = window.innerWidth - NejButton.offsetWidth;
      const maxHeight = window.innerHeight - NejButton.offsetHeight;

      // Set button position to absolute
      NejButton.style.position = "absolute";
  
      // Change image source to "gun.gif"
      document.getElementsByClassName("image")[0].src = "Esisort.jpg";
  
      // Generate random coordinates within the visible container
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
  
      // Apply new coordinates to the button
      NejButton.style.left = randomX + "px";
      NejButton.style.top = randomY + "px";
  
      // Update text content and hide name message
      document.getElementById("question").textContent =
        "Nej-knappen er kun til pynt den virker ikke😉";
      document.getElementById("name").style.display = "none";
    }


    if (response === "Ja") {
      // Remove name message and no button
      document.getElementById("name").remove();
      document.getElementById("Nej-button").remove();
  
      // Update text content, show message, and change image source to "Esi.jpg"
      const yesMessage = document.getElementById("question");
      yesMessage.textContent = "Så ses vi bare på d.14 babygirl😘😘";
      yesMessage.style.display = "block";
      yesMessage.style.fontStyle = "normal";
      document.getElementsByClassName("image")[0].src = "Esi.jpg";

      // Function to add GIFs to the page with specific positions
function addGifWithPosition(src, alt, x, y) {
  const gif = document.createElement("img");
  gif.src = src;
  gif.alt = alt;
  gif.style.position = "absolute";
  gif.style.width = "250px"; // Example size, adjust as needed
  gif.style.left = `${x}px`; // Set specific x-coordinate
  gif.style.top = `${y}px`; // Set specific y-coordinate
  document.body.appendChild(gif);
}

// Array of positions for each GIF
const gifPositions = [
  { src: "dance-move-black.gif", alt: "Dance Move Black", x: 100, y: 100 },
  { src: "happy-guy-dancing.gif", alt: "Happy Guy Dancing", x: window.innerWidth - 300, y: 100 },
  { src: "man-dancing.gif", alt: "Man Dancing", x: 100, y: window.innerHeight - 300 },
  { src: "dancing-black.gif", alt: "Dancing Black", x: window.innerWidth - 300, y: window.innerHeight - 300 }
];

// Add each GIF to the page with specific positions
gifPositions.forEach(({ src, alt, x, y }) => {
  addGifWithPosition(src, alt, x, y);
});

      // Remove yes button
      document.getElementById("JaButton").remove();
}
    }
