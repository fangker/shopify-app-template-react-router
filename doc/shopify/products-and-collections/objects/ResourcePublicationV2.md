---
title: ResourcePublicationV2 - GraphQL Admin
description: >-
  A resource publication represents information about the publication of a
  resource.

  Unlike `ResourcePublication`, an instance of `ResourcePublicationV2` can't be

  unpublished. It must either be published or scheduled to be published.


  See
  [ResourcePublication](/api/admin-graphql/latest/objects/ResourcePublication)
  for more context.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationV2
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationV2.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Resource​Publication​V2

object

A resource publication represents information about the publication of a resource. Unlike `ResourcePublication`, an instance of `ResourcePublicationV2` can't be unpublished. It must either be published or scheduled to be published.

See [ResourcePublication](https://shopify.dev/api/admin-graphql/latest/objects/ResourcePublication) for more context.

## Fields

* is​Published

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the resource publication is published. If true, then the resource publication is published to the publication. If false, then the resource publication is staged to be published to the publication.

* publication

  [Publication!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  non-null

  The publication the resource publication is published to.

* publishable

  [Publishable!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

  non-null

  The resource published to the publication.

* publish​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date that the resource publication was or is going to be published to the publication.

***

## Map

### Fields and connections with this object

* [Collection.resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublicationsV2)
* [Product.resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.resourcePublicationsV2)
* [ProductVariant.resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.resourcePublicationsV2)
* [Publishable.resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-resourcePublicationsV2)
* [ResourcePublicationV2Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationV2Connection#returns-nodes)
* [ResourcePublicationV2Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationV2Edge#field-ResourcePublicationV2Edge.fields.node)
