---
title: CustomerVisitProductInfo - GraphQL Admin
description: >-
  This type returns the information about the product and product variant from a
  customer visit.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfo
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfo.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Visit​Product​Info

object

This type returns the information about the product and product variant from a customer visit.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product information. If `null`, then the product was deleted from the store.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the product that the customer requested.

* variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variant information, if the product variant exists.

***

## Map

### Fields and connections with this object

* [Abandonment.productsAddedToCart](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsAddedToCart)
* [Abandonment.productsViewed](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsViewed)
* [CustomerVisitProductInfoConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection#returns-nodes)
* [CustomerVisitProductInfoEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfoEdge#field-CustomerVisitProductInfoEdge.fields.node)
