---
title: ReturnableFulfillmentLineItem - GraphQL Admin
description: A returnable fulfillment line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Returnable​Fulfillment​Line​Item

object

Requires `read_orders` access scope. Also: Requires the `read_returns` access scope or `read_marketplace_returns` access scope.

A returnable fulfillment line item.

## Fields

* fulfillment​Line​Item

  [Fulfillment​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem)

  non-null

  The fulfillment line item that can be returned.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity available to be returned.

***

## Map

### Fields and connections with this object

* [ReturnableFulfillment.returnableFulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment#field-ReturnableFulfillment.fields.returnableFulfillmentLineItems)
* [ReturnableFulfillmentLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection#returns-nodes)
* [ReturnableFulfillmentLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItemEdge#field-ReturnableFulfillmentLineItemEdge.fields.node)
