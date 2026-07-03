---
title: ResourcePublication - GraphQL Admin
description: >-
  A resource publication represents information about the publication of a
  resource.

  An instance of `ResourcePublication`, unlike `ResourcePublicationV2`, can be
  neither published or scheduled to be published.


  See
  [ResourcePublicationV2](/api/admin-graphql/latest/objects/ResourcePublicationV2)
  for more context.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublication
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublication.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Resource​Publication

object

A resource publication represents information about the publication of a resource. An instance of `ResourcePublication`, unlike `ResourcePublicationV2`, can be neither published or scheduled to be published.

See [ResourcePublicationV2](https://shopify.dev/api/admin-graphql/latest/objects/ResourcePublicationV2) for more context.

## Fields

* is​Published

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the resource publication is published. Also returns true if the resource publication is scheduled to be published. If false, then the resource publication is neither published nor scheduled to be published.

* publication

  [Publication!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  non-null

  The publication the resource publication is published to.

* publishable

  [Publishable!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

  non-null

  The resource published to the publication.

* publish​Date

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date that the resource publication was or is going to be published to the publication. If the product isn't published, then this field returns an epoch timestamp.

* channel

  [Channel!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [Channel.collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collectionPublicationsV3)
* [Channel.productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.productPublicationsV3)
* [Collection.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublications)
* [Product.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.resourcePublications)
* [ProductVariant.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.resourcePublications)
* [Publication.collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.collectionPublicationsV3)
* [Publication.productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.productPublicationsV3)
* [Publishable.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-resourcePublications)
* [ResourcePublicationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection#returns-nodes)
* [ResourcePublicationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationEdge#field-ResourcePublicationEdge.fields.node)
