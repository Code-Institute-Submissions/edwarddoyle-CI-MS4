const key = document.querySelector('#id_stripe_public_key').text
const secret = document.querySelector('#id_stripe_client_secret')
const stripePublicKey = key.slice(1, -1)
const stripeClientSecret = secret.text.slice(1, -1)


const stripe = Stripe(stripePublicKey)

const elements = stripe.elements()
const card = elements.create('card')

//style here
const card_element = document.querySelector('#card-element')
const error_element = document.querySelector('#card-errors')
card.mount(card_element)

const submitButton = document.querySelector('#submitPayment')



card.addEventListener('change', (e) => {
    if (e.error) {
        let html = `
        <span><i class="icon-basket"></i> ${e.error.message}</span>
        `;
        error_element.insertAdjacentElement('afterbegin', html)
    }
})

var form = document.getElementById('payment-form');

submitButton.addEventListener('click', function (ev) {
    ev.preventDefault();
    card.update({
        'disabled': true
    })
    submitButton.setAttribute('disabled', true)


    // If the client secret was rendered server-side as a data-secret attribute
    // on the <form> element, you can retrieve it here by calling `form.dataset.secret`
    stripe.confirmCardPayment(stripeClientSecret, {
        payment_method: {
            card: card,
        }
    }).then(function (result) {
        if (result.error) {
            let html = `
        <span><i class="icon-basket"></i> ${result.error.message}</span>
        `;
            error_element.insertAdjacentElement('afterbegin', html)
            card.update({
                'disabled': false
            })
            submitButton.setAttribute('disabled', false)
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                // console.log(`${paymentIntent.status}`)
                form.submit()
            }
        }
    });
});