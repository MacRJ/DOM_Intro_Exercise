// question 1

var hello = document.getElementById('greeting');
hello.innerHTML = "Hello World!";

var list = document.getElementsByTagName('li')
for(var i = 0; i < list.length; i++){
  list[i].style.backgroundColor = 'yellow'
}

// question 2
  var img = document.createElement("IMG");
  img.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
  img.id = 'gif';
  var cartoon = document.getElementById('greeting')
  cartoon.appendChild(img)

// Question 4
  var selector, elems, makeActive;
  selector = 'li';
  elems = document.querySelectorAll(selector);

  makeActive = function (e) {
      for (var i = 0; i < elems.length; i++)
          elems[i].classList.remove('selected');

      e.target.classList.add('selected');
  };

    for (var i = 0; i < elems.length; i++)
        elems[i].addEventListener('mousedown', makeActive);


var img1 = document.getElementsByTagName('img');
changeImage = function(e){
img1[1].src = './images/' + e.target.innerHTML + '.jpeg';
}

for(var k = 0; k < elems.length; k++){
elems[k].addEventListener('mousedown', changeImage);
}


// Question 6
var quest5 = document.getElementById('ghosting')
function disapear(e){
  quest5.hidden = true
}
quest5.addEventListener('mouseover', disapear)

// Question 7
var quest6 = document.getElementById('resize')

  function double(e){
    quest6.setAttribute("style", "width: 400px;")
}
quest6.addEventListener('mouseover', double)

for(var i = 0; i < quest6.length; i++){
  quest6.setAttribute("style", "width: 200px;")
}

// Question 7
