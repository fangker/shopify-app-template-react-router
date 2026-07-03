---
title: FailedRequirement - GraphQL Admin
description: Requirements that must be met before an app can be installed.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/FailedRequirement'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FailedRequirement.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Failed​Requirement

object

Requirements that must be met before an app can be installed.

## Fields

* action

  [Navigation​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/NavigationItem)

  Action to be taken to resolve a failed requirement, including URL link.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A concise set of copy strings to be displayed to merchants, to guide them in resolving problems your app encounters when trying to make use of their Shop and its resources.

***

## Map

### Fields with this object

* [App.failedRequirements](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.failedRequirements)
