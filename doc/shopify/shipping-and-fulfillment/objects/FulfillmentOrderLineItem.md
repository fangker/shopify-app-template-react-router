---
title: FulfillmentOrderLineItem - GraphQL Admin
description: >-
  Associates an order line item with the quantities that require fulfillment as

  part of a fulfillment order. Each Fulfillment Order Line Item object tracks
  the

  total quantity to fulfill and the remaining quantity yet to be fulfilled,
  along

  with details about the line item being fulfilled and pricing information.


  The line item provides additional fulfillment data including whether the item

  requires shipping. Financial summaries show pricing details with discounts

  applied, while warning messages alert merchants to any issues that might
  affect fulfillment.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​Line​Item

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope or `read_third_party_fulfillment_orders` access scope.

Associates an order line item with the quantities that require fulfillment as part of a fulfillment order. Each Fulfillment Order Line Item object tracks the total quantity to fulfill and the remaining quantity yet to be fulfilled, along with details about the line item being fulfilled and pricing information.

The line item provides additional fulfillment data including whether the item requires shipping. Financial summaries show pricing details with discounts applied, while warning messages alert merchants to any issues that might affect fulfillment.

## Fields

* financial​Summaries

  [\[Fulfillment​Order​Line​Item​Financial​Summary!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemFinancialSummary)

  non-null

  The financial summary for the Fulfillment Order's Line Items.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image associated to the line item's variant.

* inventory​Item​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the inventory item.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  non-null

  The associated order line item.

* product​Title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the product.

* remaining​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of units remaining to be fulfilled.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether physical shipping is required for the variant.

* shipping​Line

  [Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

  The shipping line associated with this line item.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The variant SKU number.

* total​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total number of units to be fulfilled.

* variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variant associated to the fulfillment order line item.

* variant​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the variant.

* vendor

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the vendor who made the variant.

* warnings

  [\[Fulfillment​Order​Line​Item​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemWarning)

  non-null

  Warning messages for a fulfillment order line item.

* weight

  [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

  The weight of a line item unit.

* original​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [FulfillmentOrder.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.lineItems)
* [FulfillmentOrderLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLineItemConnection#returns-nodes)
* [FulfillmentOrderLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemEdge#field-FulfillmentOrderLineItemEdge.fields.node)
* [FulfillmentOrderLocationForMove.availableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-FulfillmentOrderLocationForMove.fields.availableLineItems)
* [FulfillmentOrderLocationForMove.unavailableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-FulfillmentOrderLocationForMove.fields.unavailableLineItems)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## FulfillmentOrderLineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
