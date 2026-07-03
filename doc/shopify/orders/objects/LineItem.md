---
title: LineItem - GraphQL Admin
description: >-
  The `LineItem` object represents a single product or service that a customer
  purchased in an

  [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  Each line item is associated with a

  [product
  variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  and can have multiple [discount
  allocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation).

  Line items contain details about what was purchased, including the product
  variant, quantity, pricing,

  and fulfillment status.


  Use the `LineItem` object to manage the following processes:


  - [Track the quantity of
  items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions)

  ordered, fulfilled, and unfulfilled.

  - [Calculate
  prices](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders),
  including discounts and taxes.

  - Manage fulfillment through [fulfillment
  services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps).

  - Manage
  [returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)
  and
  [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges).

  - Handle
  [subscriptions](https://shopify.dev/docs/apps/build/purchase-options/subscriptions)
  and recurring orders.


  Line items can also include custom attributes and properties, allowing
  merchants to add specific details

  about each item in an order. Learn more about

  [managing orders and
  fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Line​Item

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

The `LineItem` object represents a single product or service that a customer purchased in an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Each line item is associated with a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) and can have multiple [discount allocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation). Line items contain details about what was purchased, including the product variant, quantity, pricing, and fulfillment status.

Use the `LineItem` object to manage the following processes:

* [Track the quantity of items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions) ordered, fulfilled, and unfulfilled.
* [Calculate prices](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders), including discounts and taxes.
* Manage fulfillment through [fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps).
* Manage [returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges).
* Handle [subscriptions](https://shopify.dev/docs/apps/build/purchase-options/subscriptions) and recurring orders.

Line items can also include custom attributes and properties, allowing merchants to add specific details about each item in an order. Learn more about [managing orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

## Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The subscription contract associated with this line item.

* current​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of units ordered, excluding refunded and removed units.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  A list of attributes that represent custom features or special requests.

* discount​Allocations

  [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation)

  non-null

  The discounts that have been allocated to the line item by discount applications, including discounts allocated to refunded and removed quantities.

* discounted​Total​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total discounted price of the line item in shop and presentment currencies, including refunded and removed quantities. This value doesn't include order-level discounts. Code-based discounts aren't included by default.

  * with​Code​Discounts

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to include code-based discounts in the total.

  ***

* discounted​Unit​Price​After​All​Discounts​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The approximate unit price of the line item in shop and presentment currencies. This value includes discounts applied to refunded and removed quantities.

* discounted​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The approximate unit price of the line item in shop and presentment currencies. This value includes line-level discounts and discounts applied to refunded and removed quantities. It doesn't include order-level or code-based discounts.

* duties

  [\[Duty!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Duty)

  non-null

  The duties associated with the line item.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image associated to the line item's variant.

  * crop

    [Crop​Region](https://shopify.dev/docs/api/admin-graphql/latest/enums/CropRegion)

    Deprecated

    ### Arguments

  * max​Height

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  * max​Width

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Deprecated

  * scale

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    DeprecatedDefault:1

  ***

* is​Gift​Card

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the line item represents the purchase of a gift card.

* line​Item​Group

  [Line​Item​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemGroup)

  The line item group associated to the line item.

* merchant​Editable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the line item can be edited or not.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the product, optionally appended with the title of the variant (if applicable).

* non​Fulfillable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total number of units that can't be fulfilled. For example, if items have been refunded, or the item is not something that can be fulfilled, like a tip. Please see the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object for more fulfillment details.

* original​Total​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  In shop and presentment currencies, the total price of the line item when the order was created. This value doesn't include discounts.

* original​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  In shop and presentment currencies, the unit price of the line item when the order was created. This value doesn't include discounts.

* price​After​All​Discounts​Before​Taxes​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total price of the line item in shop and presentment currencies, after all discounts are applied and excluding refunded and removed quantities. This value doesn't include taxes.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The Product object associated with this line item's variant.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of units ordered, including refunded and removed units.

* refundable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of units ordered, excluding refunded units and removed units.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether physical shipping is required for the variant.

* restockable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the line item can be restocked.

* selling​Plan

  [Line​Item​Selling​Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemSellingPlan)

  The selling plan details associated with the line item.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The variant SKU number.

* staff​Member

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  Staff attributed to the line item.

* suggested​Return​Reason​Definitions

  [Return​Reason​Definition​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection)

  Return reasons suggested based on the line item's product category in Shopify's product taxonomy. Use [`returnReasonDefinitions`](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions) to access the full library of available reasons.

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

* taxable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the variant is taxable.

* tax​Lines

  [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

  non-null

  The taxes charged for the line item, including taxes charged for refunded and removed quantities.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    Truncate the array result to this size.

  ***

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the product at time of order creation.

* total​Discount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total discount allocated to the line item in shop and presentment currencies, including the total allocated to refunded and removed quantities. This value doesn't include order-level discounts.

* unfulfilled​Discounted​Total​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  In shop and presentment currencies, the total discounted price of the unfulfilled quantity for the line item.

* unfulfilled​Original​Total​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  In shop and presentment currencies, the total price of the unfulfilled quantity for the line item. This value doesn't include discounts.

* unfulfilled​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of units not yet fulfilled.

* variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The Variant object associated with this line item.

* variant​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the variant at time of order creation.

* vendor

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the vendor who made the variant.

* weight

  [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

  The weight of a line item unit.

### Deprecated fields

* can​Restock

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* discounted​Total

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* discounted​Unit​Price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* fulfillable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

* fulfillment​Service

  [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  Deprecated

* fulfillment​Status

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-nullDeprecated

* original​Total

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* original​Unit​Price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* total​Discount

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* unfulfilled​Discounted​Total

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* unfulfilled​Original​Total

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [ExchangeLineItem.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem#field-ExchangeLineItem.fields.lineItems)
* [FulfillmentLineItem.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem#field-FulfillmentLineItem.fields.lineItem)
* [FulfillmentOrderLineItem.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-FulfillmentOrderLineItem.fields.lineItem)
* [GiftCard.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard#field-GiftCard.fields.lineItem)
* [GiftCardSale.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSale#field-GiftCardSale.fields.lineItem)
* [LineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection#returns-nodes)
* [LineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemEdge#field-LineItemEdge.fields.node)
* [Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.lineItems)
* [Order.nonFulfillableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.nonFulfillableLineItems)
* [OrderStagedChangeDecrementItem.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeDecrementItem#field-OrderStagedChangeDecrementItem.fields.lineItem)
* [OrderStagedChangeIncrementItem.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeIncrementItem#field-OrderStagedChangeIncrementItem.fields.lineItem)
* [ProductSale.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSale#field-ProductSale.fields.lineItem)
* [RefundLineItem.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.lineItem)
* [TipSale.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/TipSale#field-TipSale.fields.lineItem)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## LineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
