document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('#search');

  const results = document.querySelectorAll(".results");

  lightSearch(input, results);
});
