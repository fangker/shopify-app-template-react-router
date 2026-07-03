---
title: DeliveryCountryCodesOrRestOfWorld - GraphQL Admin
description: |-
  The list of country codes and information whether the countries
  are a part of the 'Rest Of World' shipping zone.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountryCodesOrRestOfWorld
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountryCodesOrRestOfWorld.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Country​Codes​Or​Rest​Of​World

object

Requires Any of `shipping` access scopes, `read_markets` access scope or `manage_delivery_settings` user permission.

The list of country codes and information whether the countries are a part of the 'Rest Of World' shipping zone.

## Fields

* country​Codes

  [\[Country​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  List of applicable country codes in the ISO 3166-1 alpha-2 format.

* rest​Of​World

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the countries are a part of the 'Rest of World' shipping zone.

***

## Map

### Fields with this object

* [DeliveryAvailableService.countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryAvailableService#field-DeliveryAvailableService.fields.countries)
