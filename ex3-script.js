window.addEventListener("load", start);

function start() {
  document
    .querySelector("#orange_container")
    .addEventListener("click", freezeSquare);
  document
    .querySelector("#orange_sprite")
    .addEventListener("click", jumpSquare);
}

function moveSquare() {
  document.querySelector("#orange_container").classList.add("move");
}

moveSquare();

function freezeSquare() {
  document
    .querySelector("#orange_container")
    .addEventListener("click", freezeSquare);
  document.querySelector("#orange_container").classList.add("paused");
}

function jumpSquare() {
  document
    .querySelector("#orange_sprite")
    .addEventListener("click", jumpSquare);
  document.querySelector("#orange_sprite").classList.add("jump");
}
