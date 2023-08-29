global using TransactEase.Models.Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace TransactEase.Contracts
{
    public interface IStripeAppService
    {
        Task<StripeCustomer> AddStripeCustomerAsync(AddStripeCustomer customer, CancellationToken ct);
		Task<StripePayment> AddStripePaymentAsync(AddStripePayment payment, CancellationToken ct);
    }
}