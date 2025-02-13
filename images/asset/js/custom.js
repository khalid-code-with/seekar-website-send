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


