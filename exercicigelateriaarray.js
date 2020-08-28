/*function triarGelat() {
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
}
*/

function triarGelat() {
  var gelats = [
    [
      [
        "img/gelats/cucurutxomaduixa.jpg",
        "img/gelats/tarrinamaduixa.jpg",
        "img/gelats/batutmaduixa.jpg",
      ],
      [
        "img/gelats/cucurutxollimona.jpg",
        "img/gelats/tarrinallimona.jpg",
        "img/gelats/batutllimona.jpg",
      ],
      [
        "img/gelats/cucurutxoxocolata.jpg",
        "img/gelats/tarrinaxocolata.jpg",
        "img/gelats/batutxocolata.jpg",
      ],
      [
        "img/gelats/cucurutxovainilla.jpg",
        "img/gelats/tarrinavainilla.jpg",
        "img/gelats/batutvainilla.jpg",
      ],
    ],
    /*Mida Mitjana*/
    [
      [
        "img/gelats/cucurutxomaduixa2.jpg",
        "img/gelats/tarrinamaduixa2.jpg",
        "img/gelats/batutmaduixa.jpg",
      ],
      [
        "img/gelats/cucurutxollimona2.jpg",
        "img/gelats/tarrinallimona2.jpg",
        "img/gelats/batutllimona.jpg",
      ],
      [
        "img/gelats/cucurutxoxocolata2.jpg",
        "img/gelats/tarrinaxocolata2.jpg",
        "img/gelats/batutxocolata.jpg",
      ],
      [
        "img/gelats/cucurutxovainilla2.jpg",
        "img/gelats/tarrinavainilla2.jpg",
        "img/gelats/batutvainilla.jpg",
      ],
    ],
    /*Mida Gran*/
    [
      [
        "img/gelats/cucurutxomaduixa3.jpg",
        "img/gelats/tarrinamaduixa3.jpg",
        "img/gelats/batutmaduixa.jpg",
      ],
      [
        "img/gelats/cucurutxollimona3.jpg",
        "img/gelats/tarrinallimona3.jpg",
        "img/gelats/batutllimona.jpg",
      ],
      [
        "img/gelats/cucurutxoxocolata3.jpg",
        "img/gelats/tarrinaxocolata3.jpg",
        "img/gelats/batutxocolata.jpg",
      ],
      [
        "img/gelats/cucurutxovainilla3.jpg",
        "img/gelats/tarrinavainilla3.jpg",
        "img/gelats/batutvainilla.jpg",
      ],
    ],
  ];
  var sabor = document.getElementById("sabor").value;
  var tipus = document.getElementById("tipus").value;
  var mida = document.getElementById("mida").value;
  var resultat = document.getElementById("resultat");
  resultat.innerHTML = "<img src='" + gelats[mida][sabor][tipus] + "'>";
  //window.alert(gelats[mida][sabor][tipus]);
}

function refresh() {
  window.alert("Moltes gràcies per fer el teu gelat");
  location.reload();
  return false;
}
