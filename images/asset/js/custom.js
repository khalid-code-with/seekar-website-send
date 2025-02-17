window.addEventListener("scroll", function () {
    let nav = document.getElementsByClassName("menu_bar")[0]; 
    let scrollTop = window.pageYOffset;

    if (scrollTop >=10) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

    // this show the navbar always on top dont need to refresh
    document.addEventListener("click", function () {
      document.getElementById("navbarSupportedContent").classList.add("show");
    });


// animation with window scrolling
    document.addEventListener("DOMContentLoaded", function () {
        AOS.init({
            duration: 1000, 
            once: true,  
            easing: "ease-out"
        });
    });


//   close vidwo on cros open video 
    function openVideo() {
        document.getElementById("video-popup").style.display = "flex";
      }
      function closeVideo() {
        document.getElementById("video-popup").style.display = "none";
      }
      

    // <script> 
    // this functionality close tha navbar for small devices at  click smoothly redirct on page
    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll(".nav-link");
        const navbarCollapse = document.querySelector(".navbar-collapse");
    
        navLinks.forEach(link => {
          link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
              event.preventDefault();
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
    
            // Navbar close on click
            // Only collapse in small screens
            if (window.innerWidth <992) { 
              const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
              });
              bsCollapse.hide();
            }
          });
        });
      });


  // provide the circule on hover as gellery card
    document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".gallery-card");

    cards.forEach((card) => {
        const circle = document.createElement("div");
        circle.classList.add("hover-circle");
        card.appendChild(circle);

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            circle.style.transform = `translate(${x - 50}px, ${y - 50}px) scale(1)`;
            circle.style.opacity = "1";
        });

        card.addEventListener("mouseleave", () => {
            circle.style.transform = "scale(0)";
            circle.style.opacity = "0";
        });
    });
});



 // arrow option going user on top when the user click on arrow
let scrollTopbtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    let scrollValue = window.scrollY; //check how much scrolling page

    if (scrollValue > 300) { 
        scrollTopbtn.style.opacity = "1"; 
        scrollTopbtn.style.visibility = "visible";
    } else {
        scrollTopbtn.style.opacity = "0";  
        scrollTopbtn.style.visibility = "hidden";
    }
};
//when user click on the btn user going on top
scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// Fast loading of all images on our website.
window.addEventListener("load", () => {
  document.querySelectorAll("img").forEach(img => {
    new Image().src = img.src;
  });
});
