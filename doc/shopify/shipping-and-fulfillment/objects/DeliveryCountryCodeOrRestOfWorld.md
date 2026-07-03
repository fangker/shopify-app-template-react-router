---
title: DeliveryCountryCodeOrRestOfWorld - GraphQL Admin
description: >-
  The country code and whether the country is a part of the 'Rest Of World'
  shipping zone.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountryCodeOrRestOfWorld
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountryCodeOrRestOfWorld.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Country​Code​Or​Rest​Of​World

object

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

The country code and whether the country is a part of the 'Rest Of World' shipping zone.

## Fields

* country​Code

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The country code in the ISO 3166-1 alpha-2 format.

* rest​Of​World

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the country is a part of the 'Rest of World' shipping zone.

***

## Map

### Fields with this object

* [DeliveryCountry.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountry#field-DeliveryCountry.fields.code)
