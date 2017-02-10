const inputs = document.querySelectorAll("input");

inputs.forEach(function(element){
  console.log(element);
  element.addEventListener("change", function() {
    var size = '';
    if(this.getAttribute('data-css-variable') !== '--color')
    {
      size = 'px';
    }
    document.documentElement.style.setProperty(this.getAttribute('data-css-variable'), this.value + size);
  });
});
