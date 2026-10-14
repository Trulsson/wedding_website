/* Paste full https:// links between the quotation marks. */
const LINKS = {
  rsvpForm: "https://forms.gle/goHzxD8NHKf1dmS1A",
  ceremonyMap: "https://maps.app.goo.gl/52WsAX1vNAo1a9n56",
  receptionMap: "https://maps.app.goo.gl/Hk5MU4L62tJxe55m6"
};

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".configurable-link").forEach((link) => {
  const value = LINKS[link.dataset.config];
  if (value) {
    link.href = value;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return;
  }
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.alert(`Template setup: add the ${link.dataset.config} URL near the top of script.js.`);
  });
});
