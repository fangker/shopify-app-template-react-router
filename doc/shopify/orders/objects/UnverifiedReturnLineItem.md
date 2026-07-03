---
title: UnverifiedReturnLineItem - GraphQL Admin
description: An unverified return line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UnverifiedReturnLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/UnverifiedReturnLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Unverified​Return​Line​Item

object

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

An unverified return line item.

## Fields

* customer​Note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note from the customer that describes the item to be returned. Maximum length: 300 characters.

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

* return​Reason​Definition

  [Return​Reason​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition)

  The standardized reason for why the item is being returned.

* return​Reason​Note

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Additional information about the reason for the return. Maximum length: 255 characters.

* unit​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The unit price of the unverified return line item.

* unprocessed​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that has't been processed.

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

## UnverifiedReturnLineItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
* [Return​Line​Item​Type](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ReturnLineItemType)
