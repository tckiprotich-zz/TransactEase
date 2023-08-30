// loading DOM
document.addEventListener('DOMContentLoaded', async() => {
    // fetch publishable key
    const {publishableKey} = await fetch('/config').then(r => r.json());
    // initialize stripe
    const stripe = Stripe(publishableKey);


    // retrive payment intent and render
    const params = new URLSearchParams(window.location.href);
    const clientSecret = params.get('payment_intent_client_secret');
    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

    // render payment intent
    const paymentIntentPre = document.getElementById('payment-intent');
    paymentIntentPre.innerText = JSON.stringify(paymentIntent, null, 2);
    

});