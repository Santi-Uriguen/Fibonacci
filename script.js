let fibonacci = [];
let input = document.getElementById("input");
let button = document.getElementById("button");
let erase = document.getElementById("button-erase");
let h2 = document.querySelector("p");

function fibonacciCount(inputValue) {
  h2.innerText = "";
  fibonacci = [];
  for (let i = 0; i < inputValue; i++) {
    if (i === 0) {
      fibonacci.push(i + 1);
    } else if (i === 1) {
      fibonacci.push(i);
    } else {
      let newNumber = fibonacci[i - 1] + fibonacci[i - 2];
      newNumber = newNumber.toLocaleString('fullwide', { useGrouping: false });
      fibonacci.push(newNumber);
    }
  }
  console.log(fibonacci);
  h2.innerText = fibonacci.join(", ");
}
button.addEventListener("click", () => {
  let inputValue = parseInt(input.value);
  fibonacciCount(inputValue);
  console.log(inputValue);
});
erase.addEventListener("click", () => {
  fibonacci = [];
  input.innerHTML = "";
  h2.innerText = "";
});
