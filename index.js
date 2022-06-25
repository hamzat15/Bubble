const clear = document.querySelector("button");
const counterDisplay = document.querySelector("h3");
let counter = 0;


const bubbleMarker = () => {
  //Creation de la bulle
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  //Donne la height et la width d'une bulle aleatoir entre 100 et 300px
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  //Donne une hauteru et une appariton sur la droite aleatoir
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  //appariton des bulle une fois sur deux de la gauche vers la droite
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
    bubble.remove();
  });
  clear.addEventListener("click", () => {
      counterDisplay.textContent = "0";
      counter = 0;
  })

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMarker, 1000);
