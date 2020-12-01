document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('#search');

  const results = document.querySelectorAll(".results");

  const parent = document.querySelector('.results-container');

  const options = {
    parent : parent,
    noresultsmsg : true,
    msgtag : 'div',
    msgtext : 'Nothing like that here ....'
  }

  lightSearch(input, results, options);
});
