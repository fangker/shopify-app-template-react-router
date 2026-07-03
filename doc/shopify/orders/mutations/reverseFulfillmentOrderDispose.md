---
title: reverseFulfillmentOrderDispose - GraphQL Admin
description: Disposes reverse fulfillment order line items.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# reverse​Fulfillment​Order​Dispose

mutation

Requires `write_returns` access scope or `write_marketplace_returns` access scope.

Disposes reverse fulfillment order line items.

## Arguments

* disposition​Inputs

  [\[Reverse​Fulfillment​Order​Dispose​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput)

  required

  The input parameters required to dispose reverse fulfillment order line items.

***

## Reverse​Fulfillment​Order​Dispose​Payload returns

* reverse​Fulfillment​Order​Line​Items

  [\[Reverse​Fulfillment​Order​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem)

  The disposed reverse fulfillment order line items.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### reverseFulfillmentOrderDispose reference
