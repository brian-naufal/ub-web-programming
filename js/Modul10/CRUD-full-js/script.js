setInterval(function () {
  val[0].style.color = "red";
  val[1].style.color = "green";
  val[2].style.color = "blue";
  val[3].style.color = "orange";

  setTimeout(function () {
    val[0].style.color = "black";
    val[1].style.color = "black";
    val[2].style.color = "black";
    val[3].style.color = "black";
  }, 1000);
}, 2000);
