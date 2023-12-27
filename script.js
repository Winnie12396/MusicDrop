var sceneEl = document.querySelector('a-scene');

var buttonPutEl = sceneEl.querySelector('#buttonPut');

var chooseMusicEl = sceneEl.querySelector('#chooseMusic'); 

var searchEl = sceneEl.querySelector('#serach'); 

var music1El = sceneEl.querySelector('#music1'); 

var music2El = sceneEl.querySelector('#music2'); 

var music3El = sceneEl.querySelector('#music3'); 

var music4El = sceneEl.querySelector('#music4'); 

var music5El = sceneEl.querySelector('#music5'); 

var image1El = sceneEl.querySelector('#img1'); 

var image2El = sceneEl.querySelector('#img2'); 

var image3El = sceneEl.querySelector('#img3'); 

var image4El = sceneEl.querySelector('#img4'); 

var image5El = sceneEl.querySelector('#img5'); 

var image6El = sceneEl.querySelector('#img6'); 

var text1El = sceneEl.querySelector('#text1'); 

var text2El = sceneEl.querySelector('#text2'); 

var text3El = sceneEl.querySelector('#text3');

var text4El = sceneEl.querySelector('#text4'); 

var text5El = sceneEl.querySelector('#text5'); 

var name1El = sceneEl.querySelector('#name1'); 

var name2El = sceneEl.querySelector('#name2'); 

var name3El = sceneEl.querySelector('#name3');

var name4El = sceneEl.querySelector('#name4'); 

var name5El = sceneEl.querySelector('#name5'); 

//var cursorEntityEl = sceneEl.querySelector('a-cursor');

var clickables = document.querySelectorAll('.clickable');

//var unclickables = document.querySelectorAll('.unclickable');


buttonPutEl.addEventListener('click', function(){

if(this.getAttribute('opacity') === '1'){

chooseMusicEl.setAttribute("material", "opacity", "1");
searchEl.setAttribute("material", "opacity", "1");
music1El.setAttribute("material", "opacity", "1");
music2El.setAttribute("material", "opacity", "1");
music3El.setAttribute("material", "opacity", "1");
music4El.setAttribute("material", "opacity", "1");
music5El.setAttribute("material", "opacity", "1");
image1El.setAttribute('opacity', '1');
image2El.setAttribute('opacity', '1');
image3El.setAttribute('opacity', '1');
image4El.setAttribute('opacity', '1');
image5El.setAttribute('opacity', '1');
image6El.setAttribute('opacity', '1');
text1El.setAttribute('opacity', '1');
text2El.setAttribute('opacity', '1');
text3El.setAttribute('opacity', '1');
text4El.setAttribute('opacity', '1');
text5El.setAttribute('opacity', '1');
name1El.setAttribute('opacity', '1');
name2El.setAttribute('opacity', '1');
name3El.setAttribute('opacity', '1');
name4El.setAttribute('opacity', '1');
name5El.setAttribute('opacity', '1');
this.setAttribute('opacity', '0');
this.setAttribute("material", "color", "#8cc7ff");

} else if (this.getAttribute('opacity') === '0'){

ui();
}

});

music1El.addEventListener('click', function(){
ui();
});

music2El.addEventListener('click', function(){
ui();
});

music3El.addEventListener('click', function(){
ui();
});

music4El.addEventListener('click', function(){
ui();
});

music5El.addEventListener('click', function(){
ui();
});

text1El.addEventListener('click', function(){
ui();
});

text2El.addEventListener('click', function(){
ui();
});

text3El.addEventListener('click', function(){
ui();
});

text4El.addEventListener('click', function(){
ui();
});

text5El.addEventListener('click', function(){
ui();
});

image1El.addEventListener('click', function(){
ui();
});

image2El.addEventListener('click', function(){
ui();
});

image3El.addEventListener('click', function(){
ui();
});

image4El.addEventListener('click', function(){
ui();
});

image5El.addEventListener('click', function(){
ui();
});



function ui(){
    
chooseMusicEl.setAttribute("material", "opacity", "0");
searchEl.setAttribute("material", "opacity", "0");
music1El.setAttribute("material", "opacity", "0");
music2El.setAttribute("material", "opacity", "0");
music3El.setAttribute("material", "opacity", "0");
music4El.setAttribute("material", "opacity", "0");
music5El.setAttribute("material", "opacity", "0");
image1El.setAttribute('opacity', '0');
image2El.setAttribute('opacity', '0');
image3El.setAttribute('opacity', '0');
image4El.setAttribute('opacity', '0');
image5El.setAttribute('opacity', '0');
image6El.setAttribute('opacity', '0');
text1El.setAttribute('opacity', '0');
text2El.setAttribute('opacity', '0');
text3El.setAttribute('opacity', '0');
text4El.setAttribute('opacity', '0');
text5El.setAttribute('opacity', '0');
name1El.setAttribute('opacity', '0');
name2El.setAttribute('opacity', '0');
name3El.setAttribute('opacity', '0');
name4El.setAttribute('opacity', '0');
name5El.setAttribute('opacity', '0');
buttonPutEl.setAttribute('opacity', '1');
buttonPutEl.setAttribute("material", "color", "white");
  
}





