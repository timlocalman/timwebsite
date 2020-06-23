// var firstimage= document.getElementById('head-title');
//     para = document.getElementsByTagName('p');
// for (var i=0; i<para.length; i++){
//   para[i].style.color = 'black';
// }

// var submit = document.getElementById('submit'),
//    container = document.querySelector('.container');

// submit.addEventListener('click', function(event){
//    	alert('hey ive been clicked');
// });

 
// container.addEventListener('mouseenter',mouseEnterContainer);

// function mouseEnterContainer() {
// 	alert('hey user');

//  container.removeEventListener('mouseenter' ,mouseEnterContainer);

// }

// document.addEventListener('keyup' ,function(event) {
// 	console.log(event.keycode);
// });
let myImage = document.getElementById('head-image');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'IMAGES/IMG_9708.jpg') {
      myImage.setAttribute ('src','IMAGES/firefox2.png.jpg');
    } else {
      myImage.setAttribute ('src','IMAGES/IMG_9708.jpg');
    }
}

let myImage1 = document.getElementById('pic1');

myImage1.onclick = function() {
    let mySrc1 = myImage1.getAttribute('src');
    if(mySrc1 === 'IMAGES/IMG_9666.jpg') {
      myImage1.setAttribute ('src','image2/IMG_97081.jpg');
    } else {
      myImage1.setAttribute ('src','IMAGES/IMG_9666.jpg');
    }
}
let myImage2 = document.getElementById('pic2');

myImage2.onclick = function() {
    let mySrc2 = myImage2.getAttribute('src');
    if(mySrc2 === 'IMAGES/IMG_9664.jpg') {
      myImage2.setAttribute ('src','image2/IMG_97083.jpg');
    } else {
      myImage2.setAttribute ('src','IMAGES/IMG_9664.jpg');
    }
}
let myImage3 = document.getElementById('pic3');

myImage3.onclick = function() {
    let mySrc3 = myImage3.getAttribute('src');
    if(mySrc3 === 'IMAGES/IMG_9677.jpg') {
      myImage3.setAttribute ('src','image2/IMG_97086.jpg');
    } else {
      myImage3.setAttribute ('src','IMAGES/IMG_9677.jpg');
    }
}
let myImage4 = document.getElementById('pic4');

myImage4.onclick = function() {
    let mySrc4 = myImage4.getAttribute('src');
    if(mySrc4 === 'IMAGES/20200105_130021.jpg') {
      myImage4.setAttribute ('src','image2/IMG_97082.jpg');
    } else {
      myImage4.setAttribute ('src','IMAGES/20200105_130021.jpg');
    }
}
let myImage5 = document.getElementById('pic5');

myImage5.onclick = function() {
    let mySrc5 = myImage5.getAttribute('src');
    if(mySrc5 === 'IMAGES/IMG_9697.jpg') {
      myImage5.setAttribute ('src','image2/IMG_97084.jpg');
    } else {
      myImage5.setAttribute ('src','IMAGES/IMG_9697.jpg');
    }
}

let myImage6 = document.getElementById('pic6');

myImage6.onclick = function() {
    let mySrc6 = myImage6.getAttribute('src');
    if(mySrc6 === 'IMAGES/DSC_14423.jpg') {
      myImage6.setAttribute ('src','image2/IMG_97085.jpg');
    } else {
      myImage6.setAttribute ('src','IMAGES/DSC_14423.jpg');
    }
}
var btt = document.getElementById("back-to-top"),
       body= document.body,
       docElem= document.documentElement,
       offset = 100,
       scrollPos, docHeight;
//calculate the document height
    docHeight = Math.max 
     (body.scrollHeight, body.offsetHeight, docElem.clientHeight,docElem.scrollHeight,docElem.offsetHeight);
    if(docHeight!='undefined'){
	offset=docHeight / 4;
    }    
// add scrollevent listener
    window.addEventListener("scroll",function(event){
	   scrollPos=body.scrollTop|| docElem.scrollTop;

	   btt.className = (scrollPos > offset)? "visible" : "";
       // add clickevent listener
       btt.addEventListener("click",function(event){
    	docElem.scrollTop=0;
       })


    });
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    if(!myName) {
        setUserName();
      } else {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'WELCOME, ' + myName;
  }
}
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'WELCOME, ' + storedName;
  } 
  myButton.onclick = function() {
    setUserName();
  } 
