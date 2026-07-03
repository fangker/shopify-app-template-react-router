---
title: DraftOrderPlatformDiscountAllocation - GraphQL Admin
description: Price reduction allocations across the draft order's lines.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscountAllocation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscountAllocation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Draft​Order​Platform​Discount​Allocation

object

Requires `read_draft_orders` access scope.

Price reduction allocations across the draft order's lines.

## Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the allocation.

* quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The quantity of the target being discounted.

* reduction​Amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Amount of the discount allocated to the target.

* reduction​Amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  Amount of the discount allocated to the target in both shop currency and presentment currency.

* target

  [Draft​Order​Platform​Discount​Allocation​Target](https://shopify.dev/docs/api/admin-graphql/latest/unions/DraftOrderPlatformDiscountAllocationTarget)

  The element of the draft being discounted.

***

## Map

### Fields with this object

* [DraftOrderPlatformDiscount.allocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount#field-DraftOrderPlatformDiscount.fields.allocations)
