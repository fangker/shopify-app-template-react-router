---
title: DiscountCombinesWith - GraphQL Admin
description: >-
  The [discount
  classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)

  that you can use in combination with

  [Shopify discount
  types](https://help.shopify.com/manual/discounts/discount-types).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Combines​With

object

Requires Apps must have `read_discounts` access scope.

The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

## Fields

* order​Discounts

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount combines with the [order discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

* product​Discounts

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount combines with the [product discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

* product​Discounts​With​Tags​On​Same​Cart​Line

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Controls which product discounts can apply together on the same cart line. By default, only one product discount applies per line. Available only on a Shopify Plus plan and requires the `productDiscounts` field to be set to `true`.

  For discounts to apply together, they must match tags in both directions. Each discount has two tag sets: the tags that identify the discount, and the tags that it agrees to apply with. Use the `tags` field on the discount input to set the discount's own tags. This field returns the tags that this discount agrees to apply with. Two discounts apply together only if each one allows at least one tag that the other is tagged with. Any number of product discounts can apply to the same line if this two-way match holds for every pair in the group.

  Example: Discount A is tagged with `LOYALTY` and allows `SEASONAL`, and Discount B is tagged with `SEASONAL` and allows `LOYALTY`. They apply together. To add a third discount, it must meet the same mutual-match rule with both A and B.

* shipping​Discounts

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount combines with the [shipping discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

***

## Map

### Fields with this object

* [DiscountAutomaticApp.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.combinesWith)
* [DiscountAutomaticBasic.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.combinesWith)
* [DiscountAutomaticBxgy.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.combinesWith)
* [DiscountAutomaticFreeShipping.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.combinesWith)
* [DiscountCodeApp.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.combinesWith)
* [DiscountCodeBasic.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.combinesWith)
* [DiscountCodeBxgy.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.combinesWith)
* [DiscountCodeFreeShipping.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.combinesWith)
* [PriceRule.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.combinesWith)
