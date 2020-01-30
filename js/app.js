
    var link = document.querySelector(".open-map");
    var popup = document.querySelector(".popup");
    var close = popup.querySelector(".close-map");
  link.addEventListener("click", function(evt){
        evt.preventDefault();
    popup.classList.add("modal-show");
  });
  close.addEventListener("click", function(evt){
        evt.preventDefault();
    popup.classList.remove("modal-show");
  });


  