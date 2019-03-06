// Your code goes here

//----------------nav bar changes color on scroll-----------------

const body = document.querySelector('body');
const navBar = document.querySelector('header');

window.addEventListener('scroll', function (e) {
    navBar.style.background = "#C0C0C0";
    navBar.style.opacity = '0.8';
});


//-- -- -- -- -- -- -- -- - load listener gives a pop up message-- -- -- -- -- -- -- -- -- -- --

window.addEventListener("load", function (e) {
    alert("Congratulations!  You have found the right traveling partner!");
});


//-------------------anchor tags default off------------------------

const aTag = document.querySelectorAll('a');

aTag.forEach(item => item.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("a tag default prevented");
}));


//---------------------bottom section cards mouseover change color---------------

const destCard = document.querySelectorAll('.destination');

destCard[0].addEventListener('mouseenter', function (e) {
    destCard[0].style.background = '#ffaa83';
});
destCard[0].addEventListener('mouseleave', function (e) {
    destCard[0].style.background = '#fff3c6';
});

destCard[1].addEventListener('mouseenter', function (e) {
    destCard[1].style.background = '#aeff83';
});
destCard[1].addEventListener('mouseleave', function (e) {
    destCard[1].style.background = '#fff3c6';
});

destCard[2].addEventListener('mouseenter', function (e) {
    destCard[2].style.background = '#adf2ff';
});
destCard[2].addEventListener('mouseleave', function (e) {
    destCard[2].style.background = '#fff3c6';
});

const destCardContainer = document.querySelectorAll('.content-pick');

destCardContainer[0].addEventListener('mouseenter', function (e) {
    destCardContainer[0].style.background = '#fff3c6';
    destCard[0].style.background = '#fff3c6';
    destCard[1].style.background = '#fff3c6';
    destCard[2].style.background = '#fff3c6';
});
destCardContainer[0].addEventListener('mouseleave', function (e) {
    destCardContainer[0].style.background = '#FFFFFF';
    destCard[0].style.background = '#ffffff';
    destCard[1].style.background = '#ffffff';
    destCard[2].style.background = '#ffffff';
});

//-------------click to change color-------------

destCardContainer[0].addEventListener('click', function (e) {
    destCardContainer[0].style.background = '#1e7268';
});

//------------------btn click and stop propogation-----------

const button = document.querySelectorAll('.btn');
button[0].addEventListener('click', function (e) {
    destCard[1].style.display = "none";
    destCard[2].style.display = "none";
    destCardContainer[0].style.justifyContent = 'center';
    destCard[0].style.width = '75%';
    e.stopPropagation();
});
button[1].addEventListener('click', function (e) {
    destCard[0].style.display = "none";
    destCard[2].style.display = "none";
    destCardContainer[0].style.justifyContent = 'center';
    destCard[1].style.width = '75%';
    e.stopPropagation();
});
button[2].addEventListener('click', function (e) {
    destCard[0].style.display = "none";
    destCard[1].style.display = "none";
    destCardContainer[0].style.justifyContent = 'center';
    destCard[2].style.width = '75%';
    e.stopPropagation();
});


//---------------double click to revert card back-----------

button[0].addEventListener('dblclick', function (e) {
    destCard[1].style.display = "block";
    destCard[2].style.display = "block";
    destCardContainer[0].style.justifyContent = 'space-between';
    destCard[0].style.width = '30%';
    e.stopPropagation();
});
button[1].addEventListener('dblclick', function (e) {
    destCard[0].style.display = "block";
    destCard[2].style.display = "block";
    destCardContainer[0].style.justifyContent = 'space-between';
    destCard[1].style.width = '30%';
    e.stopPropagation();
});
button[2].addEventListener('dblclick', function (e) {
    destCard[0].style.display = "block";
    destCard[1].style.display = "block";
    destCardContainer[0].style.justifyContent = 'space-between';
    destCard[2].style.width = '30%';
    e.stopPropagation();
});


//-----------------key down [0 -3] to select font ---------------

const font = document.getElementById("font");
const fontArray = [
    'https://fonts.googleapis.com/css?family=Indie+Flower|Roboto',
    'https://fonts.googleapis.com/css?family=Srisakdi|Roboto',
    "https://fonts.googleapis.com/css?family=Moul|Roboto",
    "https://fonts.googleapis.com/css?family=Pacifico|Roboto"
]

window.addEventListener('keydown', function (e) {
    if (e.key == 0 || e.key == 1 || e.key == 2 || e.key == 3) {
        font.href = fontArray[e.key]
        // document.querySelector('h1').style.fontFamily = newfont;
        // body.style.fontFamily = fontArray[e.key];
        console.log("if statement");
        console.log(typeof fontArray[e.key]);
    }
});


//-----------------------resize : changes background color of body---------------

window.addEventListener('resize', function (e) {
    body.style.background = '#a8fff4';
});


//----------------------mousemove over nav bar resets background color-----------

navBar.addEventListener('mousemove', function (e) {
    body.style.background = '#FFFFFF';
});


//---------------------------mouseover changes img size----------------

const img = document.getElementById('busPic');

img.addEventListener('mouseover', function (e) {
    img.style.width = '50%';
});

navBar.addEventListener('mousemove', function () {
    img.style.width = '100%';
});