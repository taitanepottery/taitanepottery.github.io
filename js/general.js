/**
 * Created by maximmillen on 29/12/16.
 */

var imgs = ['http://lorempizza.com/380/240',
            'http://dummyimage.com/250/ffffff/000000',
            'http://lorempixel.com/g/400/200/',
            'images/workshop/cleaning-bowls.jpg'];
var container = document.getElementById('imageContainer-DELETE');
console.log(container);

for (var i = 0, j = imgs.length; i < j; i++) {
  console.log("img");
    var img = document.createElement('img');
    img.src = imgs[i]; // img[i] refers to the current URL.
    container.appendChild(img);
}
