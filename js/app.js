
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


  var link = document.querySelector(".credit-show");
  var credit = document.querySelector(".service-credit");
    link.addEventListener("clik", function(credit){
        credit.preventDefault();
        credit.style.display = "block";
    });