---
title: CountryHarmonizedSystemCode - GraphQL Admin
description: >-
  The country-specific harmonized system code and ISO country code for an
  inventory item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CountryHarmonizedSystemCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CountryHarmonizedSystemCode.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Country​Harmonized​System​Code

object

Requires `read_inventory` access scope or `read_products` access scope.

The country-specific harmonized system code and ISO country code for an inventory item.

## Fields

* country​Code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The ISO 3166-1 alpha-2 country code for the country that issued the specified harmonized system code.

* harmonized​System​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The country-specific harmonized system code. These are usually longer than 6 digits.

***

## Map

### Fields and connections with this object

* [CountryHarmonizedSystemCodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection#returns-nodes)
* [CountryHarmonizedSystemCodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CountryHarmonizedSystemCodeEdge#field-CountryHarmonizedSystemCodeEdge.fields.node)
* [InventoryItem.countryHarmonizedSystemCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.countryHarmonizedSystemCodes)
