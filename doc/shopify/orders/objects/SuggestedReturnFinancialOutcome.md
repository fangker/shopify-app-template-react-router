---
title: SuggestedReturnFinancialOutcome - GraphQL Admin
description: |-
  Represents a return financial outcome suggested by Shopify based on the items
  being reimbursed. You can then use the suggested outcome object to generate an
  actual refund or invoice for the return.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnFinancialOutcome
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnFinancialOutcome.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Suggested​Return​Financial​Outcome

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

Represents a return financial outcome suggested by Shopify based on the items being reimbursed. You can then use the suggested outcome object to generate an actual refund or invoice for the return.

## Fields

* discounted​Subtotal

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of all the discounted prices of the line items being refunded.

* financial​Transfer

  [Return​Outcome​Financial​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/unions/ReturnOutcomeFinancialTransfer)

  The financial transfer details for the return outcome.

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

* total​Additional​Fees

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of all the additional fees being refunded in shop and presentment currencies. The value must be positive.

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

### Fields with this object

* [Return.suggestedFinancialOutcome](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.suggestedFinancialOutcome)
