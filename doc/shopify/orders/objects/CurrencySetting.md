---
title: CurrencySetting - GraphQL Admin
description: A setting for a presentment currency.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Currency​Setting

object

A setting for a presentment currency.

## Fields

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The currency's ISO code.

* currency​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The full name of the currency.

* enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the currency is enabled or not. An enabled currency setting is visible to buyers and allows orders to be generated with that currency as presentment.

* manual​Rate

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The manual rate, if enabled, that applies to this currency when converting from shop currency. This rate is specific to the associated market's currency setting.

* rate​Updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the active exchange rate for the currency was last modified. It can be the automatic rate's creation date, or the manual rate's last updated at date if active.

***

## Map

### Fields and connections with this object

* [CurrencySettingConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection#returns-nodes)
* [CurrencySettingEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySettingEdge#field-CurrencySettingEdge.fields.node)
* [MarketCurrencySettings.baseCurrency](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings#field-MarketCurrencySettings.fields.baseCurrency)
* [MarketRegionCountry.currency](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionCountry#field-MarketRegionCountry.fields.currency)
* [Shop.currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.currencySettings)
