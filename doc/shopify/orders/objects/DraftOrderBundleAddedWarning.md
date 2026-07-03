---
title: DraftOrderBundleAddedWarning - GraphQL Admin
description: A warning indicating that a bundle was added to a draft order.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderBundleAddedWarning
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderBundleAddedWarning.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Draft​Order​Bundle​Added​Warning

object

Requires `read_draft_orders` access scope.

A warning indicating that a bundle was added to a draft order.

## Fields

* error​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error code.

* field

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The input field that the warning applies to.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The warning message.

***

## Map

No referencing types

***

## Interfaces

* [Draft​Order​Warning](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning)

  interface

***

## DraftOrderBundleAddedWarning Implements

### Implements

* [Draft​Order​Warning](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning)
