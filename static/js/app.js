import {
  showLoadingButton,
  displaySuccess,
  displayError
} from "./utils.js";


function isLargeScreen() {
  if (window.screen.width <= 768) {
    return `<td class="celltitle">${key}</td>`
  } else {
    return ''
  }
}

const copyrightYear = document.querySelector('#copyright');
const scrollToTop = document.querySelector('#scrollToTop');

let d = new Date();
if (copyrightYear) {
  copyrightYear.innerHTML = `&copy; ${d.getFullYear()} KCC`;
}
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}


scrollToTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});