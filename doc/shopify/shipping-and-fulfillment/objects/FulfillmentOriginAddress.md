---
title: FulfillmentOriginAddress - GraphQL Admin
description: >-
  The address at which the fulfillment occurred. This object is intended for tax

  purposes, as a full address is required for tax providers to accurately

  calculate taxes. Typically this is the address of the warehouse or fulfillment

  center. To retrieve a fulfillment location's address, use the
  `assignedLocation` field on the

  [`FulfillmentOrder`](/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  object instead.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOriginAddress
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOriginAddress.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Origin​Address

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

The address at which the fulfillment occurred. This object is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The street address of the fulfillment location.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address. Typically the number of the apartment, suite, or unit.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The city in which the fulfillment location is located.

* country​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The country code of the fulfillment location.

* province​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The province code of the fulfillment location.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip code of the fulfillment location.

***

## Map

### Fields with this object

* [Fulfillment.originAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.originAddress)
