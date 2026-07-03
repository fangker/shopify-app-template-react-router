---
title: MetaobjectCapabilities - GraphQL Admin
description: Provides the capabilities of a metaobject definition.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilities
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilities.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metaobject​Capabilities

object

Provides the capabilities of a metaobject definition.

## Fields

* online​Store

  [Metaobject​Capabilities​Online​Store](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilitiesOnlineStore)

  Indicates whether a metaobject definition can be displayed as a page on the Online Store.

* publishable

  [Metaobject​Capabilities​Publishable!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilitiesPublishable)

  non-null

  Indicate whether a metaobject definition is publishable.

* renderable

  [Metaobject​Capabilities​Renderable](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilitiesRenderable)

  Indicate whether a metaobject definition is renderable and exposes SEO data.

* translatable

  [Metaobject​Capabilities​Translatable!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilitiesTranslatable)

  non-null

  Indicate whether a metaobject definition is translatable.

***

## Map

### Fields with this object

* [MetaobjectDefinition.capabilities](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.capabilities)
