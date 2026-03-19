function generatePoem(response) {
  response.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generatePoem);
