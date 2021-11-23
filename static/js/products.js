
// selectElement.addEventListener('mouseout', (event) => {
//    console.log('ed')
// const result = event.value;
// alert(result);
// //   result.textContent = `You like ${event.target.value}`;
// });

const selectElement = document.querySelector('#selectElement');


selectElement.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(e.currentTarget.value)
});