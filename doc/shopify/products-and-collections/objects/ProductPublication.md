---
title: ProductPublication - GraphQL Admin
description: Represents the channels where a product is published.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublication'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublication.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Product​Publication

object

Represents the channels where a product is published.

## Fields

* channel

  [Channel!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  non-null

  The channel where the product was or is published.

* is​Published

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the publication is published or not.

* product

  [Product!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  The product that was or is going to be published on the channel.

* publish​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date that the product was or is going to be published on the channel.

***

## Map

### Fields and connections with this object

* [ProductPublicationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection#returns-nodes)
* [ProductPublicationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublicationEdge#field-ProductPublicationEdge.fields.node)

***

## Mutations

* [product​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productPublish)

  mutation

  Deprecated

  * input

    [Product​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput)

    required

    ### Arguments

    Specifies the product to publish and the channels to publish it to.

  ***

***

## ProductPublication Mutations
