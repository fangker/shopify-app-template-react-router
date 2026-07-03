---
title: SaleTax - GraphQL Admin
description: The tax allocated to a sale from a single tax line.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Sale​Tax

object

Requires `read_orders` access scope.

The tax allocated to a sale from a single tax line.

## Fields

* amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The portion of the total tax amount on the related sale that comes from the associated tax line.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the sale tax.

* tax​Line

  [Tax​Line!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

  non-null

  The tax line associated with the sale.

***

## Map

### Fields with this object

* [AdditionalFeeSale.taxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.taxes)
* [AdjustmentSale.taxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.taxes)
* [DutySale.taxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DutySale#field-DutySale.fields.taxes)
* [FeeSale.taxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/FeeSale#field-FeeSale.fields.taxes)
* [GiftCardSale.taxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSale#field-GiftCardSale.fields.taxes)
* [ProductSale.taxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSale#field-ProductSale.fields.taxes)
* [Sale.taxes](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale#fields-taxes)
* [ShippingLineSale.taxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.taxes)
* [TipSale.taxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/TipSale#field-TipSale.fields.taxes)
* [UnknownSale.taxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnknownSale#field-UnknownSale.fields.taxes)
