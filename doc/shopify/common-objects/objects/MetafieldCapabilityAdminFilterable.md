---
title: MetafieldCapabilityAdminFilterable - GraphQL Admin
description: Information about the admin filterable capability on a metafield definition.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityAdminFilterable
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilityAdminFilterable.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Metafield​Capability​Admin​Filterable

object

Information about the admin filterable capability on a metafield definition.

## Fields

* eligible

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Indicates if the definition is eligible to have the capability.

* enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Indicates if the capability is enabled.

* status

  [Metafield​Definition​Admin​Filter​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionAdminFilterStatus)

  non-null

  Determines the metafield definition's filter status for use in admin filtering.

***

## Map

### Fields with this object

* [MetafieldCapabilities.adminFilterable](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilities#field-MetafieldCapabilities.fields.adminFilterable)
