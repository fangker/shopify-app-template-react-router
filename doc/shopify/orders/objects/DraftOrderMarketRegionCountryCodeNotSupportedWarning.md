---
title: DraftOrderMarketRegionCountryCodeNotSupportedWarning - GraphQL Admin
description: >-
  A warning indicating that the market region country code is not supported with
  Markets.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderMarketRegionCountryCodeNotSupportedWarning
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderMarketRegionCountryCodeNotSupportedWarning.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Draft​Order​Market​Region​Country​Code​Not​Supported​Warning

object

Requires `read_draft_orders` access scope.

A warning indicating that the market region country code is not supported with Markets.

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

## DraftOrderMarketRegionCountryCodeNotSupportedWarning Implements

### Implements

* [Draft​Order​Warning](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning)
