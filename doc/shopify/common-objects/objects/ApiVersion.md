---
title: ApiVersion - GraphQL Admin
description: >-
  A version of the API, as defined by [Shopify API
  versioning](https://shopify.dev/api/usage/versioning).

  Versions are commonly referred to by their handle (for example, `2021-10`).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ApiVersion'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ApiVersion.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Api​Version

object

A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning). Versions are commonly referred to by their handle (for example, `2021-10`).

## Fields

* display​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The human-readable name of the version.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle.

* supported

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning).

***

## Map

### Fields with this object

* [WebhookSubscription.apiVersion](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription#field-WebhookSubscription.fields.apiVersion)

***

## Queries

* [public​Api​Versions](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicApiVersions)

  query

  The list of publicly-accessible Admin API versions, including supported versions, the release candidate, and unstable versions.

***

## ApiVersion Queries

### Queried by

* [public​Api​Versions](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicApiVersions)
