//
document.getElementById("contentHolder").innerHTML = "<p>testest</p>";

//

var prviParagraf = document.createElement("p");
prviParagraf.innerHTML = "Prvi JS paragraf";
document.getElementById("contentHolder").appendChild(prviParagraf);
prviParagraf.style.color = "red";

var linkDoGugla = document.createElement("a");
linkDoGugla.setAttribute("href", "https://www.google.rs");
document.getElementById("contentHolder").appendChild(linkDoGugla);
linkDoGugla.innerHTML = "Link do Googla";

var slika = document.createElement("img");
slika.setAttribute("src", "slika1.jpg");
slika.setAttribute("class", "slika");
slika.setAttribute("alt", "Proffesional Wine Lables");
document.getElementById("contentHolder").appendChild(slika);

document.getElementById("promena").style.color = "red";
