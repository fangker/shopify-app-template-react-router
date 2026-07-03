---
title: MetafieldCapabilities - GraphQL Admin
description: Provides the capabilities of a metafield definition.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilities
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilities.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Capabilities

object

Provides the capabilities of a metafield definition.

## Fields

* admin​Filterable

  [Metafield​Capability​Admin​Filterable!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityAdminFilterable)

  non-null

  Indicate whether a metafield definition is configured for filtering.

* analytics​Queryable

  [Metafield​Capability​Analytics​Queryable!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityAnalyticsQueryable)

  non-null

  Indicate whether a metafield definition can be queried in analytics.

* cart​To​Order​Copyable

  [Metafield​Capability​Cart​To​Order​Copyable!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityCartToOrderCopyable)

  non-null

  The capability configuration for automatically copying values from a cart metafield to the corresponding order metafield when an order is created.

* smart​Collection​Condition

  [Metafield​Capability​Smart​Collection​Condition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilitySmartCollectionCondition)

  non-null

  Indicate whether a metafield definition can be used as a smart collection condition.

* unique​Values

  [Metafield​Capability​Unique​Values!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityUniqueValues)

  non-null

  Indicate whether the metafield values for a metafield definition are required to be unique.

***

## Map

### Fields with this object

* [MetafieldDefinition.capabilities](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.capabilities)
