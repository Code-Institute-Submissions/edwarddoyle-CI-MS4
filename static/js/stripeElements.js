const key = document.querySelector('#id_stripe_public_key').text
const secret = document.querySelector('#id_stripe_client_secret').text
const stripe_public_key = key.slice(1, -1)
const stripe_client_secret = secret.slice(1, -1)
console.log(`${stripe_public_key} ${stripe_client_secret}`)

const stripe = Stripe(stripe_public_key)

const elements = stripe.elements()
const card = elements.create('card')

//style here
const card_element = document.querySelector('#card-element')
card.mount(card_element)