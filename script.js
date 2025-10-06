// Initialize AOS for scroll animations
AOS.init({
  duration: 1000,
  once: true
});

// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

btn && btn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
// Modern Navbar Animation & Mobile Menu Interaction

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // --- Mobile Menu Animation ---
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("animate-slideDown");
    } else {
      mobileMenu.classList.add("animate-slideUp");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("animate-slideUp");
      }, 400); // matches animation duration
    }
  });

  // --- Scroll Effect for Navbar ---
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background =
        "linear-gradient(to right, rgba(29, 28, 28, 0.9), rgba(179, 110, 37, 0.9))";
      header.style.backdropFilter = "blur(10px)";
      header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
      header.style.transition = "all 0.4s ease";
    } else {
      header.style.background =
        "linear-gradient(to right, #4B2E05, #8B5A2B)";
      header.style.backdropFilter = "none";
      header.style.boxShadow = "none";
    }
  });
});
// 🌈 Modern Navbar with Dynamic Background + Animated Menu
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  let hue = 30; // start tone (wood brown)
  let direction = 1; // for smooth back & forth color movement

  // === Dynamic background color animation ===
  function animateBackground() {
    hue += direction * 0.1;
    if (hue > 60 || hue < 20) direction *= -1; // bounce effect between golden & brown tones
    header.style.background = `linear-gradient(90deg, hsl(${hue}, 60%, 25%), hsl(${hue + 20}, 70%, 40%))`;
    requestAnimationFrame(animateBackground);
  }
  animateBackground();

  // === Scroll effect ===
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
      header.style.backdropFilter = "blur(10px)";
      header.style.opacity = "0.95";
      header.style.transition = "all 0.4s ease";
    } else {
      header.style.boxShadow = "none";
      header.style.backdropFilter = "none";
      header.style.opacity = "1";
    }
  });

  // === Mobile menu animation ===
  let isOpen = false;
  menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.style.opacity = "0";
      mobileMenu.style.transform = "translateY(-10px)";
      mobileMenu.style.transition = "all 0.4s ease";

      setTimeout(() => {
        mobileMenu.style.opacity = "1";
        mobileMenu.style.transform = "translateY(0)";
      }, 10);
    } else {
      mobileMenu.style.opacity = "0";
      mobileMenu.style.transform = "translateY(-10px)";
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 400);
    }
  });
});

// 🌈 Smooth Animated Background Effect for Navbar
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  let hue = 30;          // start hue (brown tone)
  let direction = 1;     // controls gradient motion

  function animateNavbar() {
    hue += direction * 0.1;
    if (hue > 60 || hue < 20) direction *= -1; // bounce between wood–amber range

    header.style.background = `
      linear-gradient(90deg,
        hsl(${hue}, 60%, 25%),
        hsl(${hue + 20}, 70%, 40%)
      )
    `;
    header.style.transition = "background 0.5s ease";

    requestAnimationFrame(animateNavbar);
  }

  animateNavbar();

  // Add scroll visual enhancement
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
      header.style.opacity = "0.95";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.boxShadow = "none";
      header.style.opacity = "1";
      header.style.backdropFilter = "none";
    }
  });
});


// 🌿 Smooth Scroll-Based Animation for "hubs" Section

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("#hubs [data-aos], #hubs img, #hubs h3, #hubs h4, #hubs p");

  // Set initial state
  animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease-out";
  });

  // Intersection Observer to trigger animation when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));

  // 🌸 Optional: Smooth zoom for images when hovered
  const images = document.querySelectorAll("#hubs img");
  images.forEach(img => {
    img.style.transition = "transform 0.6s ease, box-shadow 0.6s ease";
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
    });
  });

  // 🌺 Gentle fade-in for the entire section
  const hubsSection = document.querySelector("#hubs");
  hubsSection.style.opacity = "0";
  hubsSection.style.transition = "opacity 1.5s ease";
  setTimeout(() => {
    hubsSection.style.opacity = "1";
  }, 300);
});

 // JavaScript for modern scroll animation and highlighting for About Section

document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#about');
  const aboutElements = aboutSection.querySelectorAll('h3, p');

  // Add initial hidden style
  aboutElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease-out';
  });

  // Function to check if section is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
  }

  // Scroll event to animate elements
  window.addEventListener('scroll', () => {
    if (isInViewport(aboutSection)) {
      aboutElements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }, index * 200); // stagger animation by 200ms
      });

      // Add highlight effect
      aboutSection.style.transition = 'background-color 1s ease';
      aboutSection.style.backgroundColor = 'rgba(16, 185, 129, 0.05)'; // subtle emerald highlight
    }
  });

  // Trigger animation if already in viewport on load
  if (isInViewport(aboutSection)) {
    aboutElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, index * 200);
    });
    aboutSection.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
  }
});
// JavaScript to change font style and color for About Section heading
document.addEventListener('DOMContentLoaded', () => {
  const aboutHeading = document.querySelector('#about h3');

  // Apply new font style and color
  aboutHeading.style.fontFamily = "'Poppins', sans-serif"; // modern font
  aboutHeading.style.color = "#10b981"; // emerald green
  aboutHeading.style.fontWeight = "700"; // bold
  aboutHeading.style.textTransform = "uppercase"; // optional uppercase
  aboutHeading.style.letterSpacing = "1.5px"; // spacing for style
});
