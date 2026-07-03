---
title: DeliveryProfileLocationGroup - GraphQL Admin
description: Links a location group with zones. Both are associated to a delivery profile.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Profile​Location​Group

object

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

Links a location group with zones. Both are associated to a delivery profile.

## Fields

* countries​In​Any​Zone

  [\[Delivery​Country​And​Zone!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountryAndZone)

  non-null

  The countries already selected in any zone for the specified location group.

* location​Group

  [Delivery​Location​Group!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup)

  non-null

  The collection of locations that make up the specified location group.

* location​Group​Zones

  [Delivery​Location​Group​Zone​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryLocationGroupZoneConnection)

  non-null

  The applicable zones associated to the specified location group.

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

***

## Map

### Fields with this object

* [DeliveryProfile.profileLocationGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.profileLocationGroups)
