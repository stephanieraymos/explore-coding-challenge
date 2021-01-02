var modal = document.getElementById("modal");

var btn = document.getElementById("modal-btn");

//Element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Open modal
btn.onclick = function () {
  modal.style.display = "block";
}

//Close modal
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}