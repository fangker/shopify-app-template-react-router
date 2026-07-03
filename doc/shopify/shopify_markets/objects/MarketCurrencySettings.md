---
title: MarketCurrencySettings - GraphQL Admin
description: A market's currency settings.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Market​Currency​Settings

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A market's currency settings.

## Fields

* base​Currency

  [Currency​Setting!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting)

  non-null

  The currency which this market's customers must use if local currencies are disabled.

* local​Currencies

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether or not local currencies are enabled. If enabled, then prices will be converted to give each customer the best experience based on their region. If disabled, then all customers in this market will see prices in the market's base currency.

* rounding​Enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether or not rounding is enabled on multi-currency prices.

***

## Map

### Fields with this object

* [Market.currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.currencySettings)
