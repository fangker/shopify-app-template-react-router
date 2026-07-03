---
title: shippingPackageUpdate - GraphQL Admin
description: Updates a shipping package.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# shipping​Package​Update

mutation

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

Updates a shipping package.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the shipping package to update.

* shipping​Package

  [Custom​Shipping​Package​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput)

  required

  Specifies the input fields for a shipping package.

***

## Shipping​Package​Update​Payload returns

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### shippingPackageUpdate reference
