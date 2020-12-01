document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('#search');

  const results = document.querySelectorAll(".results");

  const parent = document.querySelector('.results-container');

  parent.style.display = 'none';

  const writeInput = (e) => {
    input.value = e.target.innerHTML;
    e.target.parentElement.style.display = 'none';
  }

  const options = {
    parent : parent,
    noresultsmsg : true,
    onclick : writeInput,
    displayontype : 3,
    displayparent: 'flex',
    hideparent: 'none',
    msgtag : 'div',
    msgtext : 'Nothing like that here ....'
  }

  lightSearch(input, results, options);
});
