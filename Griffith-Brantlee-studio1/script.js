document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  document.f.onsubmit = processForm;
  document.f.onreset = clearForm;

  var mySong = new Audio('gucciganginstrumental.mp3');

  function processForm() {
    var text1 = document.f.text1.value;
    var text2 = document.f.text2.value;
    var text3 = document.f.text3.value;
    var text4 = document.f.text4.value;
    var text5 = document.f.text5.value;

    if (text1 == "", text2 == "", text3 == "", text4 == "", text5 == "") {
      alert("Fill out the rest of the form");
      return false;
    }

    var myMsg = document.getElementById("myMsg");
    var header = document.getElementById("header");

    header.innerHTML = "<h1>GUCCI GANG</h1>"
    myMsg.innerHTML = "Gucci gang, Gucci gang, Gucci gang, Gucci gang, <br> Gucci gang, Gucci gang, Gucci gang <br> Spend " +text1+ " racks on a new chain <br> My " +text2+ " love eat lo mein <br> I met a " +text3+ ", I forgot their name <br> I can't buy a " +text4+ " no " +text5+ " ring <br> Rather go and buy Balmains <br> Gucci gang, Gucci gang, Gucci gang, Gucci gang, <br> Gucci gang, Gucci gang, Gucci gang"

    document.body.style.backgroundImage = "url('guccigang.gif')";

    mySong.play();

    return false;
  }

  function clearForm() {
    var myMsg = document.getElementbyId("myMsg");
    myMsg.innerHTML = "";
    myMsg.style.display = "none";
  }

});
