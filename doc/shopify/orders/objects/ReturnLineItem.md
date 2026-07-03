---
title: ReturnLineItem - GraphQL Admin
description: >-
  An item that a customer returns from a fulfilled order. Links to the original
  [`FulfillmentLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem)

  and tracks quantities through the return process.


  The line item includes the customer's reason for returning the item and any

  additional notes. It also tracks processing status with separate quantities
  for

  items that are processable, processed, refundable, and refunded. You can apply

  optional restocking fees to cover handling costs.


  Learn more about [creating a
  return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Return​Line​Item

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

An item that a customer returns from a fulfilled order. Links to the original [`FulfillmentLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem) and tracks quantities through the return process.

The line item includes the customer's reason for returning the item and any additional notes. It also tracks processing status with separate quantities for items that are processable, processed, refundable, and refunded. You can apply optional restocking fees to cover handling costs.

Learn more about [creating a return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate).

## Fields

* customer​Note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note from the customer that describes the item to be returned. Maximum length: 300 characters.

* fulfillment​Line​Item

  [Fulfillment​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem)

  non-null

  The fulfillment line item from which items are returned.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* processable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that can be processed.

* processed​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that has been processed.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity being returned.

* refundable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that can be refunded.

* refunded​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that was refunded.

* restocking​Fee

  [Restocking​Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/RestockingFee)

  The restocking fee for the return line item.

* return​Reason​Definition

  [Return​Reason​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition)

  The standardized reason for why the item is being returned.

* return​Reason​Note

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Additional information about the reason for the return. Maximum length: 255 characters.

* total​Weight

  [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

  The total weight of the item.

* unprocessed​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that has't been processed.

* with​Code​Discounted​Total​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total line price after all discounts on the line item, including both line item level discounts and code-based line item discounts, are applied.

* return​Reason

  [Return​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnReason)

  non-nullDeprecated

***

## Map

No referencing types

***

## Interfaces

* * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

  * [Return​Line​Item​Type](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ReturnLineItemType)

    interface

***

## ReturnLineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Return​Line​Item​Type](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ReturnLineItemType)
