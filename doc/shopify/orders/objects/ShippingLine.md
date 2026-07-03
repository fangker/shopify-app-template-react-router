---
title: ShippingLine - GraphQL Admin
description: |-
  The shipping method that customers select for an order. Includes pricing
  details, carrier information, and any applied discounts or taxes.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shipping​Line

object

The shipping method that customers select for an order. Includes pricing details, carrier information, and any applied discounts or taxes.

## Fields

* carrier​Identifier

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A reference to the carrier service that provided the rate. Present when the rate was computed by a third-party carrier service.

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A reference to the shipping method.

* current​Discounted​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The current shipping price after applying refunds, after applying discounts. If the parent \`order.taxesIncluded\`\` field is true, then this price includes taxes. Otherwise, this field is the pre-tax price.

* custom

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the shipping line is custom or not.

* delivery​Category

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The general classification of the delivery method.

* discount​Allocations

  [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation)

  non-null

  The discounts that have been allocated to the shipping line.

* discounted​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The shipping price after applying discounts. If the parent order.taxesIncluded field is true, then this price includes taxes. If not, it's the pre-tax price. As of API version 2024-07, this will be calculated including cart level discounts, such as the free shipping discount.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A globally-unique ID.

* is​Removed

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the shipping line has been removed.

* original​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The shipping price without any discounts applied. If the parent order.taxesIncluded field is true, then this price includes taxes. Otherwise, this field is the pre-tax price.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The phone number at the shipping address.

* shipping​Rate​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique identifier for the shipping rate. The format can change without notice and isn't meant to be shown to users.

* source

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Returns the rate source for the shipping line.

* tax​Lines

  [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

  non-null

  The TaxLine objects connected to this shipping line.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Returns the title of the shipping line.

### Deprecated fields

* discounted​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-nullDeprecated

* original​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-nullDeprecated

* price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* requested​Fulfillment​Service

  [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  Deprecated

***

## Map

### Fields and connections with this object

* [CalculatedDraftOrder.shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.shippingLine)
* [DraftOrder.shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.shippingLine)
* [FulfillmentOrderLineItem.shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-FulfillmentOrderLineItem.fields.shippingLine)
* [Order.shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.shippingLine)
* [Order.shippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.shippingLines)
* [OrderStagedChangeRemoveShippingLine.shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeRemoveShippingLine#field-OrderStagedChangeRemoveShippingLine.fields.shippingLine)
* [RefundShippingLine.shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundShippingLine#field-RefundShippingLine.fields.shippingLine)
* [ShippingLineConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShippingLineConnection#returns-nodes)
* [ShippingLineEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineEdge#field-ShippingLineEdge.fields.node)
* [ShippingLineSale.shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.shippingLine)

### Possible type in

* [Draft​Order​Platform​Discount​Allocation​Target](https://shopify.dev/docs/api/admin-graphql/latest/unions/DraftOrderPlatformDiscountAllocationTarget)
