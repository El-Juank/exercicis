function triarPrimer() {
  var resultatPrimer = document.getElementById("resultatPrimer");
  var primer = document.getElementById("primers").value;
  if (primer == "pollastre") {
    resultatPrimer.innerHTML = "<img src='img/pollastre.jpg'>";
  } else if (primer == "amanida") {
    resultatPrimer.innerHTML = "<img src='img/amanida.jpg'>";
  } else if (primer == "gnocci") {
    resultatPrimer.innerHTML = "<img src='img/gnocci.jpg'>";
  }
}

function triarBeguda() {
  var resultatBeguda = document.getElementById("resultatBeguda");
  var begudes = document.getElementById("begudes").value;
  if (begudes == "aigua") {
    resultatBeguda.innerHTML = "<img src='img/aigua.jpg'>";
  } else if (begudes == "cervesa") {
    resultatBeguda.innerHTML = "<img src='img/beer.jpg'>";
  } else if (begudes == "cocacola") {
    resultatBeguda.innerHTML = "<img src='img/cola.jpg'>";
  }
}

function triarPostre() {
  var resultatPostres = document.getElementById("resultatPostres");
  var postres = document.getElementById("postres").value;
  if (postres == "alfajores") {
    resultatPostres.innerHTML = "<img src='img/alfajores.jpg'>";
  } else if (postres == "pastis") {
    resultatPostres.innerHTML = "<img src='img/pastis.jpg'>";
  } else if (postres == "batut") {
    resultatPostres.innerHTML = "<img src='img/batut.jpg'>";
  }
}

function refresh() {
  window.alert("Moltes gràcies per la seva reserva");
  location.reload();
  return false;
}
