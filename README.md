# TransactEase
## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Webhooks](#webhooks)
- [Contributing](#contributing)
- [License](#license)

## Overview
 A powerful and secure Payment Gateway API that seamlessly integrates with various payment gateways. empowers merchants to offer secure and reliable payment experiences to their customers
## Prerequisites

Dependencies that you need to have installed or configured

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Stripe Account](https://stripe.com) with API keys (publishable key and secret key).



## Installation
```shell
# Clone the repository
git clone https://github.com/tckiprotich/TrasactEase.git

# Change into the project directory
cd TrasactEase

# Install dependencies
dotnet restore
```

## Configuration
Before running the application, you need to configure the following environment variables:
```shell
export STRIPE_PUBLISHABLE_KEY=your_publishable_key
export STRIPE_SECRET_KEY=your_secret_key
export STRIPE_WEBHOOK_SECRET=your_webhook_secret
export DOMAIN=your_domain
export STATIC_DIR=your_static_directory

```
Replace your_publishable_key, your_secret_key, your_webhook_secret, your_domain, and your_static_directory with your actual values from [Stripe Account](https://stripe.com).

## Usage
Cd into the ```Server ``` directory
```shell
dotnet run

```
## API Endpoints
- GET /config: Retrieve the publishable key configuration.
- POST /create-payment-intent: Create a payment intent.
- POST /webhook: Handle webhook events.

## Webhooks
  This project includes code to handle Stripe webhook events. It listens for events and processes them based on the event type. You can customize the webhook handling logic as needed.

## Contributing
  If you'd like to contribute to this project, please follow these guidelines:

1. Check for open issues or create a new one.
2. Fork the repository and create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request with a clear description of what you've done.

## License
   This project is licensed under the MIT License - see the LICENSE.md file for details.


