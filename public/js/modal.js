function modalTrigger() {
  document.onclick = function (e) {
    var data = e.target.dataset.target;
    var modal = document.getElementById(data);
    if (data) {
      modal.classList.add("open");
    }
  };
}
function modalClose() {
  document.onclick = function (e) {
    var data = e.target.offsetParent.id;
    var modal = document.getElementById(data);
    if (data) {
      modal.classList.remove("open");
    }
  };
}
