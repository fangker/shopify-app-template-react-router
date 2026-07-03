---
title: storeCreditConfiguration - GraphQL Admin
description: |-
  Returns the store credit configuration for a shop, including whether store
  credit is enabled for customers at checkout. Use this to display the current
  state of a merchant's store credit program or check eligibility before issuing
  store credit to customers.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/storeCreditConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/storeCreditConfiguration.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# store​Credit​Configuration

query

Returns the store credit configuration for a shop, including whether store credit is enabled for customers at checkout. Use this to display the current state of a merchant's store credit program or check eligibility before issuing store credit to customers.

## Possible returns

* Store​Credit​Configuration

  [Store​Credit​Configuration!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditConfiguration)

  The store credit configuration for a shop.

  * store​Credit​Enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether store credit is enabled for customers on checkout.

***

## Examples

* ### storeCreditConfiguration reference
