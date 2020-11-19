
const lightSearch = (input, elements, options = {}) => {
  input.addEventListener('input', () => {
    let result = 0;

    for (const element of elements) {
      if (element.innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
          element.style.display = options.display ? options.display : 'block';
          result++;
      } else {
          element.style.display = options.hide ? options.hide : 'none';
      }
    }
  });
}
