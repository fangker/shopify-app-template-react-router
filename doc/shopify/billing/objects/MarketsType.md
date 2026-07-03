---
title: MarketsType - GraphQL Admin
description: Markets entitlement information.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsType.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Markets​Type

object

Markets entitlement information.

## Fields

* b2b

  [Markets​B2BEntitlement!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsB2BEntitlement)

  non-null

  The entitlements for B2B markets.

* regions

  [Markets​Regions​Entitlement!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsRegionsEntitlement)

  non-null

  The entitlements for region markets.

* retail

  [Markets​Retail​Entitlement!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsRetailEntitlement)

  non-null

  The entitlements for retail markets.

* themes

  [Markets​Themes​Entitlement!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsThemesEntitlement)

  non-null

  The entitlements for themes.

***

## Map

### Fields with this object

* [EntitlementsType.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/EntitlementsType#field-EntitlementsType.fields.markets)
