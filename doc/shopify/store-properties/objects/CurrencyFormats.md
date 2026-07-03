---
title: CurrencyFormats - GraphQL Admin
description: >-
  Currency formats configured for the merchant. These formats are available to
  use within Liquid.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyFormats'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyFormats.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Currency​Formats

object

Currency formats configured for the merchant. These formats are available to use within Liquid.

## Fields

* money​Format

  [Formatted​String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

  non-null

  Money without currency in HTML.

* money​In​Emails​Format

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Money without currency in emails.

* money​With​Currency​Format

  [Formatted​String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

  non-null

  Money with currency in HTML.

* money​With​Currency​In​Emails​Format

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Money with currency in emails.

***

## Map

### Fields with this object

* [Shop.currencyFormats](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.currencyFormats)
