// Portfolio site JS
console.log("Portfolio site ready!");

// Highlight nav item on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});
// Wave animation on scroll into Skills section
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.wave-card').forEach(card => {
        card.classList.add('animate');
      });
    }
  });
}, {
  threshold: 0.5
});

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
  observer.observe(skillsSection);
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    const name = form.querySelector('input[name="Name"]');
    const email = form.querySelector('input[name="Email"]');
    const message = form.querySelector('textarea[name="Message"]');

    // Basic validation (optional, can be enhanced)
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Please fill out all fields before submitting.");
      e.preventDefault();
      return;
    }

    // Optional: Show a custom "sending" message
    const sendButton = form.querySelector("button");
    sendButton.disabled = true;
    sendButton.innerText = "Sending...";

    // Allow formsubmit.co to continue submission
    setTimeout(() => {
      sendButton.innerText = "Send Message";
      sendButton.disabled = false;
    }, 3000);
  });
});

