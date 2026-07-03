---
title: DraftOrderAppliedDiscount - GraphQL Admin
description: The order-level discount applied to a draft order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Draft​Order​Applied​Discount

object

Requires `read_draft_orders` access scope.

The order-level discount applied to a draft order.

## Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount of money discounted, with values shown in both shop currency and presentment currency.

* description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Description of the order-level discount.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Name of the order-level discount.

* value

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The order level discount amount. If `valueType` is `"percentage"`, then `value` is the percentage discount.

* value​Type

  [Draft​Order​Applied​Discount​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderAppliedDiscountType)

  non-null

  Type of the order-level discount.

### Deprecated fields

* amount

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* amount​V2

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-nullDeprecated

***

## Map

### Fields with this object

* [CalculatedDraftOrder.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.appliedDiscount)
* [CalculatedDraftOrderLineItem.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.appliedDiscount)
* [DraftOrder.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.appliedDiscount)
* [DraftOrderLineItem.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.appliedDiscount)
