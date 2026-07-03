---
title: ResourceFeedback - GraphQL Admin
description: >-
  Represents feedback from apps about a resource, and the steps required to set
  up the apps on the shop.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Resource​Feedback

object

Requires `read_products` access scope.

Represents feedback from apps about a resource, and the steps required to set up the apps on the shop.

## Fields

* details

  [\[App​Feedback!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback)

  non-null

  List of AppFeedback detailing issues regarding a resource.

* summary

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Summary of resource feedback pertaining to the resource.

* app​Feedback

  [\[App​Feedback!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback)

  non-nullDeprecated

***

## Map

### Fields with this object

* [Collection.feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.feedback)
* [Product.feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.feedback)
