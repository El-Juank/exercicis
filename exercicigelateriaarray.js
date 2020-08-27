function triarGelat() {
  var gelats = [
    [
      "img/gelats/cucurutxomaduixa.jpg",
      "img/gelats/tarrinamaduixa.jpg",
      "img/gelats/babutmaduixa.jpg",
    ],
    [
      "img/gelats/cucurutxollimona.jpg",
      "img/gelats/tarrinallimona.jpg",
      "img/gelats/babutllimona.jpg",
    ],
    [
      "img/gelats/cucurutxoxocolata.jpg",
      "img/gelats/tarrinaxocolata.jpg",
      "img/gelats/babutxocolata.jpg",
    ],
    [
      "img/gelats/cucurutxovainilla.jpg",
      "img/gelats/tarrinavainilla.jpg",
      "img/gelats/babutvainilla.jpg",
    ],
  ];
  var sabor = document.getElementById("sabor").value;
  var tipus = document.getElementById("tipus").value;
  var resultat = document.getElementById("resultat");
  resultat.innerHTML = "<img src='" + gelats[sabor][tipus] + "'>";
  //window.alert(gelats[sabor][tipus]);
}
