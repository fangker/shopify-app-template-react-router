---
title: DeliveryProfileItem - GraphQL Admin
description: >-
  A product and the subset of associated variants that are part of this delivery
  profile.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Profile​Item

object

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

A product and the subset of associated variants that are part of this delivery profile.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* product

  [Product!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  A product associated with this profile.

* variants

  [Product​Variant​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

  non-null

  The product variants associated with this delivery profile.

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

  * sort​Key

    [Product​Variant​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantSortKeys)

    DeprecatedDefault:ID

  ***

***

## Map

### Fields and connections with this object

* [DeliveryProfile.profileItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.profileItems)
* [DeliveryProfileItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection#returns-nodes)
* [DeliveryProfileItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItemEdge#field-DeliveryProfileItemEdge.fields.node)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## DeliveryProfileItem Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
