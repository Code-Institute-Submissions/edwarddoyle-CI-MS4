import {showLoadingButton, displaySuccess, displayError} from "./utils.js";

 
    const contactForm = document.querySelector('#contactForm');
    const formMessage = contactForm.querySelector('p')
    
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      sendContact(e);
    });
  
    async function sendContact(e) {
  
  
      const classes = ["green", "red", ];
      classes.forEach(c => {
        if (formMessage.classList.contains(c)) {
          formMessage.classList.remove(c);
        }
      })
      formMessage.innerHTML = '';
      showLoadingButton(e.submitter);
    
      let emailBody = [];
      // Loop over form to get values
      [...contactForm.elements].forEach((el) => {
        let name = String(el.name);
        let value = el.value.trim();
        emailBody = [...emailBody, {
          name: name,
          data: value
        }];
      });
      // Send email 28a03270-231f-4b31-a17f-abab2f78630a"b397417c-4418-46e3-a7e2-70dfe00e541c",
      await Email.send({
        SecureToken: "20ab0394-e95f-4d08-b30e-c35d55f7830d",
        To: "edwardpaul.doyle@gmail.com",
        From: "edwardpaul.doyle@gmail.com",
        Subject: "New Website Message",
        Body: emailBody,
      }).then(
        message => message = "OK" ? displaySuccess("Message Recieved, Thank You", formMessage, contactForm, e.submitter, "SUBMIT") : displayError(error, formMessage, e.submitter, "SUBMIT")
      )
    };