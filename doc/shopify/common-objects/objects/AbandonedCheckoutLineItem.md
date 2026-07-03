---
title: AbandonedCheckoutLineItem - GraphQL Admin
description: A single line item in an abandoned checkout.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Abandoned​Checkout​Line​Item

object

Requires `read_orders` access scope. Also: The user must have manage\_abandoned\_checkouts permission. When called by Shopify POS, the user must have the view\_abandoned\_checkouts retail permission.

A single line item in an abandoned checkout.

## Fields

* components

  [\[Abandoned​Checkout​Line​Item​Component!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemComponent)

  A list of line item components for this line item.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  A list of extra information that has been added to the line item.

* discount​Allocations

  [Discount​Allocation​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection)

  non-null

  Discount allocations that have been applied on the line item.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* discounted​Total​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  Final total price for the entire quantity of this line item, including discounts.

* discounted​Total​Price​With​Code​Discount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total price for the entire quantity of this line item, after all discounts are applied, at both the line item and code-based line item level.

* discounted​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The price of a single variant unit after discounts are applied at the line item level, in shop and presentment currencies.

* discounted​Unit​Price​With​Code​Discount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The price of a single variant unit after all discounts are applied, at both the line item and code-based line item level.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image associated with the line item's variant or product. NULL if the line item has no product, or if neither the variant nor the product have an image.

* original​Total​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  Original total price for the entire quantity of this line item, before discounts.

* original​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  Original price for a single unit of this line item, before discounts.

* parent​Relationship

  [Abandoned​Checkout​Line​Item​Parent​Relationship](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemParentRelationship)

  The parent relationship for this line item.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  Product for this line item. NULL for custom line items and products that were deleted after checkout began.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the line item.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  SKU for the inventory item associated with the variant, if any.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Title of the line item. Defaults to the product's title.

* variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  Product variant for this line item. NULL for custom line items and variants that were deleted after checkout began.

* variant​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Title of the variant for this line item. NULL for custom line items and products that don't have distinct variants.

***

## Map

### Fields and connections with this object

* [AbandonedCheckout.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.lineItems)
* [AbandonedCheckoutLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection#returns-nodes)
* [AbandonedCheckoutLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemEdge#field-AbandonedCheckoutLineItemEdge.fields.node)
* [AbandonedCheckoutLineItemParentRelationship.parent](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemParentRelationship#field-AbandonedCheckoutLineItemParentRelationship.fields.parent)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## AbandonedCheckoutLineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
