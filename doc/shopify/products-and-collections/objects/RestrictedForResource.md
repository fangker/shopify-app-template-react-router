---
title: RestrictedForResource - GraphQL Admin
description: Information about product is restricted for a given resource.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/RestrictedForResource
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/RestrictedForResource.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Restricted​For​Resource

object

Requires `read_order_edits` access scope or `read_publications` access scope.

Information about product is restricted for a given resource.

## Fields

* restricted

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Returns true when the product is restricted for the given resource.

* restricted​Reason

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Restriction reason for the given resource.

***

## Map

### Fields with this object

* [Product.restrictedForResource](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.restrictedForResource)
