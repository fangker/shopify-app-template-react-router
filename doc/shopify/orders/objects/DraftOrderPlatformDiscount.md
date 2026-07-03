---
title: DraftOrderPlatformDiscount - GraphQL Admin
description: The platform discounts applied to the draft order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Draft​Order​Platform​Discount

object

Requires `read_draft_orders` access scope.

The platform discounts applied to the draft order.

## Fields

* allocations

  [\[Draft​Order​Platform​Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscountAllocation)

  non-null

  Price reduction allocations across the draft order's lines.

* automatic​Discount

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount is an automatic discount.

* bxgy​Discount

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount is a buy x get y discount.

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  If a code-based discount, the code used to add the discount.

* discount​Classes

  [\[Discount​Class!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-null

  The discount classes.

* discount​Node

  [Discount​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode)

  The discount node for the platform discount.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the discount.

* presentation​Level

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Whether the discount is line, order or shipping level.

* short​Summary

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The short summary of the discount.

* summary

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The summary of the discount.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the discount.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The discount total amount in shop currency.

* total​Amount​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount of money discounted, with values shown in both shop currency and presentment currency.

* discount​Class

  [Discount​Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  non-nullDeprecated

***

## Map

### Fields with this object

* [CalculatedDraftOrder.platformDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.platformDiscounts)
* [DraftOrder.platformDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.platformDiscounts)
