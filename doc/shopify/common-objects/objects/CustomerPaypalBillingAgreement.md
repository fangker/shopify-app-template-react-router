---
title: CustomerPaypalBillingAgreement - GraphQL Admin
description: Represents a PayPal instrument for customer payment method.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaypalBillingAgreement
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaypalBillingAgreement.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Paypal​Billing​Agreement

object

Requires `read_customers` access scope. Also: Requires `read_customer_payment_methods` scope.

Represents a PayPal instrument for customer payment method.

## Fields

* billing​Address

  [Customer​Payment​Instrument​Billing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentInstrumentBillingAddress)

  The billing address of this payment method.

* inactive

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the PayPal billing agreement is inactive.

* is​Revocable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the payment method can be revoked.The payment method can be revoked if there are no active subscription contracts.

* paypal​Account​Email

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The customers's PayPal account email address.

***

## Map

### Possible type in

* [Customer​Payment​Instrument](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument)
