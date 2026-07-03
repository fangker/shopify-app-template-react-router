---
title: deliveryCustomizationDelete - GraphQL Admin
description: Creates a delivery customization.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationDelete
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationDelete.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# delivery​Customization​Delete

mutation

Requires `write_delivery_customizations` access scope.

Creates a delivery customization.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The global ID of the delivery customization.

***

## Delivery​Customization​Delete​Payload returns

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Returns the deleted delivery customization ID.

* user​Errors

  [\[Delivery​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### deliveryCustomizationDelete reference
