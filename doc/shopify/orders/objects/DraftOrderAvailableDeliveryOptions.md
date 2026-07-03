---
title: DraftOrderAvailableDeliveryOptions - GraphQL Admin
description: The available delivery options for a draft order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAvailableDeliveryOptions
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAvailableDeliveryOptions.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Draft​Order​Available​Delivery​Options

object

Requires `read_draft_orders` access scope.

The available delivery options for a draft order.

## Fields

* available​Local​Delivery​Rates

  [\[Draft​Order​Shipping​Rate!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderShippingRate)

  non-null

  The available local delivery rates for the draft order. Requires a customer with a valid shipping address and at least one line item.

* available​Local​Pickup​Options

  [\[Pickup​In​Store​Location!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PickupInStoreLocation)

  non-null

  The available local pickup options for the draft order. Requires at least one line item.

* available​Shipping​Rates

  [\[Draft​Order​Shipping​Rate!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderShippingRate)

  non-null

  The available shipping rates for the draft order. Requires a customer with a valid shipping address and at least one line item.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  Returns information about pagination of local pickup options.

***

## Map

No referencing types

***

## Queries

* [draft​Order​Available​Delivery​Options](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrderAvailableDeliveryOptions)

  query

  Available delivery options for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) based on the provided input. The query returns shipping rates, local delivery rates, and pickup locations that merchants can choose from when creating draft orders.

  Accepts draft order details including [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for shipping, and discounts to determine which delivery methods are available. Pagination parameters control the number of local pickup options returned.

  * input

    [Draft​Order​Available​Delivery​Options​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput)

    required

    ### Arguments

    The fields for the draft order.

  * local​Pickup​Count

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of local pickup options required.

  * local​Pickup​From

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The offset for the local pickup options.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The search term for the delivery options.

  * session​Token

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Unique token used to trace execution and help optimize the calculation.

  ***

***

## DraftOrderAvailableDeliveryOptions Queries

### Queried by

* [draft​Order​Available​Delivery​Options](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrderAvailableDeliveryOptions)
