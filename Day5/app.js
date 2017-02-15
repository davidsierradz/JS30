var columns = document.querySelectorAll('.column');

columns.forEach((column) => {
  column.addEventListener('click', (e) => {

    for (var i = 0; i < e.target.parentElement.children.length; i++) {
      if (e.target.parentElement.children[i] !== e.target) {
        if (e.target.parentElement.children[i].classList.contains('column-clicked')) {
          e.target.parentElement.children[i].classList.remove('column-clicked');
          for (var j = 0; j < e.target.parentElement.children[i].children.length; j++) {
            if (e.target.parentElement.children[i].children[j].nodeName === "H3") {
              e.target.parentElement.children[i].children[j].classList.remove('show');
            }
          }
        }
      }
    }

    e.target.classList.toggle('column-clicked');

    for (var i = 0; i < e.target.children.length; i++) {
      if (e.target.children[i].nodeName === "H3") {
        e.target.children[i].classList.toggle('show');
      }
    }

  });
});
