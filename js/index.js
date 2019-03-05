// Your code goes here
const body = document.querySelector('body');
const navBar = document.querySelector('header');

window.addEventListener('scroll', function (e) {
    navBar.style.background = "#C0C0C0";
    navBar.style.opacity = '0.8';
});

// window.addEventListener("load", function (e) {
//     alert("Congratulations!  You have found the right traveling partner!");
// });

const aTag = document.querySelectorAll('a');

aTag.forEach(item => item.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("a tag default prevented");
}));

const destCard = document.querySelectorAll('.destination');
// destCard.forEach(item => item.addEventListener('mouseover', function (e) {
//     destCard.forEach(item => item.style.background = '#17A2B8');
// }));

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