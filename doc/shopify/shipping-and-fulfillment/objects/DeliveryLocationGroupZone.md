---
title: DeliveryLocationGroupZone - GraphQL Admin
description: Links a location group with a zone and the associated method definitions.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Location​Group​Zone

object

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

Links a location group with a zone and the associated method definitions.

## Fields

* method​Definition​Counts

  [Delivery​Method​Definition​Counts!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinitionCounts)

  non-null

  The number of method definitions for the zone.

* method​Definitions

  [Delivery​Method​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection)

  non-null

  The method definitions associated to a zone and location group.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * eligible

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Return only eligible or ineligible method definitions.

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

  * sort​Key

    [Method​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MethodDefinitionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * type

    [Delivery​Method​Definition​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodDefinitionType)

    Return only merchant or participant method definitions.

  ***

* zone

  [Delivery​Zone!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone)

  non-null

  The zone associated to a location group.

***

## Map

### Fields and connections with this object

* [DeliveryLocationGroupZoneConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryLocationGroupZoneConnection#returns-nodes)
* [DeliveryLocationGroupZoneEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZoneEdge#field-DeliveryLocationGroupZoneEdge.fields.node)
* [DeliveryProfileLocationGroup.locationGroupZones](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup#field-DeliveryProfileLocationGroup.fields.locationGroupZones)
