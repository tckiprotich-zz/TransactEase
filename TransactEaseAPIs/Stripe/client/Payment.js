document.addEventListener('DOMContentLoaded', async () => {
    // fetching publishable key from the server
    const { publishableKey } = await fetch('/config').then((result) => result.json());
    // initializing stripe
    const stripe = Stripe(publishableKey);

    // creating payment intent on the server
    const { clientSecret } = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.json());

    // moutning stripe elements
    const elements = stripe.elements({ clientSecret });
    const paymentElement = elements.create('payment');
    paymentElement.mount('#payment-element');

    // handling form submission
    const form = document.getElementById('payment-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: window.location.href.split('?')[0] + 'confirm.html'
            },
        });
        if (error) {
            console.error('Error:', error);
            const errorMessages = document.getElementById('error-messages');
            errorMessages.textContent = error.message;
        } else if (paymentIntent.status === 'succeeded') {
            window.location.href = '/success';
        }
    }
    );
});