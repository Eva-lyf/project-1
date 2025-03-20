// const bg = document.getElementById("bg");
  
//     window.addEventListener("scroll", () => {
//       let scrollPosition = window.scrollY; 
//       let maxScroll = document.documentElement.scrollHeight - window.innerHeight; 
//       let scaleFactor = 4; 
//       let newScale = scaleFactor - (scrollPosition / maxScroll * (scaleFactor - 1));
  
      
//       newScale = Math.max(1, Math.min(4, newScale));
  
      
//       bg.style.transform = `scale(${newScale})`;
//     });

const bg = document.getElementById("bg");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY; 
  let maxScroll = document.documentElement.scrollHeight - window.innerHeight; 
  let scaleFactor = 4; // Maximum zoom level

  // Reverse the scaling logic to start from 1 and zoom in
  let newScale = 1 + (scrollPosition / maxScroll * (scaleFactor - 1));

  // Ensure the scale stays within bounds
  newScale = Math.max(1, Math.min(scaleFactor, newScale));

  // Apply the scaling transformation
  bg.style.transform = `scale(${newScale})`;
});

