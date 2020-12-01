document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('#search');

  const results = document.querySelectorAll(".results");

  const parent = document.querySelector('.results-container');

  parent.style.display = 'none';

  const options = {
    parent : parent,
    displayontype : 3,
    displayparent: 'flex',
    hideparent: 'none',
    noresultsmsg : true,
    noresultsmsg : 3,
    msgtag : 'div',
    msgtext : 'Nothing like that here ....'
  }

  lightSearch(input, results, options);
});
