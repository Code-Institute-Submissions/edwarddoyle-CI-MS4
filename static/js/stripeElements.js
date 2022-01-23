const key = document.querySelector('#id_stripe_public_key').text
const secret = document.querySelector('#id_client_secret').text
const stripePublicKey = key.slice(1, -1)
const stripeClientSecret = secret.slice(1, -1)
const stripe = Stripe(stripePublicKey)
const elements = stripe.elements()
const card = elements.create('card')
const card_element = document.querySelector('#card-element')
const error_element = document.querySelector('#card-error')
const submitButton = document.querySelector('#submitPayment')
const form = document.getElementById('payment-form');

card.mount(card_element)

card.addEventListener('change', (e) => {
    if (e.error) {
        let html = `
        <span><i class="icon-basket"></i> ${e.error.message}</span>
        `;
        error_element.insertAdjacentElement('afterbegin', html)
    }
})



submitButton.addEventListener('click', function (ev) {
    ev.preventDefault();

    card.update({
        'disabled': true
    })
    
    submitButton.setAttribute('disabled', true)
    const getToken = document.querySelector('input[name="csrfmiddlewaretoken"]');
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let postData = {
        'csrfmiddlewaretoken': csrfToken,
        'client_secret': stripeClientSecret,
       // 'save_info': checkBox
    }
    let checkBox = document.getElementById("id-save-info");
    if (typeof (checkBox) !== 'undefined' && checkBox !== null) {
        if (checkBox.hasAttribute('checked')) {
            postData.save_info = checkBox;
        }
    }






    let url = '/checkout/cache_checkout_data/';
    fetch(url, {
        headers: {
            "X-CSRFToken": csrfToken,
        },
        method: 'POST',
        body: postData
    }).then((response) => {
        stripe.confirmCardPayment(stripeClientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: (form.full_name.value).trim(),
                    phone: (form.phone.value).trim(),
                    email: (form.email.value).trim(),
                    address: {
                        line1: (form.address_line_1.value),
                        line2: (form.address_line_2.value),
                        city: (form.town_or_city.value),
                        country: (form.country.value),
                        state: (form.county.value),
                    }
                }
            },
            shipping: {
                name: (form.full_name.value),
                phone: (form.phone.value),
                address: {
                    line1: (form.address_line_1.value),
                    line2: (form.address_line_2.value),
                    city: (form.town_or_city.value),
                    country: (form.country.value),
                    postal_code: (form.postcode.value),
                    state: (form.county.value),
                }
            }
        }).then(function (result) {
            if (result.error) {
                let html = `<span><i class="icon-basket"></i> ${result.error.message}</span>`;
                error_element.insertAdjacentElement('afterbegin', html)
                card.update({
                    'disabled': false
                })
                submitButton.setAttribute('disabled', false)
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    form.submit()
                }
            }
        });
    })
});