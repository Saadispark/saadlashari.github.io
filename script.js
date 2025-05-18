const text = ["Tech Visionary", "Student", "Trader", "CSR"];
let count = 0, index = 0, current = '', letter = '';

(function type() {
  if (count === text.length) count = 0;
  current = text[count];
  letter = current.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === current.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
})();
