---
title: CustomerShopPayAgreement - GraphQL Admin
description: Represents a Shop Pay card instrument for customer payment method.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerShopPayAgreement
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerShopPayAgreement.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Shop​Pay​Agreement

object

Requires `read_customers` access scope. Also: Requires `read_customer_payment_methods` scope.

Represents a Shop Pay card instrument for customer payment method.

## Fields

* billing​Address

  [Customer​Credit​Card​Billing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCreditCardBillingAddress)

  The billing address of the card.

* expires​Soon

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the card is about to expire.

* expiry​Month

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The expiry month of the card.

* expiry​Year

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The expiry year of the card.

* inactive

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the Shop Pay billing agreement is inactive.

* is​Revocable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  The payment method can be revoked if there are no active subscription contracts.

* last​Digits

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The last 4 digits of the card.

* masked​Number

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The masked card number with only the last 4 digits displayed.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the card holder.

***

## Map

### Possible type in

* [Customer​Payment​Instrument](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument)
