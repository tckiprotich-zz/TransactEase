using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransactEase.Models.Stripe
{
	public record AddStripePayment(
		string CustomerId,
		string ReceiptEmail,
		string Description,
		string Currency,
		long Amount);
}