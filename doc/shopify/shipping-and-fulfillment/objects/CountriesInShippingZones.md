---
title: CountriesInShippingZones - GraphQL Admin
description: The list of all the countries from the combined shipping zones for the shop.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CountriesInShippingZones
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CountriesInShippingZones.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Countries​In​Shipping​Zones

object

The list of all the countries from the combined shipping zones for the shop.

## Fields

* country​Codes

  [\[Country​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The list of all the countries from all the combined shipping zones.

* include​Rest​Of​World

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether 'Rest of World' has been defined in any of the shipping zones.

***

## Map

### Fields with this object

* [Shop.countriesInShippingZones](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.countriesInShippingZones)
