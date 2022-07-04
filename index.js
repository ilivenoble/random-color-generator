const colorForm = document.getElementById("color-form");
const seedColor = document.getElementById("seed-color");
const colorScheme = document.getElementById("color-scheme");
const colorDisplayer = document.getElementById("color-displayer");

colorForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const seedColorInput = seedColor.value.substring(1);
  const colorSchemeOption = colorScheme.value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColorInput}&mode=${colorSchemeOption}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      let colorSwatches = [];
      for (let color of data.colors) {
        colorSwatches.push(color.hex.value);
      }

      colorSwatches.map((value, index) => {
        document.querySelector(`.s${index}`).style.backgroundColor = value;
        document.querySelector(`.h${index}`).textContent = value;
      });
    });
});


//https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6
