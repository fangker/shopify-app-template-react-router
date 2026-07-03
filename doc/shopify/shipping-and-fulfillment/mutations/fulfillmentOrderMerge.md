---
title: fulfillmentOrderMerge - GraphQL Admin
description: |-
  Merges a set or multiple sets of fulfillment orders together into one based on
  line item inputs and quantities.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMerge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMerge.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# fulfillment​Order​Merge

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Merges a set or multiple sets of fulfillment orders together into one based on line item inputs and quantities.

## Arguments

* fulfillment​Order​Merge​Inputs

  [\[Fulfillment​Order​Merge​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInput)

  required

  One or more sets of fulfillment orders to be merged.

***

## Fulfillment​Order​Merge​Payload returns

* fulfillment​Order​Merges

  [\[Fulfillment​Order​Merge​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeResult)

  The result of the fulfillment order merges.

* user​Errors

  [\[Fulfillment​Order​Merge​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### fulfillmentOrderMerge reference
