---
title: ResourceAlertAction - GraphQL Admin
description: 'An action associated to a resource alert, such as editing variants.'
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlertAction
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlertAction.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Resource​Alert​Action

object

An action associated to a resource alert, such as editing variants.

## Fields

* primary

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the action appears as a button or as a link.

* show

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Resource for the action to show.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The text for the button in the alert. For example, *Edit variants*.

* url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The target URL that the button links to.

***

## Map

### Fields with this object

* [ResourceAlert.actions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert#field-ResourceAlert.fields.actions)
