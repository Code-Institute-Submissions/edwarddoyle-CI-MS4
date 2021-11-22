export const navToggler = document.querySelector("nav button");

export function showLoadingButton(el) {
    let spinner = `<div class="spinner"></div>`;
    el.textContent = "";
    el.insertAdjacentHTML("afterbegin", spinner);
  }
// hide loading button
export function hideLoadingButton(el, elText) {
    el.textContent = elText;
    el.querySelectorAll("*").forEach((n) => n.remove());
  }
  
  // display error message
  export function displayError(message, el, input, submitter, elText) {
    if (message) {
      el.classList.add('red');
      el.innerHTML = `<i class="icon-info"></i> ${message}`;
      hideLoadingButton(submitter, elText)
    }
    if (input) {
      input.focus();
    }
  }
  
  // display success message
  export function displaySuccess(message, el, form, submitter, elText) {
    setTimeout(function () {
      el.innerHTML = ""
      el.classList.remove('green');
    }, 5000);
    hideLoadingButton(submitter, elText)
    if (message) {
        el.classList.add('green');
        el.insertAdjacentHTML("beforeend", `<i class="icon-check"></i> ${message}`);
    }
    form.reset()
  }
  