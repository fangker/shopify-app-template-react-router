---
title: CalculatedDraftOrderLineItem - GraphQL Admin
description: The calculated line item for a draft order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Calculated​Draft​Order​Line​Item

object

Requires `read_draft_orders` access scope.

The calculated line item for a draft order.

## Fields

* applied​Discount

  [Draft​Order​Applied​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount)

  The custom applied discount.

* approximate​Discounted​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The `discountedTotal` divided by `quantity`, equal to the average value of the line item price per unit after discounts are applied. This value doesn't include discounts applied to the entire draft order.

* components

  [\[Calculated​Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem)

  non-null

  The components of the draft order line item.

* custom

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the line item is custom (`true`) or contains a product variant (`false`).

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  A list of attributes that represent custom features or special requests.

* custom​Attributes​V2

  [\[Typed​Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TypedAttribute)

  non-null

  The list of additional information (metafields) with the associated types.

* discounted​Total

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total price with discounts applied.

* discounted​Total​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total price with discounts applied.

* fulfillment​Service

  [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  Name of the service provider who fulfilled the order.

  Valid values are either **manual** or the name of the provider. For example, **amazon**, **shipwire**.

  Deleted fulfillment services will return null.

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image associated with the draft order line item.

* is​Gift​Card

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the line item represents the purchase of a gift card.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the product.

* original​Total

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total price, excluding discounts, equal to the original unit price multiplied by quantity.

* original​Total​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total price excluding discounts, equal to the original unit price multiplied by quantity.

* original​Unit​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The line item price without any discounts applied.

* original​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The price without any discounts applied.

* original​Unit​Price​With​Currency

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The original custom line item input price.

* price​Override

  [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  The price override for the line item.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product for the line item.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of items. For a bundle item, this is the quantity of bundles, not the quantity of items contained in the bundles themselves.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether physical shipping is required for the variant.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The SKU number of the product variant.

* taxable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the variant is taxable.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the product or variant. This field only applies to custom line items.

* total​Discount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The total value of the discount.

* total​Discount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total discount amount.

* uuid

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The UUID of the draft order line item. Must be unique and consistent across requests. This field is mandatory in order to manipulate drafts with bundles.

* variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variant for the line item.

* variant​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the variant.

* vendor

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the vendor who created the product variant.

* weight

  [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

  The weight unit and value.

### Deprecated fields

* bundle​Components

  [\[Calculated​Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem)

  non-nullDeprecated

* discounted​Unit​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-nullDeprecated

* discounted​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-nullDeprecated

***

## Map

### Fields with this object

* [CalculatedDraftOrder.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.lineItems)
* [CalculatedDraftOrderLineItem.components](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.components)

### Possible type in

* [Draft​Order​Platform​Discount​Allocation​Target](https://shopify.dev/docs/api/admin-graphql/latest/unions/DraftOrderPlatformDiscountAllocationTarget)
