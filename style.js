window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("mainContent");

  // Add slide-out animation
  loader.classList.add("slide-out");

  // Wait for animation to finish before hiding loader and showing content
  setTimeout(() => {
    loader.style.display = "none";
    mainContent.style.display = "block";
  }, 3000); // match CSS transition duration
});

    
    
    document.addEventListener("DOMContentLoaded", () => {
      const content = document.getElementById("smooth-content");
      let scrollY = 0;
      let targetY = 0;
      const speed = 0.07;

      function setBodyHeight() {
        document.body.style.height = content.scrollHeight + "px";
      }

      const resizeObserver = new ResizeObserver(setBodyHeight);
      resizeObserver.observe(content);

      function smoothScroll() {
        targetY = window.scrollY;
        scrollY += (targetY - scrollY) * speed;
        content.style.transform = `translateY(${-scrollY}px)`;
        requestAnimationFrame(smoothScroll);
      }

      window.addEventListener("resize", setBodyHeight);
      setBodyHeight();
      smoothScroll();
    });