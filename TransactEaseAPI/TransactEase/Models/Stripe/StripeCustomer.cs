using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransactEase.Models.Stripe
{
	public record StripeCustomer(
		string Name,
		string Email,
		string CustomerId);
}