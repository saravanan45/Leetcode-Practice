const getPosition = (tag) => {
  const tagLevel = tag.split("")[1];
  const positionValue = (tagLevel - 1) * 20;
  return positionValue;
};

document.addEventListener("DOMContentLoaded", () => {
  createSideNavbar();
  triggerIntersectionObserver();
});

const navbarItems = document.querySelector(".navbar-container");

navbarItems.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        const targetElement = document.getElementById(event.target.dataset.target);
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
})

function triggerIntersectionObserver() {
  const headingTags = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const navbarItems = document.querySelector(".navbar-container");
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px 0px -70% 0px",
    threshold: 0.1,
  });

  let currentActiveElement = null;
  function callback(entries) {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry) => {
        const id = entry.target.id;

        const filteredElement = navbarItems.querySelector(
          `[data-target="${id}"]`,
        );

        if (currentActiveElement) {
          currentActiveElement.classList.remove("active-navbar");
        }

        if (filteredElement) {
          filteredElement.classList.add("active-navbar");
          currentActiveElement = filteredElement;
        }
      });
  }

  headingTags.forEach((heading) => {
    observer.observe(heading);
  });
}

function createSideNavbar() {
  const articleTag = document.querySelector("article");
  const headerTags = articleTag.querySelectorAll("h1, h2, h3, h4, h5, h6");

  const navbar = document.getElementById("nav-list");
  for (let i = 0; i < headerTags.length; i++) {
    const newElement = document.createElement("a");
    const textContent = headerTags[i].textContent;
    newElement.textContent = textContent;
    newElement.href = `#header-${i}`;
    headerTags[i].id = `header-${i}`;
    newElement.dataset.target = `header-${i}`;
    newElement.style.position = "relative";
    newElement.style.left = `${getPosition(headerTags[i].tagName.toLowerCase())}px`;
    navbar.appendChild(newElement);
  }
}
