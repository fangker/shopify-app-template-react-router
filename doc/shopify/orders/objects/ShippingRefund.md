---
title: ShippingRefund - GraphQL Admin
description: Represents the shipping costs refunded on the Refund.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRefund'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRefund.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shipping​Refund

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Represents the shipping costs refunded on the Refund.

## Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The monetary value of the shipping fees to be refunded in shop and presentment currencies.

* maximum​Refundable​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The maximum amount of shipping fees currently refundable in shop and presentment currencies.

* tax​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The monetary value of the tax allocated to shipping fees to be refunded in shop and presentment currencies.

### Deprecated fields

* amount

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* maximum​Refundable

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* tax

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

***

## Map

### Fields with this object

* [SuggestedRefund.shipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedRefund#field-SuggestedRefund.fields.shipping)
* [SuggestedReturnFinancialOutcome.shipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnFinancialOutcome#field-SuggestedReturnFinancialOutcome.fields.shipping)
* [SuggestedReturnRefund.shipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnRefund#field-SuggestedReturnRefund.fields.shipping)
