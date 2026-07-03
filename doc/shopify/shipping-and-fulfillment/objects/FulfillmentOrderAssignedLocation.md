---
title: FulfillmentOrderAssignedLocation - GraphQL Admin
description: >-
  The fulfillment order's assigned location. This is the location where the
  fulfillment is expected to happen.

   The fulfillment order's assigned location might change in the following cases:

    - The fulfillment order has been entirely moved to a new location. For example, the [fulfillmentOrderMove](
      https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove
      ) mutation has been called, and you see the original fulfillment order in the [movedFulfillmentOrder](
      https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove#field-fulfillmentordermovepayload-movedfulfillmentorder
      ) field within the mutation's response.

    - Work on the fulfillment order has not yet begun, which means that the fulfillment order has the
        [OPEN](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-open),
        [SCHEDULED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-scheduled), or
        [ON_HOLD](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-onhold)
        status, and the shop's location properties might be undergoing edits (for example, in the Shopify admin).

  If the [fulfillmentOrderMove](

  https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove

  ) mutation has moved the fulfillment order's line items to a new location,

  but hasn't moved the fulfillment order instance itself, then the original
  fulfillment order's assigned location

  doesn't change.

  This happens if the fulfillment order is being split during the move, or if
  all line items can be moved

  to an existing fulfillment order at a new location.


  Once the fulfillment order has been taken into work or canceled,

  which means that the fulfillment order has the

  [IN_PROGRESS](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-inprogress),

  [CLOSED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-closed),

  [CANCELLED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-cancelled),
  or

  [INCOMPLETE](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-incomplete)

  status, `FulfillmentOrderAssignedLocation` acts as a snapshot of the shop's
  location content.

  Up-to-date shop's location data may be queried through [location](
    https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderAssignedLocation#field-fulfillmentorderassignedlocation-location
  ) connection.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderAssignedLocation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderAssignedLocation.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Fulfillment​Order​Assigned​Location

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

The fulfillment order's assigned location. This is the location where the fulfillment is expected to happen.

The fulfillment order's assigned location might change in the following cases:

* The fulfillment order has been entirely moved to a new location. For example, the [fulfillmentOrderMove](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove) mutation has been called, and you see the original fulfillment order in the [movedFulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove#field-fulfillmentordermovepayload-movedfulfillmentorder) field within the mutation's response.

* Work on the fulfillment order has not yet begun, which means that the fulfillment order has the [OPEN](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-open), [SCHEDULED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-scheduled), or [ON\_HOLD](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-onhold) status, and the shop's location properties might be undergoing edits (for example, in the Shopify admin).

If the [fulfillmentOrderMove](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove) mutation has moved the fulfillment order's line items to a new location, but hasn't moved the fulfillment order instance itself, then the original fulfillment order's assigned location doesn't change. This happens if the fulfillment order is being split during the move, or if all line items can be moved to an existing fulfillment order at a new location.

Once the fulfillment order has been taken into work or canceled, which means that the fulfillment order has the [IN\_PROGRESS](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-inprogress), [CLOSED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-closed), [CANCELLED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-cancelled), or [INCOMPLETE](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-incomplete) status, `FulfillmentOrderAssignedLocation` acts as a snapshot of the shop's location content. Up-to-date shop's location data may be queried through [location](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderAssignedLocation#field-fulfillmentorderassignedlocation-location) connection.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first line of the address for the location.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address for the location.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The city of the location.

* country​Code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The two-letter country code of the location.

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location where the fulfillment is expected to happen. This value might be different from `FulfillmentOrderAssignedLocation` if the location's attributes were updated after the fulfillment order was taken into work of canceled.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the location.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The phone number of the location.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The province of the location.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The ZIP code of the location.

***

## Map

### Fields with this object

* [FulfillmentOrder.assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.assignedLocation)
