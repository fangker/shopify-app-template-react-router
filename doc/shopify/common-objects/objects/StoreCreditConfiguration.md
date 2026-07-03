---
title: StoreCreditConfiguration - GraphQL Admin
description: The store credit configuration for a shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditConfiguration.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Store​Credit​Configuration

object

The store credit configuration for a shop.

## Fields

* store​Credit​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether store credit is enabled for customers on checkout.

***

## Map

No referencing types

***

## Queries

* [store​Credit​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/storeCreditConfiguration)

  query

  Returns the store credit configuration for a shop, including whether store credit is enabled for customers at checkout. Use this to display the current state of a merchant's store credit program or check eligibility before issuing store credit to customers.

***

## StoreCreditConfiguration Queries

### Queried by

* [store​Credit​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/storeCreditConfiguration)
