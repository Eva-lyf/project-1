const bg = document.getElementById("bg");
  
    window.addEventListener("scroll", () => {
      let scrollPosition = window.scrollY; 
      let maxScroll = document.documentElement.scrollHeight - window.innerHeight; 
      let scaleFactor = 4; 
      let newScale = scaleFactor - (scrollPosition / maxScroll * (scaleFactor - 1));
  
      
      newScale = Math.max(1, Math.min(4, newScale));
  
      
      bg.style.transform = `scale(${newScale})`;
    });


