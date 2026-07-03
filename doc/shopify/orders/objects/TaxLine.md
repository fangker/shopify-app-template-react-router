---
title: TaxLine - GraphQL Admin
description: >-
  A tax applied to a

  [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)
  or
  [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine).

  Includes the tax amount, rate, title, and whether the channel that submitted
  the

  tax is liable for remitting it.


  The tax amount in both shop and presentment currencies after applying
  discounts.

  Includes information about the tax rate, whether the channel is liable for

  remitting the tax, and other tax-related details.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Tax​Line

object

A tax applied to a [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) or [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine). Includes the tax amount, rate, title, and whether the channel that submitted the tax is liable for remitting it.

The tax amount in both shop and presentment currencies after applying discounts. Includes information about the tax rate, whether the channel is liable for remitting the tax, and other tax-related details.

## Fields

* channel​Liable

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the channel that submitted the tax line is liable for remitting. A value of null indicates unknown liability for this tax line.

* price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount of tax, in shop and presentment currencies, after discounts and before returns.

* rate

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The proportion of the line item price that the tax represents as a decimal.

* rate​Percentage

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The proportion of the line item price that the tax represents as a percentage.

* source

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The source of the tax.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the tax.

* price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

***

## Map

### Fields with this object

* [AbandonedCheckout.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.taxLines)
* [AdditionalFee.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFee#field-AdditionalFee.fields.taxLines)
* [CalculatedDraftOrder.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.taxLines)
* [CalculatedOrder.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.taxLines)
* [DraftOrder.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.taxLines)
* [DraftOrderLineItem.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.taxLines)
* [Duty.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/Duty#field-Duty.fields.taxLines)
* [LineItem.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.taxLines)
* [Order.currentTaxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.currentTaxLines)
* [Order.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.taxLines)
* [SaleAdditionalFee.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleAdditionalFee#field-SaleAdditionalFee.fields.taxLines)
* [SaleTax.taxLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax#field-SaleTax.fields.taxLine)
* [ShippingLine.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine#field-ShippingLine.fields.taxLines)
