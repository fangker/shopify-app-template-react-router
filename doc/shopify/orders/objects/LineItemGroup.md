---
title: LineItemGroup - GraphQL Admin
description: >-
  The information for [line

  items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)
  that

  are part of a bundle. When a bundle is purchased, each component line item
  references its
  [`LineItemGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemGroup)
  through the
  [`lineItemGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-lineItemGroup)

  field to maintain the relationship with the bundle.


  The parent bundle's product, variant, and custom attributes enable apps to
  group

  and display bundle components in order management systems, transactional
  emails,

  and other contexts where understanding the bundle structure is needed.


  Learn more about [product
  bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemGroup'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemGroup.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Line​Item​Group

object

Requires `read_orders` access scope.

The information for [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) that are part of a bundle. When a bundle is purchased, each component line item references its [`LineItemGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemGroup) through the [`lineItemGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-lineItemGroup) field to maintain the relationship with the bundle.

The parent bundle's product, variant, and custom attributes enable apps to group and display bundle components in order management systems, transactional emails, and other contexts where understanding the bundle structure is needed.

Learn more about [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).

## Fields

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  A list of attributes that represent custom features or special requests.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* product​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  ID of the product of the line item group.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  Quantity of the line item group on the order.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Title of the line item group.

* variant​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  ID of the variant of the line item group.

* variant​Sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  SKU of the variant of the line item group.

***

## Map

### Fields with this object

* [LineItem.lineItemGroup](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.lineItemGroup)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## LineItemGroup Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
