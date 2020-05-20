var modalElement = document.getElementById("modal");

document.onclick = function (e) {
  if (e.target.id === "open-modal") {
    modalElement.classList.add("show-modal");
  } else if (e.target.id !== "modal-box") {
    modalElement.classList.remove("show-modal");
  }
};
