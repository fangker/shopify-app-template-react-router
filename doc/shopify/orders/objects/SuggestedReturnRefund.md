---
title: SuggestedReturnRefund - GraphQL Admin
description: |-
  Represents a return refund suggested by Shopify based on the items being
  reimbursed. You can then use the suggested refund object to generate an actual
  refund for the return.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnRefund
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnRefund.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Suggested​Return​Refund

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope. Also: Requires the `read_returns` access scope.

Represents a return refund suggested by Shopify based on the items being reimbursed. You can then use the suggested refund object to generate an actual refund for the return.

## Fields

* amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total monetary value to be refunded in shop and presentment currencies.

* discounted​Subtotal

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of all the discounted prices of the line items being refunded.

* maximum​Refundable

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total monetary value available to refund in shop and presentment currencies.

* refund​Duties

  [\[Refund​Duty!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty)

  non-null

  A list of duties to be refunded from the order.

* shipping

  [Shipping​Refund!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRefund)

  non-null

  The shipping costs to be refunded from the order.

* subtotal

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of all the prices of the line items being refunded in shop and presentment currencies.

* suggested​Transactions

  [\[Suggested​Order​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction)

  non-null

  A list of suggested order transactions.

* total​Cart​Discount​Amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total cart discount amount that was applied to all line items in this refund.

* total​Duties

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive.

* total​Tax

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of the taxes being refunded in shop and presentment currencies. The value must be positive.

***

## Map
