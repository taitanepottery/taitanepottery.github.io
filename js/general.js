/**
 * Created by maximmillen on 29/12/16.
 */

var div_w = null;


var wallArt = document.getElementById('wall-art-container');

for (var i = 1, j = 7; i < j; i++) {
  div_w = document.createElement('div');
  div_w.className = "col portfolio-item";
    img = document.createElement('img');
    img.src = "images/portfolio/wall-art_work/wall-art-" + String(i) + ".jpg"; // img[i] refers to the current URL.
    div_w.appendChild(img);
    wallArt.appendChild(div_w);
}

var container = document.getElementById('functional-container');

for (var i = 1, j = 7; i < j; i++) {
  div_w = document.createElement('div');
  div_w.className = "col portfolio-item";
    img = document.createElement('img');
    img.src = "images/portfolio/functional_work/functional-" + String(i) + ".jpg"; // img[i] refers to the current URL.
  //img.src = "images/portfolio/garden-" + String(i) + ".jpg"; // img[i] refers to the current URL.
    div_w.appendChild(img);
    container.appendChild(div_w);
}

var container = document.getElementById('raku-container');

for (var i = 1, j = 7; i < j; i++) {
  div_w = document.createElement('div');

  div_w.className = "col portfolio-item";
    var img = document.createElement('img');
    img.src = "images/portfolio/raku_work/raku-" + String(i) + ".jpg"; // img[i] refers to the current URL.
    div_w.appendChild(img);
    container.appendChild(div_w);
}


var container = document.getElementById('garden-container');

for (var i = 1, j = 7; i < j; i++) {
  div_w = document.createElement('div');
  div_w.className = "col portfolio-item";
    img = document.createElement('img');
    img.src = "images/portfolio/garden_work/garden-" + String(i) + ".jpg"; // img[i] refers to the current URL.
    div_w.appendChild(img);
    container.appendChild(div_w);
}

var container = document.getElementById('tall-container');

for (var i = 1, j = 7; i < j; i++) {
  div_w = document.createElement('div');
  div_w.className = "col portfolio-item";
    img = document.createElement('img');
    img.src = "images/portfolio/tall_work/tall-" + String(i) + ".jpg"; // img[i] refers to the current URL.
  //img.src = "images/portfolio/garden-" + String(i) + ".jpg"; // img[i] refers to the current URL.
    div_w.appendChild(img);
    container.appendChild(div_w);
}

var container = document.getElementById('colab-container');

for (var i = 1, j = 7; i < j; i++) {
  div_w = document.createElement('div');
  div_w.className = "col portfolio-item";
    img = document.createElement('img');
    img.src = "images/portfolio/colab_work/colab-" + String(i) + ".jpg"; // img[i] refers to the current URL.
  //img.src = "images/portfolio/garden-" + String(i) + ".jpg"; // img[i] refers to the current URL.
    div_w.appendChild(img);
    container.appendChild(div_w);
}

//var container = document.getElementById('hanger-container');
//
//for (var i = 0, j = 4; i < j; i++) {
//  var diver = document.createElement('div');
//  var modalButton = document.createElement('a');
//  modalButton.setAttribute('href',"#hanger-container");
//  modalButton.className = "portfolio-button";
//  diver.className = "col portfolio-item";
//    var img = document.createElement('img');
//    img.src = "images/portfolio/hanger-" + String(i) + ".jpg"; // img[i] refers to the current URL.
//    diver.appendChild(modalButton);
//  modalButton.appendChild(img);
//    container.appendChild(diver);
//}
