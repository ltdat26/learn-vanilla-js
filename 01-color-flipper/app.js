const colors = ["#f94144", "#f3722c", "#f8961e", "#f9c74f", "#90be6d", "#43aa8b", "#577590"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length)
};