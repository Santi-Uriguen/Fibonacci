let fibonacci = [];
let input = document.getElementById("input");
let unoInput = document.getElementById("uno");
let dosInput = document.getElementById("dos");
let button = document.getElementById("button");
let erase = document.getElementById("button-erase");
let h2 = document.querySelector("p");

function fibonacciCount(inputValue) {
  h2.innerText = "";
  for (let i = 0; i < inputValue; i++) {
    if (i > 1) {
      let newNumber = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(newNumber);
    }
  }
  console.log(fibonacci);
  h2.innerText = fibonacci.join(", ");
}
button.addEventListener("click", () => {
  let inputValue = parseInt(input.value);
  console.log(input.value);
  console.log(inputValue);
  if (
    isNaN(inputValue) ||
    inputValue === null ||
    inputValue === "" ||
    inputValue === undefined
  ) {
    h2.innerText = "por favor, indique la cantidad de valores";
    return;
  }
  let unoValue = parseInt(unoInput.value);
  if (unoInput.value === "") {
    unoValue = 1;
  }
  let dosValue = parseInt(dosInput.value);
  if (dosInput.value === "") {
    dosValue = 1;
  }
  fibonacci = [unoValue, dosValue];
  console.count(fibonacci);
  fibonacciCount(inputValue);
  console.log(inputValue);
});
erase.addEventListener("click", () => {
  fibonacci = [];
  input.innerHTML = "";
  h2.innerText = "";
});
