function generatePoem(response) {
  formElement.innerHTML = response.target.innerText;
}

let formElement = document.querySelector("form");
formElement.addEventListener("click", generatePoem);
