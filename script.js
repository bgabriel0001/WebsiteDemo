// script.js
// This script updates the text content of specific headers in the HTML document.


const headers = {
  "main-header": "Brennen Gabriel",
  "about": "About Me",
  "projects": "Programming Projects",
  "contact": "Contact"
};

for (const [id, text] of Object.entries(headers)) {
  const el = document.getElementById(id);
  if (el && el.tagName.startsWith('H')) {
    el.textContent = text;
  } else if (el) {
    const heading = el.querySelector('h2');
    if (heading) heading.textContent = text;
  }
}
