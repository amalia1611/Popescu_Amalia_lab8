document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("resurse");
    const content = document.getElementById("poze");
  
   
    let slideshowCreated = false;
  
    section.addEventListener("dblclick", () => {
      if (slideshowCreated) return; 
      const images = Array.from(content.querySelectorAll("img"));
      content.innerHTML = ""; 
      
      const slideshow = document.createElement("div");
      slideshow.className = "slideshow";
  
      
      images.forEach((img, index) => {
        const newImg = document.createElement("img");
        newImg.src = img.src;
        newImg.alt = img.alt;
        if (index === 0) {
          newImg.classList.add("active");
        }
        slideshow.appendChild(newImg);
      });
  
      content.appendChild(slideshow);
  
      
      let currentIndex = 0;
      slideshowCreated = true; 
      setInterval(() => {
        const slides = slideshow.querySelectorAll("img");
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
      }, 3000); 
    });
  });