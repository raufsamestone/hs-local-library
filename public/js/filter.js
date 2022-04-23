function filterTrigger() {
  var filter = document.querySelector(".form-group-filter");
  filter.classList.add("open");
}

function closeFilter() {
  document.onclick = function (e) {
    var filter = document.querySelector(".form-group-filter.open");
    if (target) {
      filter.classList.remove("open");
    }
  };
}
