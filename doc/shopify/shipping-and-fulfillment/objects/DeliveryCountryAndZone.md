---
title: DeliveryCountryAndZone - GraphQL Admin
description: The country details and the associated shipping zone.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountryAndZone
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountryAndZone.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Country​And​Zone

object

The country details and the associated shipping zone.

## Fields

* country

  [Delivery​Country!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCountry)

  non-null

  The country details.

* zone

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the shipping zone.

***

## Map

### Fields with this object

* [DeliveryProfileLocationGroup.countriesInAnyZone](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup#field-DeliveryProfileLocationGroup.fields.countriesInAnyZone)
