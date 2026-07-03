---
title: deliveryCustomizationActivation - GraphQL Admin
description: Activates and deactivates delivery customizations.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationActivation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationActivation.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# delivery​Customization​Activation

mutation

Requires `write_delivery_customizations` access scope.

Activates and deactivates delivery customizations.

## Arguments

* enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  required

  The enabled status of the delivery customizations.

* ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The global IDs of the delivery customizations.

***

## Delivery​Customization​Activation​Payload returns

* ids

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The IDs of the updated delivery customizations.

* user​Errors

  [\[Delivery​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### deliveryCustomizationActivation reference
