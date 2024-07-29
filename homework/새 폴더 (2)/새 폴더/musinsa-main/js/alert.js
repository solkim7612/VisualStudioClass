document.addEventListener("DOMContentLoaded", function () {
  const notificationLink = document.getElementById("notification");
  const overlay = document.getElementById("overlay");
  const notificationPopup = document.getElementById("notification-popup");
  const closePopupButton = document.getElementById("close-popup");

  if (notificationLink) {
    notificationLink.addEventListener("click", function (event) {
      event.preventDefault();
      overlay.style.display = "block";
      notificationPopup.style.display = "block";
    });
  }

  if (closePopupButton) {
    closePopupButton.addEventListener("click", function () {
      overlay.style.display = "none";
      notificationPopup.style.display = "none";
    });
  }
});
