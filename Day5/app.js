document.querySelectorAll('.column').forEach((column, index, columns) => {
  column.addEventListener('click', (e) => {
    const columnElement = e.currentTarget;

    [...columns]
      .filter(childrenColumn =>
        !Object.is(childrenColumn, columnElement))
      .map((childrenColumn) => {
        childrenColumn.classList.remove('column-clicked');
      });

    columnElement.classList.toggle('column-clicked');
  });
});
