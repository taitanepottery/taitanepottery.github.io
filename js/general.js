/**
 * Created by maximmillen on 29/12/16.
 */


var container = document.getElementById('raku-container');

for (var i = 0, j = 5; i < j; i++) {
  var diver = document.createElement('div');
  var modalButton = document.createElement('a');
  modalButton.setAttribute('href',"#raku-container");
  modalButton.className = "portfolio-button";
  diver.className = "col portfolio-item";
    var img = document.createElement('img');
    img.src = "images/portfolio/raku-" + String(i) + ".jpg"; // img[i] refers to the current URL.
    diver.appendChild(modalButton);
  modalButton.appendChild(img);
    container.appendChild(diver);
}

var wallArt = document.getElementById('wall-art-container');

for (var i = 0, j = 4; i < j; i++) {
  var div_w = document.createElement('div');
  div_w.className = "col portfolio-item";
  var a_w = document.createElement('a');
  a_w.setAttribute('href',"#wall-art-container");
  a_w.className = "portfolio-button";
    img = document.createElement('img');
    img.src = "images/portfolio/wall-art-" + String(i) + ".jpg"; // img[i] refers to the current URL.
    div_w.appendChild(a_w);
    a_w.appendChild(img);
    wallArt.appendChild(div_w);
}
