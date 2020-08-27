function triarGelat() {
  var sabor = document.getElementById("sabor").value;
  var tipus = document.getElementById("tipus").value;
  var mida = document.getElementById("mida").value;
  var topping = document.getElementById("topping").value;
  var resultat = document.getElementById("resultat");

  if (tipus == "cucurutxo") {
    switch (sabor) {
      case "maduixa":
        resultat.innerHTML = "<img src='img/gelats/cucurutxo_maduixa.png'>";
        break;
      case "xocolata":
        resultat.innerHTML = "<img src='img/gelats/cucurutxo_xocolata.png'>";
        break;
      case "llimona":
        resultat.innerHTML = "<img src='img/gelats/cucurutxo_llimona.jpg'>";
        break;
    }
  }

}
