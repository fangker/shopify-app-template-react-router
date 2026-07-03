---
title: ShopBillingPreferences - GraphQL Admin
description: Billing preferences for the shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopBillingPreferences
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopBillingPreferences.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Billing​Preferences

object

Billing preferences for the shop.

## Fields

* currency

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The currency the shop uses to pay for apps and services.

***

## Map

No referencing types

***

## Queries

* [shop​Billing​Preferences](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopBillingPreferences)

  query

  The shop's billing preferences, including the currency for paying for apps and services. Use this to create [app charges in the merchant's local billing currency](https://shopify.dev/docs/apps/launch/billing#supported-currencies), helping them budget their app spend without exposure to exchange rate fluctuations.

***

## ShopBillingPreferences Queries

### Queried by

* [shop​Billing​Preferences](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopBillingPreferences)
