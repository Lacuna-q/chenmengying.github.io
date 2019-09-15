//Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/aggretsuko.png') {
      myImage.setAttribute ('src','images/aggretsuko-2.png');
    } else {
      myImage.setAttribute ('src','images/aggretsuko.png');
    }
}

//Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
         setUserName();
    } else {
        localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to Sanrio fanpage, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome to Sanrio fanpage, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }