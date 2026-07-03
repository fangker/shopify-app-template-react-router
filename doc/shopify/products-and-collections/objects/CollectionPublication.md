---
title: CollectionPublication - GraphQL Admin
description: >-
  Represents the publication status and settings for a collection across
  different

  sales channels. This tracks where collections are published, when they were

  published, and any channel-specific configuration.


  For example, a "Holiday Gifts" collection might be published to the online
  store

  and Facebook Shop but not to the POS channel, with different publication dates

  for each channel based on marketing strategy.


  Use `CollectionPublication` to:

  - Track collection visibility across multiple sales channels

  - Manage channel-specific collection settings and availability

  - Monitor publication history and timing for collections

  - Control where collections appear in customer-facing channels

  - Implement channel-specific collection management workflows


  Each publication record includes the channel information, publication status,

  and timing details. This enables merchants to control collection visibility

  strategically across their sales channels.


  Collections can have different publication settings per channel, allowing for

  targeted marketing and inventory management. For instance, wholesale
  collections

  might only be published to B2B channels while retail collections appear in

  consumer-facing channels.


  The publication system integrates with Shopify's broader channel management,

  ensuring collections appear consistently across the merchant's sales ecosystem

  while respecting channel-specific rules and permissions.


  Learn more about [sales channel
  management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublication
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublication.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Publication

object

Represents the publication status and settings for a collection across different sales channels. This tracks where collections are published, when they were published, and any channel-specific configuration.

For example, a "Holiday Gifts" collection might be published to the online store and Facebook Shop but not to the POS channel, with different publication dates for each channel based on marketing strategy.

Use `CollectionPublication` to:

* Track collection visibility across multiple sales channels
* Manage channel-specific collection settings and availability
* Monitor publication history and timing for collections
* Control where collections appear in customer-facing channels
* Implement channel-specific collection management workflows

Each publication record includes the channel information, publication status, and timing details. This enables merchants to control collection visibility strategically across their sales channels.

Collections can have different publication settings per channel, allowing for targeted marketing and inventory management. For instance, wholesale collections might only be published to B2B channels while retail collections appear in consumer-facing channels.

The publication system integrates with Shopify's broader channel management, ensuring collections appear consistently across the merchant's sales ecosystem while respecting channel-specific rules and permissions.

Learn more about [sales channel management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

## Fields

* collection

  [Collection!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  non-null

  The collection to be published on the publication.

* is​Published

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the publication is published or not.

* publication

  [Publication!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  non-null

  The publication where the collection will be published.

* publish​Date

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date that the publication was or is going to be published.

* channel

  [Channel!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [CollectionPublicationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection#returns-nodes)
* [CollectionPublicationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublicationEdge#field-CollectionPublicationEdge.fields.node)

***

## Mutations

* [collection​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionPublish)

  mutation

  Deprecated

  * input

    [Collection​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublishInput)

    required

    ### Arguments

    Specify a collection to publish and the sales channels to publish it to.

  ***

***

## CollectionPublication Mutations
