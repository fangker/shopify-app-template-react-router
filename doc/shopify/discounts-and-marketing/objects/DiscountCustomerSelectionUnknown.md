---
title: DiscountCustomerSelectionUnknown - GraphQL Admin
description: >-
  An unrecognized customer selection type. Use the `context` field on the parent
  discount type instead.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSelectionUnknown
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSelectionUnknown.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Discount​Customer​Selection​Unknown

object

Requires Apps must have `read_discounts` access scope.

An unrecognized customer selection type. Use the `context` field on the parent discount type instead.

## Fields

* customer​Selection​Type

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The underlying customer selection type.

***

## Map

### Possible type in

* [Discount​Customer​Selection](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerSelection)
