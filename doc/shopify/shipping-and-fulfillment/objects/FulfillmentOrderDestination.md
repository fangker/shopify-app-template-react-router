---
title: FulfillmentOrderDestination - GraphQL Admin
description: Represents the destination where the items should be sent upon fulfillment.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderDestination
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderDestination.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​Destination

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope or `read_third_party_fulfillment_orders` access scope.

Represents the destination where the items should be sent upon fulfillment.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first line of the address of the destination.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address of the destination.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The city of the destination.

* company

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The company of the destination.

* country​Code

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The two-letter country code of the destination.

* email

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The email of the customer at the destination.

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first name of the customer at the destination.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The last name of the customer at the destination.

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location designated for the pick-up of the fulfillment order.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The phone number of the customer at the destination.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The province of the destination.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The ZIP code of the destination.

***

## Map

### Fields with this object

* [FulfillmentOrder.destination](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.destination)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## FulfillmentOrderDestination Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
