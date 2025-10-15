document.addEventListener("DOMContentLoaded", function () {
  function showPopup(message) {
    const popup = document.createElement("div");
    popup.className = "custom-popup";
    popup.textContent = message;
    document.body.appendChild(popup);

    // Trigger animation
    setTimeout(() => popup.classList.add("show"), 100);

    // Remove after 3 seconds
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => popup.remove(), 500);
    }, 3000);
  }

  const appointmentForm = document.querySelector("#appointmentForm");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showPopup("✅ Your appointment has been successfully booked!");
      appointmentForm.reset();
    });
  }

  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showPopup("📬 Your message has been sent! We'll get back to you soon.");
      contactForm.reset();
    });
  }
});