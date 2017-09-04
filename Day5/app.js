HTMLElement.prototype.toggleShowFromChildrens = function () {
  [...this.children]
    .filter(child => child.nodeName === 'H3')
    .map(child => child.classList.toggle('show'));
};

document.querySelectorAll('.column').forEach((column, index, columns) => {
  column.addEventListener('click', (e) => {
    const columnElement = e.currentTarget;

    [...columns]
      .filter(childrenColumn =>
        childrenColumn.classList.contains('column-clicked') && !Object.is(childrenColumn, columnElement))
      .map((childrenColumn) => {
        childrenColumn.classList.remove('column-clicked');
        childrenColumn.toggleShowFromChildrens();
      });

    columnElement.classList.toggle('column-clicked');

    columnElement.toggleShowFromChildrens();
  });
});
