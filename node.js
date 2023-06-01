let input = document.querySelector("#input");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let x = new SpeechSynthesisUtterance(input.value);
  speechSynthesis.speak(x);
});
